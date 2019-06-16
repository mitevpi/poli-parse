const PoliParse = require("../dist/index");

// https://www.foxnews.com/
// https://www.wsj.com/
// https://www.bbc.com/news/world/us_and_canada
// https://www.npr.org/
// https://abcnews.go.com/
// https://www.nbcnews.com/
// https://www.nytimes.com/ (TODO: CHECK FOR OVER 5 SENTENCES)
// https://www.washingtonpost.com/
// https://www.usatoday.com/

// not working
// https://www.bloomberg.com/
// https://www.cnn.com/

PoliParse.Scrape.AllText("https://www.usatoday.com/").then(data => {
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
