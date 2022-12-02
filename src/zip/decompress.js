import zlib from "zlib";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const DEARCHIVE_PATH = `${__dirname}/files/fileToCompress.txt`;
const ARCHIVE_PATH = `${__dirname}/files/archive.gz`;

const decompress = async () => {
  const inputFile = fs.createReadStream(ARCHIVE_PATH);
  const outputFile = fs.createWriteStream(DEARCHIVE_PATH);

  inputFile.pipe(zlib.createUnzip()).pipe(outputFile);
};

await decompress();
