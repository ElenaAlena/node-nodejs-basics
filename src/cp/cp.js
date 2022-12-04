import { fork } from "child_process";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const PATH = `${__dirname}/files/script.js`;

const spawnChildProcess = async (args) => {
  const child = fork(PATH, args);
};

spawnChildProcess(["hello", "hello2"]);
