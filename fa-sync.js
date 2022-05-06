const { readFileSync, writeFileSync } = require("fs");
const { readFile } = require("fs/promises");

console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first},${second}`,
  { flag: "a" }
);

console.log("completed this task");

console.log("next task");
