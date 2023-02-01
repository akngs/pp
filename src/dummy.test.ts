import { expect, it } from 'vitest'

import { hello } from './dummy'

it('Dummy', () => {
  expect(hello()).toEqual('Hello world!')
})
