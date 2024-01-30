//5 falsy values: 0, '', undefined, null, NaN
//gives false when converted to boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean('Jonas'));//true
console.log(Boolean({}));//true

let height;
if(height){
    console.log('Height is defined');
}
else{

    console.log('Height is undefined');
}