import { Relayer } from "@openzeppelin/defender-relay-client";
import {
  RelayerModel,
  RelayerParams,
} from "@openzeppelin/defender-relay-client";

// Entrypoint for the Autotask
export async function handler(credentials: RelayerParams) {
  const relayer = new Relayer(credentials);
  const info: RelayerModel = await relayer.getRelayer();
  console.log(`Relayer address is ${info.address}`);
}

// Sample typescript type definitions
// type EnvInfo = {
//   API_KEY: "DKQww4Uj6jaw2wTR77h33KkBWEutKpnH";
//   API_SECRET: "53fP8EzQpxjwJNA9ZGMGaSKaH2DnVicj9CCx9FbZVTZRi2cXmpG3LCG7psyC95Lr";
// };

// // To run locally (this code will not be executed in Autotasks)
// if (require.main === module) {
//   require("dotenv").config();
//   const { API_KEY: apiKey, API_SECRET: apiSecret } = process.env as EnvInfo;
//   handler({ apiKey, apiSecret })
//     .then(() => process.exit(0))
//     .catch((error: Error) => {
//       console.error(error);
//       process.exit(1);
//     });
// }
