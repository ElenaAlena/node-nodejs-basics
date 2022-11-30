const parseArgs = () => {
  const myArgs = process.argv.slice(2);
  const args = [];
  for (let i = 0; i < myArgs.length; i++) {
    if (myArgs[i].startsWith("--")) {
      args.push(`${myArgs[i]} is ${myArgs[i + 1]}`);
    }
  }
  console.log(args.join(", "));
};

parseArgs();
