const myProblem = () => {
    var a = document.getElementById("a1").value;
    var b = document.getElementById("b1").value;
    var c = document.getElementById("c1").value;
    if (a == "7" && b == "-2" && c == "3") {
        return "Good Job!";
    } else
        return "Try Again!";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}

const myProblem2 = () => {
    var d = document.getElementById("d1").value;
    var e = document.getElementById("e1").value;
    var f = document.getElementById("f1").value;
    var g = document.getElementById("g1").value;

    if (d == "-4" && e == "1" && f == "6" && g == "-3") {
        return "Good Job!";
    } else
        return "Try Again!";
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
}

const myProblem3 = () => {
    var h = document.getElementById("h1").value;
    var i = document.getElementById("i1").value;
    var j = document.getElementById("j1").value;
    var k = document.getElementById("k1").value;

    if (h == "8" && i == "6" && j == "-2" && k == "-4") {
        return "Good Job!";
    } else
        return "Try Again!";
};
const myCalc3 = () => {
    document.getElementById("demo3").innerHTML = myProblem3();
}

const myProblem4 = () => {
    var l = document.getElementById("l1").value;
    var m = document.getElementById("m1").value;
    var n = document.getElementById("n1").value;

    if (l == "-3" && m == "7" && n == "-8") {
        return "Good Job!";
    } else
        return "Try Again!";
};
const myCalc4 = () => {
    document.getElementById("demo4").innerHTML = myProblem4();
}