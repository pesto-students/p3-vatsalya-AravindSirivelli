
var mypromise = {
    state: "PENDING",
    getNumber: function () {
        return Math.ceil(Math.random() * 1024);
    },
    resolve: function (time) {
        if (mypromise.state != "PENDING") return
        mypromise.state = "RESOLVED";
        mypromise.result(time);
    },
    reject: function (time) {
        if (mypromise.state != "PENDING") return
        mypromise.state = "REJECTED";
        mypromise.result(time);
    },
    fullfilled: function () {
        console.log("PROMISE FULLFILLED");
        mypromise.state = "PENDING";
    },
    result: function (time) {
        debugger;
        console.time();
        setTimeout(() => {
            console.log("PROMISE " + mypromise.state);
            console.timeEnd();
            mypromise.fullfilled();
        }, time);
    }
}
function test(time) {
    const value = mypromise.getNumber();
    if (value % 5 === 0) {
        console.log(value);
        mypromise.reject(time);
    }
    else {
        console.log(value);
        mypromise.resolve(time);
    }
}

//try closures way of implementation
//classes 








test(1000)














// JS Promise implementation
const getNumber = () => {
    return Math.ceil(Math.random() * 1024);
}
const publishState = (state, time) => {
    console.time();
    setTimeout(() => {
        console.log("promise " + state);
        console.timeEnd();
    }, time)
}

var p = (time) => new Promise((resolve, reject) => {
    const value = getNumber();
    if (value % 5 === 0) {
        console.log(value);
        reject(time);
    }
    else {
        console.log(value);
        resolve(time);
    }
});

p(5000)
    .then((time) => {
        publishState("resolved", time);
    })
    .catch((x) => {
        publishState("rejected", time);
    }).finally(() => {
        console.log("promise fullfilled");
    })


