

// Objects and Methods style trials
var mypromise = {
    resolve: function () {
        mypromise.result("resolved");
    },
    reject: function () {
        mypromise.failure("rejected");
    },
    fullfilled: function () {
        console.log("promise fullfilled");
    },
    result: function (state, time) {
        console.time();
        setTimeout(() => {
            console.log("promise " + state);
            console.timeEnd();
        }, time);
        mypromise.fullfilled();
    }
}
/////







// const test = mypromise(() => {
//     console.log("resolved");
// }, () => {
//     console.log("rejected");
// },time)
const getNumberV1 = () => {
    return Math.ceil(Math.random() * 1024);
}
const publishStateV1 = (state, time) => {
    console.time();
    setTimeout(() => {
        console.log("promise " + state);
        console.timeEnd();
    }, time)
}
function mypromise(resolve, reject, time) {
    const value = getNumberV1();
    if (value % 5 === 0) {
        console.log(value);
        reject(time);
    }
    else {
        console.log(value);
        resolve(time);
    }
}
