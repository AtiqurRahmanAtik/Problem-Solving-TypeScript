var users = {
    name: 'atik',
    age: 24,
    nam: 'rony',
    address: function () {
        console.log('rony user');
    },
    info: function () {
        console.log('function is Call ', this.address);
    }
};
users.address = 'dhaka';
console.log(users);
