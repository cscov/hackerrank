function rotLeft(a, d) {
    let newArr = a.slice(d);
    for(let i = 0; i < d; i++) {
        newArr.push(a[i]);
    }

    return newArr;
}
