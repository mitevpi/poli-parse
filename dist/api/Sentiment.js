"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sentiment = void 0;

var _sentiment = _interopRequireDefault(require("sentiment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const sentiment = new _sentiment.default();

class Sentiment {
  /**
   * Compute sentiment score from a sentence.
   * @param {String} text The sentence to analyze for sentiment.
   * @returns {Promise<Object>} Sentiment data.
   */
  static Compute(text) {
    function Round(x) {
      return +Number.parseFloat(x).toPrecision(4);
    }

    return new Promise((resolve, reject) => {
      const result = sentiment.analyze(text);
      result.scoreRelative = Round(result.score / 5);
      result.parsed = Round(result.words.length / result.tokens.length);
      result.negativeOfParsed = Round(result.negative.length / result.words.length || 0);
      result.positiveOfParsed = Round(result.positive.length / result.words.length || 0);
      result.negativeOfTotal = Round(result.negative.length / result.tokens.length);
      result.positiveOfTotal = Round(result.positive.length / result.tokens.length);
      result.negativeCount = result.negative.length;
      result.positiveCount = result.positive.length;
      delete result.tokens;
      resolve(result);

      if (result === null) {
        reject(result);
      }
    });
  }

}

exports.Sentiment = Sentiment;