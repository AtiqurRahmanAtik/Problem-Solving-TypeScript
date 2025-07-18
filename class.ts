{
    // 
    interface IUser{
        userInfo : ()=> string;
    }

    class User implements IUser{
        name : string;
        age : number;
        address : string;

        constructor (name: string, age:number, address:string){
            this.name = name;
            this.address = address;
            this.age = age;
        }


        disPlay(){
            console.log(`this is ${this.name} and address is ${this.address}`);
        }


        userInfo= ():string =>{
            return `this is ${this.address}`;
        };


    };



    const user1 = new User('atik',34,'rajshahi');

    const user2 = new User('rony',24,'Dhaka');

    console.log(user1.disPlay(), user2.userInfo());
    console.log(user1, user2.userInfo());






    // 
}