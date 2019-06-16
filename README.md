# Poli-Parse

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

