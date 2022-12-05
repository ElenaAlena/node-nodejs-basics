import { readdir, stat } from "fs";import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = `${__dirname}/files`;

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
