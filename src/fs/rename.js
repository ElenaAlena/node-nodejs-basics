import { rename as fs_rename, access, constants } from "fs";

const PATH = "src/fs/files";
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
