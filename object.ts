
type Users = {
    name : string;
    age: number;
    address : string;
    info(): void;
};


type Users2={
    address:()=> void;
    nam ?: string,
}


type Users3 = Users | Users2;

const users: Users3 = {
    name : 'atik',
    age : 24,
    nam: 'rony',
   
    address : ()=>{
        console.log('rony user');
    },
    info(){
        console.log('function is Call ', this.address);
    }
};


users.address =  'dhaka';

console.log(users);

