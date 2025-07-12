
// type UserInter ={
//      // name : 'atik',
//     name : string;
//     age : number;
// } ;


// type UserInterWithRole = UserInter & { role : string};

interface UserInter {
    name : string;
    age : number;
};


interface UserWithDetails extends UserInter{
    address : string;
    info(): void; 
    role? : string;
};


const userInter: UserWithDetails = {
   
    name : 'atik',
    age : 35,
    address : 'rajshahi',
    info (){
        console.log(`info interface Extents here : name : ${this.name} and his age : ${this.age}  and address : ${this.address}`);
    }
    // role : 'admin',
}



console.log( userInter);



const nullish = null ;


const userNull = nullish ?? 'nullish';

console.log(userNull);