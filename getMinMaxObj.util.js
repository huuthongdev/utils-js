export function getMinMaxObj(data, fieldNameRange, isMax = true, isReturnField = false) {
    let temp;
    if (isMax) {
        temp = data.reduce((min, p) => p[fieldNameRange] > min ? p[fieldNameRange] : min, data[0][fieldNameRange]);
    } else {
        temp = data.reduce((min, p) => p[fieldNameRange] < min ? p[fieldNameRange] : min, data[0][fieldNameRange]);
    }
    if (isReturnField) return temp;
    return data.find(v => v[fieldNameRange] === temp);
}
