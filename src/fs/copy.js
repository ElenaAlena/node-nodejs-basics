import { cp, stat } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = `${__dirname}/files`;
const NEWPATH = `${__dirname}files_copy`;

const copy = async () => {
  stat(NEWPATH, (err) => {
    if (err && err.code === "ENOENT") {
      cp(PATH, NEWPATH, { recursive: true }, (err) => {
        if (err) throw err;
        console.log("Success");
      });
    } else throw new Error("FS operation failed");
  });
};

copy();
