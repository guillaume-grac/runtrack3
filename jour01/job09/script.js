function tri (nombres, ordre){

    function desc(x, y) {
        return y - x;
    }

    function asc(x, y) {
        return x - y;
    }

    if ( ordre === "asc") {
        result =nombres.sort(asc);
        console.log(result);
    }
    if ( ordre === "desc") {
        result =nombres.sort(desc);
        console.log(result);
    }
}
nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
tri(nombres, "asc");
tri(nombres, "desc");