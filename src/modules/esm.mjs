import { sep, dirname } from "path";
import { fileURLToPath } from "url";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";

import "./files/c.js";

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

export let unknownObject;

if (random > 0.5) {
  await import("./files/a.json", {
    assert: { type: "json" },
  }).then((j_obj) => {
    unknownObject = j_obj?.default;
  });
} else {
  await import("./files/b.json", {
    assert: { type: "json" },
  }).then((j_obj) => {
    unknownObject = j_obj?.default;
  });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
