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

export class Parse {
  /**
   * Filter out text from a URL's primary render HTML that isn't longer than X words (sentence).
   * @param {Array} texts Array containing the text of sentences scraped.
   * @param {Number} length The minimum word count to filter sentences against.
   * @returns {Array} The filtered array of texts, containing only sentences longer
   * than X words.
   */
  static FilterLength(texts, length) {
    return texts.filter((sentence) => sentence.split(" ").length > length);
  }

  /**
   * Split up monolithic text from a URL by instances of two capitalized words merged
   * into one. eg. "MarketWatch"
   * @param {Array} texts Array containing the text of sentences scraped.
   // * @param {Number} length The maximum length to consider a text monolithic.
   * @returns {Array} The new array of texts, containing the split up texts.
   */
  static SplitMonolithic(texts) {
    const regex = /[A-Z][a-zA-Z]\w+(?=[A-Z])/g;

    texts
      .filter((sentence) => sentence.split(" ").length > 100)
      .map((text) => {
        text.split(regex).map((splitSentence) => {
          if (splitSentence.split(" ").length > 2) {
            texts.push(splitSentence);
          }
        });
      });
    return texts.filter((sentence) => sentence.split(" ").length < 100);
  }

  /**
   * Filter text from a URL's primary render HTML that mentions any of the subject keywords.
   * @param {Array} texts Array containing the text of sentences scraped.
   * @param {Array<String>} keywords Array of strings to search for in the texts.
   * @returns {Array} The filtered array of texts, containing only sentences mentioning
   * the keywords input by the user.
   */
  static FilterSubject(texts, keywords) {
    const checker = (value) =>
      keywords.some((element) =>
        value.toLowerCase().includes(element.toLowerCase())
      );
    return texts.filter(checker);
  }
}
