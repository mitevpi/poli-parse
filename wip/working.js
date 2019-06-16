const PoliParse = require("../dist/index");

// https://www.foxnews.com/
// https://www.wsj.com/
// https://www.bbc.com/news/world/us_and_canada
// https://www.npr.org/

PoliParse.Scrape.AllText("https://www.npr.org/").then(data => {
  let newData = PoliParse.Parse.FilterLength(data, 2);
  newData = PoliParse.Parse.FilterSubject(newData, ["Donald", "Trump"]);

  const results = newData.map(async headline => {
    const sentiment = await PoliParse.Sentiment.Compute(headline);
    const pos = await PoliParse.Language.ComputePOS(headline);
    return {
      headline,
      sentiment,
      pos
    };
  });
  Promise.all(results).then(completed => {
    console.log(completed);
  });
});
