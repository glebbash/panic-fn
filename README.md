# panic-fn

[![Source](https://img.shields.io/badge/source-github-informational)](https://github.com/glebbash/panic-fn)
[![Deploy](https://github.com/glebbash/panic-fn/actions/workflows/release.yml/badge.svg)](https://github.com/glebbash/panic-fn/actions)
[![Coverage Status](https://coveralls.io/repos/github/glebbash/panic-fn/badge.svg?branch=main)](https://coveralls.io/github/glebbash/panic-fn?branch=main)

Functional way of throwing errors in JS/TS

## Why?

Have you ever tried to do this?

```ts
callback(() => throw new Error("Not implemented"));
// or this
doStuff(value ?? throw new Error("No value provided"));
```

But got `Uncaught SyntaxError: Unexpected token 'throw'`.

With `panic-fn` it works as expected.

```ts
callback(() => panic("Not implemented"));
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
import { panic } from "panic-fn";
```

### Deno

```ts
import { panic } from "https://deno.land/x/panic_fn/mod.ts";
```

## Module info

This module was created using [denoland/dnt](https://github.com/denoland/dnt).

Source is written in Deno and compiles to both Node.js CJS and ESM.
