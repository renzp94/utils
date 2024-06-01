import { expect, test } from 'bun:test'
import { uuid } from '../../src'

test('生成UUID', () => {
  expect(uuid()).toHaveLength(36)
  expect(
    /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/.test(
      uuid(),
    ),
  ).toBeTrue()
  expect(/[A-Z]/.test(uuid(true))).toBeTrue()
})
