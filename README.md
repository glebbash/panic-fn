# panic-fn
Functional way of throwing errors in JS/TS

## Installation

### Node
```js
// npm i panic-fn

import { panic } from 'panic-fn';
```

### Deno
```js
import { panic } from 'deno.land/x/panic_fn@v1.0.3/mod.ts';
```


## Usage
```js
// throw new Error() with message
panic('Oops...');

// throw custom error
panic(new SyntaxError('Oops...'));
```
