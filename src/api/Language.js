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

const WordPOS = require("wordpos");

const wordpos = new WordPOS();

export class Language {
  /**
   * Get part of speech tags for the input sentence.
   * @param {String} text The sentence to tag part of speech elements in.
   * @returns {Promize<Object>} Part of speech data.
   */
  static ComputePOS(text) {
    function Round(x) {
      return +Number.parseFloat(x).toPrecision(4);
    }
    return new Promise((resolve, reject) => {
      wordpos
        .getPOS(text, (result) => {
          const length = +text.split(" ").length;
          result.adjectivesOfTotal = Round(result.adjectives.length / length);
          result.adverbsOfTotal = Round(result.adverbs.length / length);
          result.nounsOfTotal = Round(result.nouns.length / length);
          result.verbsofTotal = Round(result.verbs.length / length);

          result.adjectivesCount = +result.adjectives.length;
          result.adverbsCount = +result.adverbs.length;
          result.nounsCount = +result.nouns.length;
          result.verbsCount = +result.verbs.length;

          resolve(result);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  }
}
