{
    // 

    let arr:{
        name:string,
        age: number,
        address : string,
        height : number
    }[] = [];


    interface User{
        name: string;
        address : string;
        age : number;
        height: number;

    }


    const user:User = {
        name : 'atik',
        address : 'rajshahi',
        age : 35,
        height : 5.8
    }


    console.log(user);


   

    arr.push(user)
    console.log( arr);


    

    // 
}