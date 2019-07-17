/* mocha and chai test for promise.js */
const assert = require('assert')
const async_function = require('../async_await.js')


describe('test', () => {

    it('should wait for 5 seconds before resolve using done function', (done) => {

        async_function().then(() => done())
    })

    it('should wait for 5 seconds before resolve using await function', async() => {
        await async_function()
    })
})