import { open, close, writeFile } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = `${__dirname}/files`;
const FILENAME = "fresh.txt";

const create = async () => {
  open(`${PATH}/${FILENAME}`, "wx", (err, fd) => {
    if (err) {
      if (err.code === "EEXIST") {
        throw new Error("FS operation failed")
      }
      throw err;
    }

    try {
      writeFile(`${PATH}/${FILENAME}`, "I am fresh and young", (err) => {
        if (err) throw err;
        console.log("File fresh was created");
      });
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
};

await create();
