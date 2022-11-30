import { readdir, stat } from "fs";

const PATH = "src/fs/files";

const list = async () => {
  stat(PATH, (err) => {
    if (err && err.code === "ENOENT") throw new Error("FS operation failed");
    readdir(PATH, (err, files) => {
      if (err) throw err;
      for (const file of files) console.log(file);
    });
  });
};

await list();
