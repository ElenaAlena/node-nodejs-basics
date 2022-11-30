import {access, constants, unlink } from "fs";

const PATH = "src/fs/files";
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