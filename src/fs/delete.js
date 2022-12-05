import {access, constants, unlink } from "fs";import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = `${__dirname}/files`;
const FILENAME = "fileToRemove.txt";

const remove = async () => {
    access(`${PATH}/${FILENAME}`, constants.F_OK, (err) => {
        if (err) throw new Error("FS operation failed");
        unlink(`${PATH}/${FILENAME}`, (err) => {
            if (err) throw new Error("FS operation failed");
            console.log(`${PATH}/${FILENAME} was deleted`);
          });
      });
};

await remove();