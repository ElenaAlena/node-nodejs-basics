import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
import os from "os";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const PATH = `${__dirname}/worker.js`;

const systemCpuCores = os.cpus().length;

const performCalculations = async () => {
  const promises = [];
  for (let i = 0; i < systemCpuCores; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(PATH, {
          workerData: 10 + i,
        });
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", (code) => {
          code !== 0 ? reject : resolve;
        });
      })
    );
  }
  Promise.allSettled(promises).then((results) =>
    results.forEach((result) =>
      result?.status === "fulfilled"
        ? console.log(`status - 'resolved'\ndata - ${result.value}`)
        : console.log(`status - 'error'\ndata - null`)
    )
  );
};

await performCalculations();
