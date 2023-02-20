import { equal } from "node:assert/strict";
import { describe, it } from "node:test";
import isCodespace from "../src/index";

describe("not replit", () => {
  it("should return false", () => {
    equal(isCodespace(), false);
  });
});

describe("in replit", () => {
  process.env.CODESPACES = "true";

  it("should return true", () => {
    equal(isCodespace(), true);
  });

  delete process.env.CODESPACES;
});
