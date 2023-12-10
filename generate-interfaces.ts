import { generateInterfaces } from '@appstack-io/proto';
import { exec } from 'child_process';

exec(
  `protoc --plugin=$(pwd)/node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=snakeToCamel=true,outputClientImpl=false -I=./src --ts_proto_out=./src permission.proto`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    generateInterfaces(
      `${__dirname}/src/permission.ts`,
      `${__dirname}/src/permission.interfaces.ts`,
    );
  },
);
