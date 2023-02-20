import { equal } from "node:assert/strict";
import { describe, it } from "node:test";
import isCodespace from "../src/index";

describe("not replit", () => {
  it("should return false", () => {
    equal(isCodespace(), false);
  });
});

describe("in replit", () => {
  it("should return true", () => {
    process.env.CODESPACES = "true";
    equal(isCodespace(), true);
    delete process.env.CODESPACES;
  });
});
