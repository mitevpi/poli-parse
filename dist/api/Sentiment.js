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
   * @returns {Object} Sentiment data.
   */
  static Compute(text) {
    const result = sentiment.analyze(text);
    result.scoreRelative = result.score / 5;
    result.parsed = result.words.length / result.tokens.length;
    result.negativeParsed = result.negative.length / result.words.length || 0;
    result.positiveParsed = result.positive.length / result.words.length || 0;
    result.negativeTotal = result.negative.length / result.tokens.length;
    result.positiveTotal = result.positive.length / result.tokens.length;
    return result;
  }

}

exports.Sentiment = Sentiment;