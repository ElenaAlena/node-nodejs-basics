import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const PATH = `${__dirname}/files/fileToRead.txt`;

const read = async () => {
  const readStream = fs.createReadStream(PATH);
  readStream.pipe(process.stdout);
};
await read();
