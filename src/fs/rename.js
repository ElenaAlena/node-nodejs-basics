import { rename as fs_rename, access, constants } from "fs";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = `${__dirname}/files`;
const FILENAME = "wrongFilename.txt";
const NEW_FILENAME = "properFilename.md";

const rename = async () => {
  access(`${PATH}/${FILENAME}`, constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");
    access(`${PATH}/${NEW_FILENAME}`, constants.F_OK, (err) => {
      if (!err) throw new Error("FS operation failed");
      fs_rename(`${PATH}/${FILENAME}`, `${PATH}/${NEW_FILENAME}`, (err) => {
        if (err) throw err;
        console.log("Rename complete!");
      });
    });
  });
};

await rename();
