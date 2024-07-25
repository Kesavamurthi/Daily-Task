const myArray = ['hello','the','kiki'];
const nimi = myArray.map(myfunc);
const mini = myArray.filter(myfunctwo);
console.log(myArray);
console.log(nimi);
console.log(mini);

function myfunc(value,index,arr){
    return value+1;
};

function myfunctwo (value){
    return value.length>2;
}