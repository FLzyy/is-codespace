import isCodespace from "./index";

console.log(isCodespace());

process.env.CODESPACES = "true";

console.log(isCodespace());
