"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = void 0;

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
class Tag {
  static CountWords(str) {
    const wordCounts = {};
    const words = str.toLowerCase().split(/\b/);
    words.map(word => {
      if (word in wordCounts) {
        wordCounts[word].count++;
      } else {
        wordCounts[word] = {
          count: 1,
          word
        };
      }
    }); // TODO: FIX garbage code

    const objArray = [];
    Object.keys(wordCounts).forEach(key => objArray.push({
      word: key,
      count: wordCounts[key].count
    }));
    objArray.sort((a, b) => {
      return b.count - a.count;
    });
    return objArray;
  }

}

exports.Tag = Tag;