// type UserInter ={
//      // name : 'atik',
//     name : string;
//     age : number;
// } ;
;
;
var userInter = {
    name: 'atik',
    age: 35,
    address: 'rajshahi',
    info: function () {
        console.log("info interface Extents here : name : ".concat(this.name, " and his age : ").concat(this.age, "  and address : ").concat(this.address));
    }
    // role : 'admin',
};
console.log(userInter);
var nullish = null;
var userNull = nullish !== null && nullish !== void 0 ? nullish : 'nullish';
console.log(userNull);
