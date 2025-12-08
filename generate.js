/*
*/ 


function getneratenumbers(){
    const nums = [];
    while(nums.length < 5){
        const n = Math.floor(Math.random()*10);
        nums.push(n);
    }
    return nums;
}
module.exports = (getneratenumbers)