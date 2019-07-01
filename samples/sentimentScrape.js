const PP = require("../dist/index");

// Promise
PP.Scrape.AllText("https://www.wsj.com/").then(data => {
  let newData = PP.Parse.FilterLength(data, 2);
  newData = PP.Parse.SplitMonolithic(newData);
  newData = PP.Parse.FilterSubject(newData, ["Donald", "Trump"]);

  newData.map(headline => {
    PP.Sentiment.Compute(headline).then(sentiment => {
      console.log(sentiment);
    });
    PP.Language.ComputePOS(headline).then(pos => {
      console.log(pos);
    });
  });

  console.log(newData);
});

// ES6 async/await
PP.Scrape.AllText("https://www.wsj.com/").then(data => {
  let newData = PP.Parse.FilterLength(data, 2);
  newData = PP.Parse.SplitMonolithic(newData);
  newData = PP.Parse.FilterSubject(newData, ["Donald", "Trump"]);

  // const results = [];
  const results = newData.map(async headline => {
    const sentiment = await PP.Sentiment.Compute(headline);
    const pos = await PP.Language.ComputePOS(headline);
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
