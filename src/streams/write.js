import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const PATH = `${__dirname}/files/fileToWrite.txt`;

const write = async () => {

    const writeStream = fs.createWriteStream(PATH);    
    process.stdin.pipe(writeStream);
    process.stdin.resume();
};

await write();