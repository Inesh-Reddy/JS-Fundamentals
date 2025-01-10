import fs from "fs/promises";
import fetch from "node-fetch";
import questionFomrat from "./Dto.js";
let fileData;

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const writeToFile = async (data) => {
  await fs.writeFile(
    "fetchedquiz.json",
    Buffer.from(JSON.stringify(data, null, 2))
  );
};

export default async function examStart(url) {
  const data = await getData(url);
  await writeToFile(data);
  fileData = JSON.parse(await fs.readFile("fetchedquiz.json", "utf-8"));
  return questionFomrat(fileData);
}
