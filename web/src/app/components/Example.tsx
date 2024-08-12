import { AnchorProvider, Program } from '@coral-xyz/anchor';
import {
  AnchorWallet,
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';
import { SpaceCastle } from '../../types/space_castle';
import idl from '../../idl/space_castle.json';
import { PublicKey } from '@solana/web3.js';
import { getAssociatedTokenAddressSync } from '@solana/spl-token';
import { useCallback, useEffect, useMemo, useState } from 'react';

const useSpaceCastleProgram = (provider: AnchorProvider) => {
  const program = useMemo(
    () => new Program(idl as SpaceCastle, provider),
    [provider]
  );
  return program;
};

export function useAnchorProvider() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const provider = useMemo(
    () =>
      new AnchorProvider(connection, wallet as AnchorWallet, {
        commitment: 'confirmed',
      }),
    [connection, wallet]
  );
  return provider;
}

export const Balances = () => {
  const provider = useAnchorProvider();
  const programId = useSpaceCastleProgram(provider).programId;
  const { publicKey } = useWallet();
  const [amounts, setAmounts] = useState({
    igt: 0,
    metal: 0,
    crystal: 0,
    chemical: 0,
    fuel: 0,
  });
  const getPlayerHolding = useCallback(
    async (mintKey: string) => {
      if (!publicKey) return 0;
      let ata: PublicKey;
      if (mintKey === 'igt') {
        const [mintIGT] = PublicKey.findProgramAddressSync(
          [Buffer.from('mint_igt')],
          programId
        );
        ata = getAssociatedTokenAddressSync(mintIGT, publicKey);
      } else {
        ata = PublicKey.findProgramAddressSync(
          [Buffer.from('account_' + mintKey), publicKey.toBuffer()],
          programId
        )[0];
      }
      const balance = await provider.connection.getTokenAccountBalance(ata);
      return balance.value.uiAmount ?? 0;
    },
    [programId, provider.connection, publicKey]
  );
  const getPlayerBalances = useCallback(async () => {
    const balances = {
      igt: 0,
      metal: 0,
      crystal: 0,
      chemical: 0,
      fuel: 0,
    };
    for (const r of ['igt', 'metal', 'crystal', 'chemical', 'fuel']) {
      balances[r as 'igt' | 'metal' | 'crystal' | 'chemical' | 'fuel'] =
        await getPlayerHolding(r);
    }
    setAmounts(balances);
  }, [getPlayerHolding]);

  useEffect(() => {
    getPlayerBalances();
  }, [getPlayerBalances]);

  return (
    <p style={{ fontSize: '1.4em', textAlign: 'center', paddingTop: '2em' }}>
      {amounts.igt} iGT | {amounts.metal} rMETL | {amounts.crystal} rCRYS |{' '}
      {amounts.chemical} rCHEM | {amounts.fuel} rFUEL
    </p>
  );
};

export const CreatePlayer = () => {
  const anchorProvider = useAnchorProvider();
  const program = useSpaceCastleProgram(anchorProvider);
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const createNewPlayer = async () => {
    if (!publicKey) return;
    try {
      const tx = await program.methods
        .playerRegister('Alien :P')
        .accounts({
          signer: publicKey,
        })
        .transaction();

      await sendTransaction(tx, connection);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <button
      style={{ fontSize: '1.4em', padding: '.3em' }}
      onClick={createNewPlayer}
    >
      New Player
    </button>
  );
};

export const ClaimResources = () => {
  const anchorProvider = useAnchorProvider();
  const program = useSpaceCastleProgram(anchorProvider);
  const { publicKey, sendTransaction, wallet } = useWallet();
  const { connection } = useConnection();
  const claimResources = async () => {
    if (!publicKey) return;
    try {
      const tx1 = await program.methods
        .playerCreateResourceAccountMetal()
        .accounts({
          signer: publicKey,
        })
        .transaction();
      const tx2 = await program.methods
        .playerCreateResourceAccountCrystal()
        .accounts({
          signer: publicKey,
        })
        .transaction();
      const tx3 = await program.methods
        .playerCreateResourceAccountChemical()
        .accounts({
          signer: publicKey,
        })
        .transaction();
      const tx4 = await program.methods
        .playerCreateResourceAccountFuel()
        .accounts({
          signer: publicKey,
        })
        .transaction();
      const tx = tx1.add(tx2).add(tx3).add(tx4);

      await sendTransaction(tx, connection);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <button
      style={{ fontSize: '1.4em', padding: '.3em' }}
      onClick={claimResources}
    >
      Get Resources
    </button>
  );
};

export const ClaimPlanet = () => {
  const anchorProvider = useAnchorProvider();
  const program = useSpaceCastleProgram(anchorProvider);
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const claimPlanet = async () => {
    if (!publicKey) return;
    try {
      const tx = await program.methods
        .planetFirstClaim(1, 3)
        .accounts({
          signer: publicKey,
        })
        .transaction();

      await sendTransaction(tx, connection);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <button
      style={{ fontSize: '1.4em', padding: '.3em' }}
      onClick={claimPlanet}
    >
      Claim planet at [1, 3]
    </button>
  );
};
