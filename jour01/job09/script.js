function tri (nombres, ordre){

    function desc(x, y) {
        return y - x;
    }

    function asc(x, y) {
        return x - y;
    }

    if ( ordre === "asc") {
        nombres.sort(asc);
        console.log("asc : " + nombres);
    }
    if ( ordre === "desc") {
        nombres.sort(desc);
        console.log("desc : " + nombres);
    }
}
console.log(tri([42, 182, 12, 4, 8954, 8], "desc"));
console.log(tri([407, 10, 1, 5, 15, 9], "asc"));