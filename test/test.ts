import throwEnv from '../src'

describe('Get the value of an environment variable', () => {
  test('I was able to get the value', () => {
    expect(throwEnv('test')).toBe('test')
  })
  test('Could not get value', () => {
    const key = 'value'
    const err = new Error(`${key} is not in environment variable.`)
    function env() {
      throwEnv(key)
    }
    expect(env).toThrowError(err)
  })
})
