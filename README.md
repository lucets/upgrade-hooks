# Luce

Upgrade hooks for [@lucets/luce](https://github.com/lucets/luce).

Can be used stand-alone as well. Zero dependencies!

## Install

Install through npm:

```
npm i @lucets/upgrade-hooks
```

## Example

```ts
'use strict'

import UpgradeHooks from './index'

export interface Context {
  [key: string]: any
}

const hooks = new UpgradeHooks<Context>()

// Add a hook
hooks.add(async (ctx, next) => {
  console.log('[upgrade]: incoming request')
})

// Run hooks
const ctx = {}
hooks.run(ctx).then(() => {
  console.log('hooks successfully run')
}).catch((err: Error) => {
  console.error(err)
})
```

## License

Copyright 2021 [Michiel van der Velde](https://michielvdvelde.nl).

This software is licensed under [the MIT License](LICENSE).
