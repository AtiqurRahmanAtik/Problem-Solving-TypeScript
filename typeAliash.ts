
// type UserInter ={
//      // name : 'atik',
//     name : string;
//     age : number;
// } & {role : string};

interface UserInter {
    name : string;
    age : number;
};


interface MyColor extends UserInter{
    address : string;
};

const userInter:UserInter = {
   
    name : 'atik',
    age : 35,
    // address : 'rajshahi'
    // role : 'admin',
}


console.log( userInter);