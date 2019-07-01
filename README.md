# Poli Parse

Political news scrape/parser library.

## Usage

To use this module, install locally using the command below, or clone this repository and import the .js files directly from source.

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
import { Parse } from "@nbbj/poli-parse"; // es6
```

### Methods

The collection below is just a sample of methods and may be out of date. For the most recent examples, please see the [samples](samples/) folder in the root directory of this repository.

#### Basic

Basic scrape/parse example.

```js
const PoliParse = require("../dist/index"); // import library

// hit the homepage of wsj.com
PoliParse.Scrape.AllText("https://www.wsj.com/").then(data => {
  // filter out text that isn't longer than two words (likely not a sentence)
  const filtered = PoliParse.Parse.FilterLength(data, 2);

  // split monolithic text from the html into more useful chunks
  const split = PP.Parse.SplitMonolithic(filtered);

  // find all texts which mention a specific subject
  const subject = PoliParse.Parse.FilterSubject(split, [
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
const PoliParse = require("../dist/index"); // import library

PoliParse.Scrape.AllText("https://www.wsj.com/").then(data => {
  let newData = PoliParse.Parse.FilterLength(data, 2);
  newData = PP.Parse.SplitMonolithic(newData);
  newData = PoliParse.Parse.FilterSubject(newData, ["Donald", "Trump"]);

  const results = newData.map(async headline => {
    const sentiment = await PoliParse.Sentiment.Compute(headline);
    const pos = await PoliParse.Language.ComputePOS(headline);
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
