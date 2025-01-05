let globalCounter = 0;

console.log(`Welcome to Async Counter App`);

const incrementCounterWithDelay = (time, countval)=>{
    console.log(`I am in ASYNC state. Increment happens after ${time} milliseconds `)
    window.alert(`I am in ASYNC state. Increment happens after ${time} milliseconds `)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            globalCounter = globalCounter + parseInt(countval);
            console.log(`After Increment: ${globalCounter}`);
            document.getElementById("value").innerText = `Current Value : ${displayCurrentCounter()}`;
        }, time)
    })
}

const decrementCounterWithDelay = (dectime, deccountval)=>{
    console.log(`I am in ASYNC state. Decrement happens after ${dectime} milliseconds `)
    window.alert(`I am in ASYNC state. Decrement happens after ${dectime} milliseconds `)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            globalCounter = globalCounter - parseInt(deccountval);
            console.log(`After Decrement: ${globalCounter}`);
            document.getElementById("value").innerText = `Current Value : ${displayCurrentCounter()}`;
        }, dectime)
    })
}

const displayCurrentCounter = () => {

    console.log(`Current State: ${globalCounter}`);
    return globalCounter;
}

document.getElementById("value").innerText = `Current Value : ${displayCurrentCounter()}`;

