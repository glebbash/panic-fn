import { panic } from "./panic.ts";
import { expect } from "https://deno.land/x/expect@v0.2.9/mod.ts";

Deno.test("it throws error with provided message", () => {
  const message = "oops";
  const err = returnThrown(() => panic(message));
  expect(err instanceof Error).toBe(true);
  expect((err as Error).message).toBe(message);
});

Deno.test("it throws custom errors", () => {
  const error = new Error("oops");
  const err = returnThrown(() => panic(error));
  expect(err).toBe(error);
});

function returnThrown(fn: () => void): unknown {
  try {
    fn();
  } catch (error) {
    return error;
  }
}
