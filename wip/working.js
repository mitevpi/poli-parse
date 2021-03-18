const PP = require("../dist/index");

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

PP.Scrape.AllText("https://www.wsj.com/").then(data => {
  let newData = PP.Parse.FilterLength(data, 2);
  newData = PP.Parse.SplitMonolithic(newData);
  newData = PP.Parse.FilterSubject(newData, ["Donald", "Trump"]);

  console.log(newData);

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

// async function TestMe(){
//   const data = await PP.Scrape.AllText("https://www.wsj.com/");
//   console.log(data);
// }
// TestMe();
