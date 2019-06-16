const PoliParse = require("../dist/index");

// Promise
PoliParse.Scrape.AllText("https://www.wsj.com/").then(data => {
  let newData = PoliParse.Parse.FilterLength(data, 2);
  newData = PoliParse.Parse.FilterSubject(newData, ["Donald", "Trump"]);

  newData.map(headline => {
    PoliParse.Sentiment.Compute(headline).then(sentiment => {
      console.log(sentiment);
    });
    PoliParse.Language.ComputePOS(headline).then(pos => {
      console.log(pos);
    });
  });

  console.log(newData);
});

// ES6 async/await
PoliParse.Scrape.AllText("https://www.wsj.com/").then(data => {
  let newData = PoliParse.Parse.FilterLength(data, 2);
  newData = PoliParse.Parse.FilterSubject(newData, ["Donald", "Trump"]);

  // const results = [];
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
