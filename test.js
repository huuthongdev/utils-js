function GetMinMaxItem(data, fieldNameRange, isMax = true, isReturnField = false) {
    let temp;
    if (isMax) {
        temp = data.reduce((min, p) => p[fieldNameRange] > min ? p[fieldNameRange] : min, data[0][fieldNameRange]);
    } else {
        temp = data.reduce((min, p) => p[fieldNameRange] < min ? p[fieldNameRange] : min, data[0][fieldNameRange]);
    }
    if (isReturnField) return temp;
    return data.find(v => v[fieldNameRange] === temp);
}

console.log(GetMinMaxItem(
    [
        { name: 'test1', total: 2 },
        { name: 'test12', total: 12 },
        { name: 'test3', total: 3 },
        { name: 'test8', total: 8 },
        { name: 'test33', total: 33 },
        { name: 'test10', total: 10 },
    ],
    'total',
    true
))