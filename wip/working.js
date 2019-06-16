const PoliParse = require("../dist/index");

PoliParse.Scrape.AllText("https://www.wsj.com/").then(data => {
  const filtered = PoliParse.Parse.FilterSentence(data, 2);
  console.log(filtered);
  console.log(filtered);
});
