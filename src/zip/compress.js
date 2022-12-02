import zlib from "zlib";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const DEARCHIVE_PATH = `${__dirname}/files/fileToCompress.txt`;
const ARCHIVE_PATH = `${__dirname}/files/archive.gz`;

const compress = async () => {
  var gzip = zlib.createGzip();
  var readStream = fs.createReadStream(DEARCHIVE_PATH);
  var writeStream= fs.createWriteStream(ARCHIVE_PATH);
  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
