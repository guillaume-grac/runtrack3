
function sommenombrespremiers(n,m){

    for(let i = 2; i < n; i++) {

        if (n % i === 0) {

            return false;
        }
    }
    for(let i2 = 2; i2 < m; i2++) {

        if (m % i2 === 0) {

            return false;
        }
    }
    return (n+m);
}

console.log (sommenombrespremiers(1, 4));
console.log (sommenombrespremiers(7, 7));

