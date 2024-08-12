/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/space_castle.json`.
 */
export type SpaceCastle = {
  "address": "BKbyqruPEXwvSfiQZ9hLZSich3heeU3ZBkrM69KQ276f",
  "metadata": {
    "name": "spaceCastle",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "fleetAttack",
      "docs": [
        "Attack a fleet or planet at (x, y)"
      ],
      "discriminator": [
        35,
        167,
        113,
        117,
        245,
        251,
        150,
        115
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "fleet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  101,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "fleetTarget",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  101,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "targetX"
              },
              {
                "kind": "arg",
                "path": "targetY"
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "playerCache",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114,
                  95,
                  99,
                  97,
                  99,
                  104,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "playerCacheTarget",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114,
                  95,
                  99,
                  97,
                  99,
                  104,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "mintFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u16"
        },
        {
          "name": "y",
          "type": "u16"
        },
        {
          "name": "targetX",
          "type": "u16"
        },
        {
          "name": "targetY",
          "type": "u16"
        }
      ]
    },
    {
      "name": "fleetMove",
      "docs": [
        "Move a fleet to (x, y)"
      ],
      "discriminator": [
        0,
        43,
        130,
        83,
        146,
        102,
        220,
        86
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "fleetFrom",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  101,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "fleetTo",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  101,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "moveToX"
              },
              {
                "kind": "arg",
                "path": "moveToY"
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mintFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u16"
        },
        {
          "name": "y",
          "type": "u16"
        },
        {
          "name": "moveX",
          "type": "u16"
        },
        {
          "name": "moveY",
          "type": "u16"
        }
      ]
    },
    {
      "name": "fleetNew",
      "docs": [
        "",
        "fleet",
        "",
        "Create a new fleet at (x, y)"
      ],
      "discriminator": [
        105,
        81,
        165,
        157,
        45,
        111,
        39,
        192
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "planetHolding",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  110,
                  101,
                  116,
                  95,
                  104,
                  111,
                  108,
                  100,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "fleet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  101,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u16"
        },
        {
          "name": "y",
          "type": "u16"
        },
        {
          "name": "template",
          "type": {
            "array": [
              {
                "option": {
                  "defined": {
                    "name": "squadronBlueprint"
                  }
                }
              },
              9
            ]
          }
        }
      ]
    },
    {
      "name": "marketPoolCreate",
      "docs": [
        "Market pool",
        "",
        "Market pool - Create the market liquidity pool"
      ],
      "discriminator": [
        190,
        9,
        145,
        63,
        26,
        90,
        32,
        31
      ],
      "accounts": [
        {
          "name": "marketPool",
          "docs": [
            "Liquidity Pool"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "payer",
          "docs": [
            "Rent payer"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "System Program: Required for creating the Liquidity Pool"
          ],
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "marketPoolFund",
      "docs": [
        "Market pool - Provide liquidity to the pool by funding it with some asset"
      ],
      "discriminator": [
        232,
        212,
        84,
        21,
        136,
        105,
        71,
        236
      ],
      "accounts": [
        {
          "name": "marketPool",
          "docs": [
            "Liquidity Pool"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "docs": [
            "The mint account for the asset being deposited into the pool"
          ]
        },
        {
          "name": "resourceAuthority",
          "docs": [
            "RESOURCE AUTH"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "poolTokenAccount",
          "docs": [
            "The Liquidity Pool's token account for the asset being deposited into",
            "the pool"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "marketPool"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "payerTokenAccount",
          "docs": [
            "The payer's - or Liquidity Provider's - token account for the asset",
            "being deposited into the pool"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "payer"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "System Program: Required for creating the Liquidity Pool's token account",
            "for the asset being deposited into the pool"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program: Required for transferring the assets from the Liquidity",
            "Provider's token account into the Liquidity Pool's token account"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "docs": [
            "Associated Token Program: Required for creating the Liquidity Pool's",
            "token account for the asset being deposited into the pool"
          ],
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "payInResource",
          "type": "bool"
        }
      ]
    },
    {
      "name": "marketPoolMintTo",
      "docs": [
        "Market pool - Provide liquidity to the pool by funding it with some asset"
      ],
      "discriminator": [
        65,
        110,
        25,
        252,
        215,
        199,
        29,
        60
      ],
      "accounts": [
        {
          "name": "marketPool",
          "docs": [
            "Market Pool"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "docs": [
            "The mint account for the asset being deposited into the pool"
          ],
          "writable": true
        },
        {
          "name": "poolTokenAccount",
          "docs": [
            "The Market Pool's token account for the asset being deposited into",
            "the pool"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "marketPool"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "System Program: Required for creating the Market Pool's token account",
            "for the asset being deposited into the pool"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program: Required for transferring the assets from the Liquidity",
            "Provider's token account into the Market Pool's token account"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "docs": [
            "Associated Token Program: Required for creating the Market Pool's",
            "token account for the asset being deposited into the pool"
          ],
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "resource",
          "type": "string"
        }
      ]
    },
    {
      "name": "marketPoolSwap",
      "docs": [
        "Market pool - swap assets in the Market pool"
      ],
      "discriminator": [
        166,
        76,
        148,
        178,
        40,
        6,
        199,
        185
      ],
      "accounts": [
        {
          "name": "pool",
          "docs": [
            "Market Pool"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "docs": [
            "RESOURCE AUTH"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "receiveMint",
          "docs": [
            "The mint account for the asset the user is requesting to receive in",
            "exchange"
          ]
        },
        {
          "name": "poolReceiveTokenAccount",
          "docs": [
            "The Market Pool's token account for the mint of the asset the user is",
            "requesting to receive in exchange (which will be debited)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "receiveMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "payerReceiveTokenAccount",
          "docs": [
            "The user's token account for the mint of the asset the user is",
            "requesting to receive in exchange (which will be credited)"
          ],
          "writable": true
        },
        {
          "name": "payMint",
          "docs": [
            "The mint account for the asset the user is proposing to pay in the swap"
          ]
        },
        {
          "name": "poolPayTokenAccount",
          "docs": [
            "The Market Pool's token account for the mint of the asset the user is",
            "proposing to pay in the swap (which will be credited)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "pool"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "payMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "payerPayTokenAccount",
          "docs": [
            "The user's token account for the mint of the asset the user is",
            "proposing to pay in the swap (which will be debited)"
          ],
          "writable": true
        },
        {
          "name": "payer",
          "docs": [
            "The authority requesting to swap (user)"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Token Program: Required for transferring the assets between all token",
            "accounts involved in the swap"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": [
        {
          "name": "amountToSwap",
          "type": "u64"
        },
        {
          "name": "payInResource",
          "type": "bool"
        }
      ]
    },
    {
      "name": "mintChemical",
      "docs": [
        "Mint Chemicals to X Account"
      ],
      "discriminator": [
        187,
        186,
        217,
        155,
        61,
        28,
        196,
        73
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "tokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintCrystal",
      "docs": [
        "Mint Crystal to X Account"
      ],
      "discriminator": [
        153,
        42,
        168,
        45,
        84,
        9,
        228,
        154
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "tokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintFuel",
      "docs": [
        "Mint Fuel to X Account"
      ],
      "discriminator": [
        191,
        245,
        76,
        54,
        243,
        13,
        175,
        232
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "tokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintIgt",
      "docs": [
        "Mint IGT to X Account"
      ],
      "discriminator": [
        151,
        178,
        21,
        56,
        123,
        109,
        13,
        151
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  105,
                  103,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "tokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "payer"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintInitChemical",
      "docs": [
        "Create Chemical Mint"
      ],
      "discriminator": [
        42,
        103,
        78,
        106,
        56,
        255,
        62,
        224
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "metadata",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "mintInitCrystal",
      "docs": [
        "Create Crystal Mint"
      ],
      "discriminator": [
        8,
        249,
        143,
        99,
        158,
        159,
        66,
        187
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "metadata",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "mintInitFuel",
      "docs": [
        "Create Fuel Mint"
      ],
      "discriminator": [
        169,
        55,
        111,
        245,
        191,
        57,
        20,
        88
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "metadata",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "mintInitIgt",
      "docs": [
        "",
        "Mints & Tokens",
        "",
        "Create IGT Mint"
      ],
      "discriminator": [
        115,
        242,
        127,
        88,
        239,
        40,
        44,
        201
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  105,
                  103,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "metadata",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "mintInitMetal",
      "docs": [
        "Create Metal Mint"
      ],
      "discriminator": [
        100,
        0,
        147,
        152,
        226,
        173,
        21,
        28
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "metadata",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "mintMetal",
      "docs": [
        "Mint Metal to X Account"
      ],
      "discriminator": [
        196,
        191,
        245,
        63,
        169,
        48,
        226,
        45
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "tokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "planetBuildingChange",
      "docs": [
        "Planet - change a building"
      ],
      "discriminator": [
        30,
        239,
        159,
        83,
        223,
        173,
        202,
        206
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "planetHolding",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  110,
                  101,
                  116,
                  95,
                  104,
                  111,
                  108,
                  100,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mintMetal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "mintChemical",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "mintCrystal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "mintFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountMetal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "accountCrystal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "accountChemical",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "accountFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u16"
        },
        {
          "name": "y",
          "type": "u16"
        },
        {
          "name": "buildingTypeFrom",
          "type": {
            "defined": {
              "name": "buildingType"
            }
          }
        },
        {
          "name": "buildingTypeTo",
          "type": {
            "defined": {
              "name": "buildingType"
            }
          }
        }
      ]
    },
    {
      "name": "planetBuildingNew",
      "docs": [
        "Planet - build a new building"
      ],
      "discriminator": [
        183,
        206,
        12,
        5,
        35,
        96,
        43,
        227
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "planetHolding",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  110,
                  101,
                  116,
                  95,
                  104,
                  111,
                  108,
                  100,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mintMetal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "mintChemical",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "mintCrystal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "mintFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountMetal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "accountCrystal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "accountChemical",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "accountFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u16"
        },
        {
          "name": "y",
          "type": "u16"
        },
        {
          "name": "buildingType",
          "type": {
            "defined": {
              "name": "buildingType"
            }
          }
        }
      ]
    },
    {
      "name": "planetBuildingUpgrade",
      "docs": [
        "Planet - upgrade a building"
      ],
      "discriminator": [
        131,
        194,
        6,
        33,
        222,
        157,
        66,
        214
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "planetHolding",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  110,
                  101,
                  116,
                  95,
                  104,
                  111,
                  108,
                  100,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mintMetal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "mintChemical",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "mintCrystal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "mintFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountMetal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "accountCrystal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "accountChemical",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "accountFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u16"
        },
        {
          "name": "y",
          "type": "u16"
        },
        {
          "name": "buildingType",
          "type": {
            "defined": {
              "name": "buildingType"
            }
          }
        }
      ]
    },
    {
      "name": "planetFirstClaim",
      "docs": [
        "Planet",
        "",
        "Planet - First planet claim for new users"
      ],
      "discriminator": [
        94,
        1,
        243,
        98,
        107,
        86,
        95,
        132
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "planetInfo",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  110,
                  101,
                  116,
                  95,
                  105,
                  110,
                  102,
                  111
                ]
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "planetHolding",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  110,
                  101,
                  116,
                  95,
                  104,
                  111,
                  108,
                  100,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "initialFleet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  108,
                  101,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "playerInfo",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "playerCache",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114,
                  95,
                  99,
                  97,
                  99,
                  104,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u16"
        },
        {
          "name": "y",
          "type": "u16"
        }
      ]
    },
    {
      "name": "planetHarvest",
      "discriminator": [
        56,
        136,
        171,
        200,
        73,
        188,
        240,
        62
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "planetInfo",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  110,
                  101,
                  116,
                  95,
                  105,
                  110,
                  102,
                  111
                ]
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "planetHolding",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  110,
                  101,
                  116,
                  95,
                  104,
                  111,
                  108,
                  100,
                  105,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "arg",
                "path": "x"
              },
              {
                "kind": "arg",
                "path": "y"
              }
            ]
          }
        },
        {
          "name": "playerInfo",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mintMetal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountMetal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "mintCrystal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountCrystal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "mintChemical",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountChemical",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "mintFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "mintIgt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  105,
                  103,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "accountIgt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mintIgt"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "x",
          "type": "u16"
        },
        {
          "name": "y",
          "type": "u16"
        }
      ]
    },
    {
      "name": "playerClaimResourceCache",
      "discriminator": [
        42,
        112,
        154,
        19,
        226,
        164,
        52,
        133
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "playerCache",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114,
                  95,
                  99,
                  97,
                  99,
                  104,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mintMetal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountMetal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "mintCrystal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountCrystal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "mintChemical",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountChemical",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "mintFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "accountFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "mintIgt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  105,
                  103,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "accountIgt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mintIgt"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "playerCreateResourceAccountChemical",
      "discriminator": [
        125,
        191,
        144,
        213,
        79,
        108,
        227,
        98
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mintChemical",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "chemicalTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  104,
                  101,
                  109,
                  105,
                  99,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "playerCreateResourceAccountCrystal",
      "discriminator": [
        207,
        87,
        26,
        69,
        22,
        235,
        30,
        40
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mintCrystal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "crystalTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  99,
                  114,
                  121,
                  115,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "playerCreateResourceAccountFuel",
      "discriminator": [
        161,
        148,
        159,
        220,
        15,
        87,
        240,
        102
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mintFuel",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "fuelTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  102,
                  117,
                  101,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "playerCreateResourceAccountMetal",
      "discriminator": [
        28,
        85,
        240,
        135,
        244,
        170,
        140,
        132
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "resourceAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  111,
                  117,
                  114,
                  99,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mintMetal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "metalTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  95,
                  109,
                  101,
                  116,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "playerRegister",
      "docs": [
        "player",
        "",
        "Player - Registers a player"
      ],
      "discriminator": [
        56,
        193,
        219,
        93,
        178,
        7,
        171,
        91
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "player",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "mintIgt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  95,
                  105,
                  103,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "accountIgt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mintIgt"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "playerCache",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114,
                  95,
                  99,
                  97,
                  99,
                  104,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "playerName",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "fleet",
      "discriminator": [
        109,
        207,
        251,
        48,
        106,
        2,
        136,
        163
      ]
    },
    {
      "name": "marketPool",
      "discriminator": [
        180,
        105,
        154,
        232,
        165,
        224,
        174,
        203
      ]
    },
    {
      "name": "planetHolding",
      "discriminator": [
        139,
        93,
        46,
        210,
        226,
        10,
        48,
        0
      ]
    },
    {
      "name": "planetInfo",
      "discriminator": [
        127,
        111,
        70,
        126,
        112,
        190,
        84,
        39
      ]
    },
    {
      "name": "player",
      "discriminator": [
        205,
        222,
        112,
        7,
        165,
        155,
        206,
        218
      ]
    },
    {
      "name": "playerCache",
      "discriminator": [
        217,
        146,
        228,
        55,
        161,
        39,
        189,
        187
      ]
    },
    {
      "name": "resourceAuthority",
      "discriminator": [
        250,
        108,
        89,
        54,
        188,
        136,
        251,
        247
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "planetAlreadySettled",
      "msg": "Planet is already settled and cannot be claimed"
    },
    {
      "code": 6001,
      "name": "maxOneFirstPlanet",
      "msg": "Player already claimed their first planet"
    },
    {
      "code": 6002,
      "name": "noPlanetAtCoordinates",
      "msg": "Invalid planet coordinates"
    },
    {
      "code": 6003,
      "name": "noAuthority",
      "msg": "No authority over this planet)"
    }
  ],
  "types": [
    {
      "name": "battlePresence",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "active"
          },
          {
            "name": "retreating"
          },
          {
            "name": "gone"
          }
        ]
      }
    },
    {
      "name": "building",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "level",
            "type": "u8"
          },
          {
            "name": "buildingType",
            "type": {
              "defined": {
                "name": "buildingType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "buildingType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "none"
          },
          {
            "name": "planetaryCapital"
          },
          {
            "name": "shipyard"
          },
          {
            "name": "metalIndustry"
          },
          {
            "name": "crystalLabs"
          },
          {
            "name": "chemicalRefinery"
          },
          {
            "name": "fuelExtractors"
          },
          {
            "name": "tradeBeacon"
          },
          {
            "name": "astralNavyHq"
          },
          {
            "name": "infrastructure"
          }
        ]
      }
    },
    {
      "name": "fleet",
      "docs": [
        "Fleet occupying (x, y) position"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "isPresent",
            "type": "bool"
          },
          {
            "name": "squadrons",
            "type": {
              "array": [
                {
                  "option": {
                    "defined": {
                      "name": "squadron"
                    }
                  }
                },
                9
              ]
            }
          }
        ]
      }
    },
    {
      "name": "marketPool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "assets",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "morale",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "normal"
          },
          {
            "name": "broken"
          }
        ]
      }
    },
    {
      "name": "planetHolding",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lastHarvest",
            "type": "u64"
          },
          {
            "name": "buildings",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "building"
                  }
                },
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "planetInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "metal",
            "type": "u16"
          },
          {
            "name": "chemical",
            "type": "u16"
          },
          {
            "name": "crystal",
            "type": "u16"
          },
          {
            "name": "fuel",
            "type": "u16"
          },
          {
            "name": "miner",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "owner",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "player",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "settledPlanets",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "playerCache",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "resources",
            "type": {
              "defined": {
                "name": "resources"
              }
            }
          }
        ]
      }
    },
    {
      "name": "resourceAuthority",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "resources",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "igt",
            "type": "u64"
          },
          {
            "name": "metal",
            "type": "u64"
          },
          {
            "name": "crystal",
            "type": "u64"
          },
          {
            "name": "chemical",
            "type": "u64"
          },
          {
            "name": "fuel",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "shipModule",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "moduleType",
            "type": {
              "defined": {
                "name": "shipModuleType"
              }
            }
          },
          {
            "name": "level",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "shipModuleType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "none"
          },
          {
            "name": "rockets"
          },
          {
            "name": "machineGun"
          },
          {
            "name": "lasers"
          },
          {
            "name": "hardenedHull"
          },
          {
            "name": "shieldBooster"
          },
          {
            "name": "additionalArmor"
          },
          {
            "name": "haulingBay"
          },
          {
            "name": "targetingSystems"
          },
          {
            "name": "miningDrill"
          },
          {
            "name": "landingPods"
          }
        ]
      }
    },
    {
      "name": "squadron",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "template",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "shipModule"
                  }
                },
                6
              ]
            }
          },
          {
            "name": "amount",
            "type": "u16"
          },
          {
            "name": "morale",
            "type": {
              "defined": {
                "name": "morale"
              }
            }
          },
          {
            "name": "presence",
            "type": {
              "defined": {
                "name": "battlePresence"
              }
            }
          }
        ]
      }
    },
    {
      "name": "squadronBlueprint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "template",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "shipModule"
                  }
                },
                6
              ]
            }
          },
          {
            "name": "amount",
            "type": "u16"
          }
        ]
      }
    }
  ]
};
