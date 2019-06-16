const PoliParse = require("../dist/index");

PoliParse.Scrape.AllText("https://www.wsj.com/").then(data => {
  const filtered = PoliParse.Parse.FilterLength(data, 2);
  const subject = PoliParse.Parse.FilterSubject(filtered, [
    "Martin",
    "Feldstein"
  ]);
  console.log(subject);
  console.log(subject);
});

// const data = await PoliParse.Scrape.AllText("https://www.wsj.com/");
// const filtered = PoliParse.Parse.FilterSentence(data, 2);
// console.log(filtered);
// console.log(filtered);