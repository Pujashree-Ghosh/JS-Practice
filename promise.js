
var promise = new Promise(function (resolve, reject) {
    const x = 5;
    const y = 5;
    if (x === y) {
        resolve("x is equal to y");
    } else {
        reject("x isnt equal to y");
    }
});
promise.then(function () {
    console.log('Promise Resolved ');
}).catch(function () {
    console.log('Promise Rejected');
});





function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (error) {
                console.log('Your promise has been resolved')
                resolve("-Promizse Fulfilled");
            }
            else {
                console.log(' Your promise has not been resolved')
                reject('-Promise Rejected');
            }
        }, 0000);
    })
}

func1().then(function (resolvedmsg) {
    console.log("Promise Resolved" + resolvedmsg)
}).catch(function (rejectmsg) {
    console.log("Promise Rejected " + rejectmsg)
})
