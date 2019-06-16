const PoliParse = require("../dist/index");

PoliParse.Scrape.AllText("https://www.wsj.com/").then(data => {
  let newData = PoliParse.Parse.FilterLength(data, 2);
  newData = PoliParse.Parse.FilterSubject(newData, ["Donald", "Trump"]);

  newData.map(headline => {
    PoliParse.Sentiment.Compute(headline).then(sentiment => {
      console.log(sentiment);
      console.log(sentiment);
    });
    // PoliParse.Language.ComputePOS(headline).then(pos => {
    //   console.log(pos);
    //   console.log(pos);
    // });
  });

  console.log(newData);
});

// const data = await PoliParse.Scrape.AllText("https://www.wsj.com/");
// const filtered = PoliParse.Parse.FilterSentence(data, 2);
// console.log(filtered);
// console.log(filtered);
