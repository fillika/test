// Hello

const abc = "abc";
const println = x => console.log(x);
const sum = (a, b) => a + b;
const result = sum(10, 20);

println(result)

function goAwayForLoop(x) {
    for (let i = 0; i < x; i++) {
        println(x)
    }
}

goAwayForLoop(100);