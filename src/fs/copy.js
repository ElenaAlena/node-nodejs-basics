import { cp, stat } from "fs";

const PATH = "src/fs/files";
const NEWPATH = "src/fs/files_copy";

const copy = async () => {
  stat(NEWPATH, (err) => {
    if (err && err.code === 'ENOENT') {
      cp(PATH, NEWPATH, { recursive: true }, (err) => {
        if (err) throw err;
        console.log("Success");
      });
    } else console.error("FS operation failed");
  });
};

copy();
