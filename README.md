# panic-fn

[![Deploy](https://github.com/glebbash/panic-fn/workflows/build/badge.svg)](https://github.com/glebbash/panic-fn/actions)
[![Coverage Status](https://coveralls.io/repos/github/glebbash/panic-fn/badge.svg?branch=master)](https://coveralls.io/github/glebbash/panic-fn?branch=master)

Functional way of throwing errors in JS/TS

## Why?

Have you ever tried to do this?

```ts
() => throw new Error("Not implemented");
// or this
doStuff(value ?? throw new Error("No value provided"));
```

But got `Uncaught SyntaxError: Unexpected token 'throw'`. 

With `panic-fn` it works as expected.

```ts
() => panic("Not implemented");
// or this
doStuff(value ?? panic("No value provided"));
```

You can also throw custom errors:

```ts
panic(new SyntaxError(`Unexpected token 'throw'`));
```


## Installation

### Node

```bash
npm i panic-fn
```

```ts
import { panic } from 'panic-fn';
```

### Deno
```ts
import { panic } from 'https://deno.land/x/panic_fn/mod.ts';
```
