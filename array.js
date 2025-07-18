{
    //
    var userInfo = ['atik', 'rony', 'jony', 11];
    console.log(userInfo);
    var userInfo2 = ['atik', 11, 'rony', 22];
    var userr = ['atik', 'rony'];
    var tapule = void 0;
    tapule = ['atik', 1, 2, 'rony'];
    console.log(tapule);
    var obj = [];
    var obj1 = { name: 'at', age: 17, address: 'rajshahi' };
    obj.push(obj1);
    // console.log('object arr : ',obj)
    for (var arr in obj) {
        console.log(obj[arr]);
    }
    var namess = void 0;
    (function (namess) {
        namess["atik"] = "atik";
    })(namess || (namess = {}));
    console.log({ namess: namess });
    var resPonse = "POST";
    console.log(resPonse);
    function RequestType(requestType) {
        console.log(requestType);
    }
    RequestType("GET");
    var info = ['user', 'sere'];
    console.log(info);
    var graph = [55.2, 41.3, 'ad'];
    console.log(graph);
    //
}
