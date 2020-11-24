

function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆
    var series = [];
    var p = 0, q = 1, sum = 0;
    //Write your code here:
    if (n == 1) {
        series.push(0);
        return series;
    }
    if (n >= 2) {
        series.push(0);
        series.push(1);
        for (var i = 3; i <= n; i++) {
            sum = q + p;
            p = q;
            series.push(sum);
            q = sum;
        }
        return series;
    }

    return (series);


    //Return an array of fibonacci numbers starting from 0.

    //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(parseInt(prompt("enter number.."))));