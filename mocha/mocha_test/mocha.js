/* mocha and chai test for promise.js */
const assert = require('assert')
const async_function = require('../async_await.js')


describe('test', async () => {

    it('should wait for 5 seconds before resolve', async () => {

        await async_function()

    })
})