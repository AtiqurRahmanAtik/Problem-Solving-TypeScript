var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var User = /** @class */ (function () {
        function User(name, age, address) {
            var _this = this;
            this.userInfo = function () {
                return "this is ".concat(_this.address);
            };
            this.name = name;
            this.address = address;
            this.age = age;
        }
        User.prototype.disPlay = function () {
            console.log("this is ".concat(this.name, " and address is ").concat(this.address));
        };
        return User;
    }());
    ;
    var user1 = new User('atik', 34, 'rajshahi');
    var user2 = new User('rony', 24, 'Dhaka');
    console.log(user1.disPlay(), user2.userInfo());
    console.log(user1, user2.userInfo());
    var Person = /** @class */ (function () {
        function Person(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        Person.prototype.showData = function () {
            console.log("this ".concat(this.address, " and age is : ").concat(this.age));
        };
        return Person;
    }());
    ;
    var man = /** @class */ (function (_super) {
        __extends(man, _super);
        function man(name, age, address, info) {
            var _this = _super.call(this, name, age, address) || this;
            _this.info = info;
            return _this;
        }
        man.prototype.showData = function () {
            console.log("this ".concat(this.address, " and age is : ").concat(this.age, " and also ").concat(this.info));
        };
        return man;
    }(Person));
    ;
    var atik = new man('atik', 37, 'rajshahi', 'info');
    atik.info;
    var animal = /** @class */ (function () {
        function animal(name, age) {
            this.name = name;
            this.age = age;
        }
        animal.prototype.voice = function (num) {
            console.log("animal name : ".concat(this.name, "  and ").concat(num));
        };
        return animal;
    }());
    var dog = /** @class */ (function (_super) {
        __extends(dog, _super);
        function dog(name, age, address) {
            var _this = _super.call(this, name, age) || this;
            _this.address = address;
            return _this;
        }
        dog.prototype.voice = function (num) {
            console.log("this is ".concat(this.address, " and ").concat(num));
        };
        return dog;
    }(animal));
    var cat = new animal('cow', 5);
    var dogs = new dog('dogy', 5, 'shylet');
    cat.voice(56);
    console.log(dogs);
    var Vencing = /** @class */ (function () {
        function Vencing(Brand, color) {
            this.Brand = Brand;
            this.color = color;
        }
        Vencing.prototype.showVen = function (num) {
            console.log("The car name ".concat(this.Brand, " and ").concat(this.color, " also ").concat(num));
        };
        return Vencing;
    }());
    var Motor = /** @class */ (function (_super) {
        __extends(Motor, _super);
        function Motor(Brand, color, weight) {
            var _this = _super.call(this, Brand, color) || this;
            _this.weight = weight;
            return _this;
        }
        return Motor;
    }(Vencing));
    var Hero = new Vencing('Hero', 'black');
    var YeaMah = new Motor('Yeamah', 'black', 25);
    YeaMah.Brand;
    Hero.Brand;
    // 
}
