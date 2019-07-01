const PP = require("../dist/index");

PP.Scrape.AllText("https://www.wsj.com/").then(data => {
  data = PP.Parse.FilterLength(data, 3);
  data = PP.Parse.SplitMonolithic(data);
  data = PP.Parse.FilterSubject(data, [
    "Donald",
    "Trump"
  ]);
  console.log(data);
  console.log(data);
});
