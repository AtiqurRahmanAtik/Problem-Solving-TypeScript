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
    // 
}
