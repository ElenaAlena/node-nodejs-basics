import { open, close, readFile } from "fs";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = `${__dirname}/files`;
const FILENAME = "fileToRead.txt";

const read = async () => {
  open(`${PATH}/${FILENAME}`, "r", (err, fd) => {
    if (err && err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }

    try {
      readFile(`${PATH}/${FILENAME}`, "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
};

await read();
