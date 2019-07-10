# Poli Parse

[![Generic badge](https://img.shields.io/badge/Docs-Web-Green.svg)](https://mitevpi.github.io/poli-parse/) [![Generic badge](https://img.shields.io/badge/Docs-MD-Green.svg)](docs/README.md) [![Generic badge](https://img.shields.io/badge/Samples-JS-Green.svg)](samples/) ![NPM](https://img.shields.io/npm/l/poli-parse.svg)

[![npm](https://img.shields.io/npm/v/poli-parse.svg)](https://www.npmjs.com/package/poli-parse) [![npm bundle size](https://img.shields.io/bundlephobia/min/poli-parse.svg)](https://bundlephobia.com/result?/poli-parse) [![npm](https://img.shields.io/npm/dw/poli-parse.svg)](https://www.npmjs.com/package/poli-parse) [![npm2](https://img.shields.io/npm/dt/poli-parse.svg)](https://www.npmjs.com/package/poli-parse)

[![GitHub issues](https://img.shields.io/github/issues/mitevpi/poli-parse.svg)](https://github.com/mitevpi/poli-parse/issues) ![David](https://img.shields.io/david/dev/mitevpi/poli-parse.svg) [![GitHub last commit](https://img.shields.io/github/last-commit/mitevpi/poli-parse.svg)](https://github.com/mitevpi/poli-parse/commits/master)

Political news scraping & NLP parsing from web pages.

## Usage

To use this module, install from [npm](https://www.npmjs.com/package/poli-parse), install locally using the command below, or clone this repository and import the .js files directly from source.

```cmd
npm i poli-parse
```

### Imports

Imports can be done through the aggregating index.js file or via individual members.

#### Full Import

```js
const PoliParse = require('./index.js'); // from source
const PoliParse = require('poli-parse') // from npm

// es6
import * as PoliParse from "../src"; // from source
import * as PoliParse from from "poli-parse"; // from npm
```

#### Individual Import

```js
// from source
const Parse = require("./Parse");

const { Parse } = require("poli-parse");
import { Parse } from "poli-parse"; // es6
```

### Methods

The collection below is just a sample of methods and may be out of date. For the most recent examples, please see the [samples](samples/) folder in the root directory of this repository.

#### Basic

Basic scrape/parse example.

```js
const PP = require("../dist/index"); // import library

// hit the homepage of wsj.com
PP.Scrape.AllText("https://www.wsj.com/").then(data => {
  // filter out text that isn't longer than two words (likely not a sentence)
  const filtered = PP.Parse.FilterLength(data, 2);

  // split monolithic text from the html into more useful chunks
  const split = PP.Parse.SplitMonolithic(filtered);

  // find all texts which mention a specific subject
  const subject = PP.Parse.FilterSubject(split, [
    "Elizabeth",
    "Warren"
  ]);

  // see what headlines were found regarding the subject
  console.log(subject);
});
```

#### Advanced

More advanced scrape/parse example, with analysis logic added.

```js
const PP = require("../dist/index"); // import library

PP.Scrape.AllText("https://www.wsj.com/").then(data => {
  let newData = PP.Parse.FilterLength(data, 2);
  newData = PP.Parse.SplitMonolithic(newData);
  newData = PP.Parse.FilterSubject(newData, ["Donald", "Trump"]);

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
```

## Commands

The following commands are available during development.

```sh
npm test # run tests with Jest
npm run coverage # run tests with coverage and open it on browser
npm run lint # lint code
npm run docs # generate docs
npm run build # transpile code
```
