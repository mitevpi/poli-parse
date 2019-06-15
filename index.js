// index.js

const cheerio = require("cheerio");
const axios = require("axios");

axios.get("https://www.wsj.com/").then(response => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data);
  $("script").remove();
  $("styles").remove();

  const texts = [];
  var t = $("html *")
    .contents()
    .map(function() {
      if (this.type === "text") {
        texts.push($(this).text());
      }
    });

  console.log(texts);
  console.log(texts);
});
