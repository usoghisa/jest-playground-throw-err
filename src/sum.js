import path from "path";

const fs = require("fs");

export function valid_path(path) {
  try {
    const data = fs.readFileSync(path, "utf8");
    //console.log('data is '+data)
    return "ok";
  } catch (err) {
    //console.error(err)
    return "err";
  }
}

const content = "Some content!";

fs.writeFile(path, content, { flag: "a+" }, (err) => {});

export function valid_write(path) {
  try {
    fs.writeFileSync(path, content);
    //file written successfully
    return "ok write";
  } catch (err) {
    //console.error('kkkkkkk'+ err)
    return "err write";
  }
}

export function sum(a, b) {
  return a + b;
}
/**
 */

export function sub(a, b) {
  if (a < b || !b || typeof a === "string" || typeof b === "string") {
    throw new Error("errore");
  }
  return a - b;
}

export function samePasswordsValidator(password, otherPassword) {
  if (!password) {
    throw new Error("no password given");
  }
  return password === otherPassword;
}
