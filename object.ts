
type Users = {
    name : string;
    age: number;
    address : string;
    info(): void;
};

const users:Users = {
    name : 'atik',
    age : 24,
    address : 'rajshahi',
    info(){
        console.log('function is Call ', this.address);
    }
};


users.address =  'dhaka';

console.log(users);