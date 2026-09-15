// function fun1(){
//     console.log("fun1")
// }

// function fun2(){
//     console.log("fun2")
// }

// function fun3(){
//     console.log("fun3")
// }
function fun1(){
    console.log("fun1 start")
    fun2();
    console.log("fun1 running")
    console.log("fun1 end")
}

function fun2(){
    console.log("fun2 start")
    fun3();
    console.log("fun2 running")
    console.log("fun2 end")
}

function fun3(){
    console.log("fun3 start")
    console.log("fun3 running")
    console.log("fun3 end")
}

function main(){
    console.log("main start");

    fun1()
    console.log("main running");
    console.log("main end");

}

main()



// in asynchronous we use event loop to manage the call stack


// asynchronous call using timers
// 1. setTimeout()
// 2. setInterval()
// 3. process.nextTick()
// 4. setImmediate()