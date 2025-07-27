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




    class Person{
        name: string;
        age : number;
        address: string;

        constructor (name:string, age:number, address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        }


        showData():void{
            console.log(`this ${this.address} and age is : ${this.age}`);
        }

    };


    
    class man extends Person{
        info:string;

        constructor (name:string, age:number, address:string,info:string){
            
            super(name, age, address);
            
            this.info = info;
            
        }

          showData():void{
            console.log(`this ${this.address} and age is : ${this.age} and also ${this.info}`);
        }
        
    };


    const  atik = new man('atik', 37, 'rajshahi', 'info');
    
    atik.info;





    class animal{
        name : string;
        age: number;

        constructor(name:string,age:number){
            this.name = name;
            this.age = age;

        }

        voice(num:number):void{

            console.log(`animal name : ${this.name}  and ${num}`)
        }

    }


    class dog extends animal{
        address:string;

        constructor(name:string,age:number,address:string){
            
            super(name,age);
            
            this.address= address;
        }

        voice(num: number): void {
            console.log(`this is ${this.address} and ${num}`)
        }
    }

    const cat = new animal('cow', 5);

    const dogs = new dog('dogy', 5, 'shylet')
    cat.voice(56);

    console.log(dogs)




    class Vencing {
        Brand : string;
        color: string;

        constructor(Brand:string, color:string){
            this.Brand = Brand;
            this.color = color;

        }


        showVen(num){
            console.log(`The car name ${this.Brand} and ${this.color} also ${num}`);
        }
    } 



    class Motor extends Vencing{
       
        weight : number;
        
        
        constructor(Brand:string,color:string,weight:number){

            super(Brand,color);

            this.weight = weight;
                     
        }

    }



    const Hero = new Vencing('Hero','black');
    const YeaMah = new Motor('Yeamah','black', 25);

    YeaMah.Brand;

    Hero.Brand;

    // 
}