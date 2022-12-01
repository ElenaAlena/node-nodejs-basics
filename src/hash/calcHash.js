import { open, close, readFile } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const PATH = `${__dirname}/files`;
const FILENAME = "fileToCalculateHashFor.txt";

const calculateHash = async () => {
  const hash = createHash("sha256");

  hash.on("readable", () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString("hex"));
    }
  });
  open(`${PATH}/${FILENAME}`, "r", (err, fd) => {
    if (err && err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }

    try {
      readFile(`${PATH}/${FILENAME}`, "utf8", (err, data) => {
        if (err) throw err;
        hash.write(data);
        hash.end();
      });
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
};

await calculateHash();
