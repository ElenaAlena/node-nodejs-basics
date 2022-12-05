import { cp, stat } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = `${__dirname}/files`;
const NEWPATH = `${__dirname}/files_copy`;

const copy = async () => {
  try {
    await stat(NEWPATH);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      cp(PATH, NEWPATH, { recursive: true })
        .then(() => {
          console.log("Success");
        })
        .catch((err) => {
          throw err;
        });
    } else throw new Error("FS operation failed");
  }
};

copy();
