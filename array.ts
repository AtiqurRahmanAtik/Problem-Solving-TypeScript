{
    //


const userInfo :(string | number) [] = ['atik', 'rony', 'jony',11];

console.log(userInfo);



const userInfo2 :(string | number) [] = ['atik', 11, 'rony', 22];


const userr:Array<string> = ['atik', 'rony'];



let tapule:[string , number , number , string];

tapule= ['atik', 1, 2, 'rony'];

console.log(tapule);





let obj:object[] = [];

type Obj1 ={
    name:string,
    age: number,
    address : string
}

let obj1:Obj1 = {name : 'at', age : 17, address : 'rajshahi'};

obj.push(obj1);

// console.log('object arr : ',obj)


for(let arr in obj){
    console.log(obj[arr]);
}



enum namess {
    atik = 'atik',
    
}

console.log({namess});



type RequestType = "GET" | "POST";
const resPonse:RequestType = "POST";
console.log(resPonse); 



function RequestType (requestType:RequestType){

    console.log(requestType);
}

RequestType("GET");


const info:readonly string[] = ['user','sere'];


console.log(info);



const graph:[number,number,string] = [55.2, 41.3,'ad'];

console.log(graph);



//
}