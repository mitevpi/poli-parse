// index.js

const cheerio = require("cheerio");
const axios = require("axios");

axios.get("https://www.wsj.com/").then(response => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data);
  $("script").remove();
  $("styles").remove();

  var t = $("html *")
    .contents()
    .map(function() {
      return this.type === "text" ? $(this).text() + " " : "";
    })
    .get()
    .join("");

  console.log(t);
  console.log(t);
});
