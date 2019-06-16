import { Scrape, Parse, Sentiment } from "../src";

test("import Parse", () => {
  expect.anything(Parse);
});

test("import Scrape", () => {
  expect.anything(Scrape);
});

test("import Sentiment", () => {
  expect.anything(Sentiment);
});
