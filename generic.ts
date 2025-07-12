{
    //

    const arr = [3,34,55,6];


    // interface User{
    //     [index : string] : string
    // }

    // type User = string[];

    type User = Array <string>

    const users:User = [ 'a', 'b', 'c', 'e'];

    console.log(users);





    type GenericType<t> = Array<t>;

   

    const arrNum:GenericType<number>= [2,4,5,6,7];

    console.log(arrNum);


  

    const boolenn:GenericType<boolean> = [true,false,true];

    console.log(boolenn);

    

    
    type Add = (a:number, b:number)=>number;

    const add:Add = (a,b) => a + b;

    console.log(add(3,5));




    const prodoucts:GenericType<{name:string, age:number}> = [
        {
            name : 'atik',
            age : 34
        },
        {
            name : 'rony',
            age : 24
        },
        {
            name : 'sony',
            age : 54
        },
    ];


    console.log(prodoucts);




    type GenericTuple<x,y> = [x,y];

 const manus :GenericTuple<string,string> = ['atik', 'x- man'];

console.log(manus);


    //
}