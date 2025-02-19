// Create sleep function which can stop for loop for given amount of time
// function sleep(time){
    return new Promise(resolve => setTimeout(resolve, time));
}
async function delay() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
        await sleep(4000); 
    }
}
delay();