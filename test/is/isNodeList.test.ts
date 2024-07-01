import { expect, test } from 'bun:test'
import { isNodeList } from '../../src'

test('isNodeList', () => {
  expect(isNodeList([])).toBeFalse()
  expect(isNodeList(document.querySelectorAll('div'))).toBeTrue()
})
