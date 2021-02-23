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
