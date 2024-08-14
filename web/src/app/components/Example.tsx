import { AnchorProvider, Program } from '@coral-xyz/anchor';
import {
  AnchorWallet,
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';
import { SpaceCastle } from '../../types/space_castle';
import idl from '../../idl/space_castle.json';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
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

const simulateTransaction = async (
  tx: Transaction,
  connection: Connection,
  publicKey: PublicKey
) => {
  try {
    tx.feePayer = publicKey;
    const simulationResult = await connection.simulateTransaction(tx);
    console.log('Simulation result:', simulationResult);
    if (simulationResult.value.err) {
      console.error(
        'Simulation failed:',
        simulationResult.value.err,
        simulationResult
      );
      return false;
    } else {
      return tx;
    }
  } catch (e) {
    console.error('Transaction error:', e);
    return false;
  }
};

export const Balances = () => {
  const provider = useAnchorProvider();
  const program = useSpaceCastleProgram(provider);
  const programId = program.programId;
  const { publicKey } = useWallet();
  const [amounts, setAmounts] = useState({
    igt: 0,
    metal: 0,
    crystal: 0,
    chemical: 0,
    fuel: 0,
  });
  const [cacheAmounts, setCacheAmounts] = useState({
    igt: 0,
    metal: 0,
    crystal: 0,
    chemical: 0,
    fuel: 0,
  });
  const getPlayerCache = useCallback(async () => {
    if (!publicKey) return;
    const [pda] = PublicKey.findProgramAddressSync(
      [Buffer.from('player_cache'), publicKey.toBuffer()],
      programId
    );
    try {
      const player_cache = await program.account.playerCache.fetch(pda);
      setCacheAmounts({
        igt: player_cache.resources.igt.toNumber(),
        metal: player_cache.resources.metal.toNumber(),
        crystal: player_cache.resources.crystal.toNumber(),
        chemical: player_cache.resources.chemical.toNumber(),
        fuel: player_cache.resources.fuel.toNumber(),
      });
    } catch (e) {
      // no created yet
    }
  }, [program.account.playerCache, programId, publicKey]);
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
      try {
        const balance = await provider.connection.getTokenAccountBalance(ata);
        return balance.value.uiAmount ?? 0;
      } catch (e) {
        return 0;
      }
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
    getPlayerCache();
  }, [getPlayerBalances, getPlayerCache]);

  return (
    <>
      {' '}
      <p style={{ fontSize: '1.4em', textAlign: 'center', paddingTop: '2em' }}>
        {amounts.igt} iGT | {amounts.metal} rMETL | {amounts.crystal} rCRYS |{' '}
        {amounts.chemical} rCHEM | {amounts.fuel} rFUEL
      </p>
      <p style={{ fontSize: '1.4em', textAlign: 'center' }}>
        In player cache: {cacheAmounts.igt} iGT | {cacheAmounts.metal} rMETL |{' '}
        {cacheAmounts.crystal} rCRYS | {cacheAmounts.chemical} rCHEM |{' '}
        {cacheAmounts.fuel} rFUEL
      </p>
    </>
  );
};

export const CreatePlayer = () => {
  const anchorProvider = useAnchorProvider();
  const program = useSpaceCastleProgram(anchorProvider);
  const { publicKey } = useWallet();
  const createNewPlayer = async () => {
    if (!publicKey) return;
    await program.methods
      .playerRegister('Alien :P')
      .accounts({
        signer: publicKey,
      })
      .rpc();
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

export const ClaimPlayerCache = () => {
  const anchorProvider = useAnchorProvider();
  const program = useSpaceCastleProgram(anchorProvider);
  const { publicKey } = useWallet();
  const claimCache = async () => {
    if (!publicKey) return;
    await program.methods
      .playerClaimResourceCache()
      .accounts({
        signer: publicKey,
      })
      .rpc();
  };

  return (
    <div>
      <button
        style={{ fontSize: '1.4em', padding: '.3em' }}
        onClick={claimCache}
      >
        Claim player resource cache
      </button>
      <br />
      <small>
        Whoopsy, i didnt realize i dont reset the cache object to 0 xD, its a
        free money (resource) glitch right now, will be fixed ofc
      </small>
    </div>
  );
};

export const RegisterResourceAccounts = () => {
  const anchorProvider = useAnchorProvider();
  const program = useSpaceCastleProgram(anchorProvider);
  const { publicKey } = useWallet();
  const claimResources = async () => {
    if (!publicKey) return;
    await program.methods
      .playerCreateResourceAccountMetal()
      .accounts({
        signer: publicKey,
      })
      .postInstructions([
        await program.methods
          .playerCreateResourceAccountCrystal()
          .accounts({
            signer: publicKey,
          })
          .instruction(),
        await program.methods
          .playerCreateResourceAccountChemical()
          .accounts({
            signer: publicKey,
          })
          .instruction(),
        await program.methods
          .playerCreateResourceAccountFuel()
          .accounts({
            signer: publicKey,
          })
          .instruction(),
      ])
      .rpc();
  };

  return (
    <button
      style={{ fontSize: '1.4em', padding: '.3em' }}
      onClick={claimResources}
    >
      Register resource accounts
    </button>
  );
};

export const ClaimPlanet = () => {
  const anchorProvider = useAnchorProvider();
  const program = useSpaceCastleProgram(anchorProvider);
  const { publicKey } = useWallet();
  const claimPlanet = async (x: number, y: number) => {
    if (!publicKey) {
      return;
    }
    await program.methods
      .planetFirstClaim(x, y)
      .accounts({
        signer: publicKey,
      })
      .rpc();
  };
  return (
    <button
      style={{ fontSize: '1.4em', padding: '.3em' }}
      onClick={() => claimPlanet(2, 20)}
    >
      Claim planet at [X, Y]
    </button>
  );
};

// Some valid planet spots:
// const data = [
//   [1, 3], taken
//   [2, 6], taken
//   [2, 20], taken
//   [3, 15],
//   [3, 17],
//   [3, 31],
//   [3, 45],
//   [4, 4],
//   [4, 8],
//   [4, 22],
//   [4, 36],
//   [4, 48],
//   [4, 50],
//   [4, 64],
//   [4, 78],
//   [5, 7],
//   [5, 15],
//   [5, 21],
//   [5, 35],
//   [5, 37],
//   [5, 49],
//   [5, 63],
//   [5, 77],
//   [5, 89],
//   [5, 91],
//   [6, 14],
//   [6, 28],
//   [6, 42],
//   [6, 56],
//   [6, 64],
//   [6, 70],
//   [6, 84],
//   [6, 86],
//   [6, 98],
//   [7, 1],
//   [7, 15],
//   [7, 29],
//   [7, 43],
//   [7, 47],
//   [7, 57],
//   [7, 71],
//   [7, 85],
//   [7, 99],
//   [8, 2],
//   [8, 10],
//   [8, 24],
//   [8, 30],
//   [8, 38],
//   [8, 52],
//   [8, 66],
//   [8, 80],
//   [8, 94],
//   [9, 13],
//   [9, 27],
//   [9, 37],
//   [9, 41],
//   [9, 55],
//   [9, 69],
//   [9, 83],
//   [9, 97],
//   [10, 0],
//   [10, 24],
//   [10, 38],
//   [10, 44],
//   [10, 52],
//   [10, 66],
//   [10, 80],
//   [10, 94],
//   [11, 7],
//   [11, 11],
//   [11, 15],
//   [11, 29],
//   [11, 43],
//   [11, 57],
//   [11, 59],
//   [11, 71],
//   [11, 85],
//   [11, 95],
//   [11, 99],
//   [12, 2],
//   [12, 14],
//   [12, 28],
//   [12, 42],
//   [12, 56],
//   [12, 70],
//   [12, 82],
//   [12, 84],
//   [12, 98],
//   [13, 1],
//   [13, 9],
//   [13, 21],
//   [13, 35]
// ];
