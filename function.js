
{
    function add(num1, num2) {
        var res = num1 + num2;
        return res;
    }
    var a = 34;
    var b = 45;
    var res = add(a, b);
    console.log(res);
    var nameArrow = function (a, b) {
        return a + b;
    };
    console.log(nameArrow(15, 20));
    function printHello() {
        console.log('Hello!');
    }
    printHello();
    var nagateFuction = function (val) { return val * 3; };
    console.log(nagateFuction(100));
    var nagateFuctions = function (vla) { return vla * 3; };
    var ress = nagateFuction(15);
    console.log(res);
    var arr = [25, 16, 7, 9];
    var out = arr.concat([25, 99]);
    console.log(arr);
    console.log('final out arr : ', out.sort(function (a, b) { return a - b; }));
}
;
// type sum = (a:number, b:number)=>number;
var sum = function (a, b, c) {
    var sum = a + b + c;
    return sum;
};
var sumResult = sum(5, 7, 5);
console.log(sumResult);
var taplues = ['e', 3, true];
console.log(taplues);



