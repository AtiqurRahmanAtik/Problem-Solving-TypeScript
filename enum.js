{
    //
    var CardinalDirections = void 0;
    (function (CardinalDirections) {
        CardinalDirections[CardinalDirections["North"] = 0] = "North";
        CardinalDirections[CardinalDirections["East"] = 1] = "East";
        CardinalDirections[CardinalDirections["South"] = 2] = "South";
        CardinalDirections[CardinalDirections["West"] = 3] = "West";
    })(CardinalDirections || (CardinalDirections = {}));
    var currentDirection = CardinalDirections.North;
    // logs 0
    console.log(currentDirection);
    // enum namess {
    //     atik = 'atik',
    //     age = "16"
    // }
    // console.log(namess);
    var multi = void 0;
    (function (multi) {
        multi["name"] = "atik";
        multi[multi["age"] = 17] = "age";
    })(multi || (multi = {}));
    console.log(multi);
    //
}
