function add(num1:number, num2:number):number{

    const res:number = num1 + num2;

    return res;
}

let a:number = 34;
let b:number = 45;

const res:number = add(a,b);

console.log(res);



const nameArrow = (a:number,b:number):number=> {
    return a + b;
} ;

console.log(nameArrow(15,20));



function printHello():void {
  console.log('Hello!');
}

printHello();


type nage = (val:number)=> number;

const nagateFuction:nage = (vla:number)=> vla * 3;


nagateFuction(100);

