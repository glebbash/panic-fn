# panic-fn
Functional way of throwing errors in JS/TS

## Usage:

```js
import { panic } from 'panic-fn';

panic('Oops');
// or
panic(new Error('Custom error'));
```