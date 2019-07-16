function wait_for_promise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("async done waiting.")
            res('resolved')
        }, 5000)

        console.log('promise is waiting for 5 seconds...')
    })
}

async function async_func(sec) {

    console.log('async starts waiting:')

    let waited = await wait_for_promise()
    console.log(waited)

    console.log('THE END')
}
module.exports = async_func