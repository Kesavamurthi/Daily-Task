const fetchData = (callback) => {
    setTimeout(()=>{
        console.log('third');
        callback('hi');
    },4000);
};


setTimeout(() => {
    console.log('second  1.5 secs')
    // fetchData(text => {
    //     console.log(text);
    // });
}, 2500);

console.log('first');