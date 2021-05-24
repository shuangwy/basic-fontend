const fibonacci = (n) => {
    let n1 = 1,
        n2 = 1,
        sum;
    for (let i = 3; i <=n; i++) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum
    }
    return sum
}
console.log(fibonacci(1000))