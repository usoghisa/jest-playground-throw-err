import { sum, sub, samePasswordsValidator, valid_path, valid_write } from "./sum";

test("throws an error when first argument is `null`", () => {
  expect(() => samePasswordsValidator(null, "bar")).toThrow(Error);
  expect(() => samePasswordsValidator(null, "bar")).toThrow(
    new Error("no password given")
  );
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("test sub func throws err and msg for falsy ", () => {
  expect(() => sub(5, 6)).toThrow(Error);
  expect(() => sub(5, 6)).toThrow(new Error("errore"));
  expect(() => sub(5, 0)).toThrow(new Error("errore"));
  expect(() => sub(5, undefined)).toThrow(new Error("errore"));
  expect(() => sub(4, "9j")).toThrow(new Error("errore"));
  expect(() => sub("o", 7)).toThrow(new Error("errore"));
  expect(() => sub()).toThrow(new Error("errore"));
  expect(sub(5, 5)).toBe(0);
});
// https://nodejs.dev/learn/reading-files-with-nodejs
test("test file read sync async + dificult", () => {
  //console.log("fun rtn " + valid_path("./src/t3.txt"));
  expect(valid_path("./src/t3.txt")).toMatch(/err/);
  expect(valid_path("./src/t.txt")).toMatch(/ok/);
});

test("test write", () => {
  //console.log("fun valid_write rtn " + valid_write("./src/t3.txt"));
 // expect(valid_write("./src/t3.txt")).toMatch(/err write/);
 // expect(valid_write("./src/t.txt")).toMatch(/ok write/);
});

