import { Scrape } from "../../src";

test("import Scrape", () => {
  expect.anything(Scrape);
});

test("Scrape AllText", async () => {
  const data = await Scrape.AllText("https://www.wsj.com/");
  expect(data.length).toBeGreaterThan(1);
});
