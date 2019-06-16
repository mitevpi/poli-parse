const PoliParse = require("../dist/index");

PoliParse.Scrape.AllText("https://www.wsj.com/").then(data => {
  let newData = PoliParse.Parse.FilterLength(data, 2);
  newData = PoliParse.Parse.FilterSubject(newData, ["Martin", "Feldstein"]);
  console.log(newData);
  console.log(newData);
});

// const data = await PoliParse.Scrape.AllText("https://www.wsj.com/");
// const filtered = PoliParse.Parse.FilterSentence(data, 2);
// console.log(filtered);
// console.log(filtered);
