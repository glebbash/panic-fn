# panic-js
Functional way of throwing errors in JS/TS

## Usage:

```js
import { panic } from 'panic';

panic('Oops');
// or
panic(new Error('Custom error'));
```