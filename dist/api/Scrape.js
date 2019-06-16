"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrape = void 0;

/*
MIT License

Copyright (c) 2019 Petar Mitev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const cheerio = require("cheerio");

const axios = require("axios");

class Scrape {
  /**
   * Get all text from a URL's primary render HTML.
   * @param {String} url Web url to scrape for text.
   * @returns {Promise<Array>} Promise of an array containing the text of sentences scraped.
   */
  static AllText(url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then(response => {
        // Load the web page source code into a cheerio instance
        const $ = cheerio.load(response.data);
        $("script").remove();
        $("styles").remove();
        const texts = [];
        $("html *").contents().map(function GetText() {
          if (this.type === "text") {
            texts.push($(this).text());
          }
        }).last(resolve(texts));
      }).catch(err => {
        console.error(err);
        reject(err);
      });
    });
  }

}

exports.Scrape = Scrape;