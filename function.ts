



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

const nagateFuction:nage = (val:number)=> val * 3;


console.log(nagateFuction(100));



const nagateFuctions = (vla:number):number=>vla *3;

const ress:number = nagateFuction(15);
console.log(res);



const arr:number[] = [25,16,7,9];

const out:number[] = arr.concat([25,99]);

console.log(arr);
console.log('final out arr : ', out.sort((a:number,b:number):number=> a -b));



type Sum = <T extends number, S extends number, Y extends number>(a:T, b:S, c:Y)=> number;
// type sum = (a:number, b:number)=>number;
let sum:Sum = (a,b,c)=>{

  const sum = a + b+ c;

  return sum;
}

const sumResult = sum(5,7,5);

console.log(sumResult);








