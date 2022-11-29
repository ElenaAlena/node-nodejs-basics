import { open, close, writeFile } from "fs";

const PATH = "src/fs/files";
const FILENAME = "fresh.txt";

const create = async () => {
  open(`${PATH}/${FILENAME}`, "wx", (err, fd) => {
    if (err) {
      if (err.code === "EEXIST") {
        console.error("FS operation failed");
        return;
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
