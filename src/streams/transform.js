import { Transform } from "stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(data, encoding, callback) {
      const reversedData = data.toString().replace("\n","").split("").reverse().join("")+"\n";
      this.push(reversedData);
      callback();
    },
  });
  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
