const formatPrice = (total) => {
    let s = JSON.stringify(total)
    let arr = s.split('')
    console.log(arr[arr.length - 1])
    if (arr[arr.length - 1] === 'đ') {
        arr.pop()
    }
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i === 1 || i === arr.length - 1) {
            newArr.push(arr[i])
            continue;
        }
        else if ((arr.length - 1 - i) % 3 === 2) {
            newArr.push('.')
            newArr.push(arr[i])
        }
        else {
            newArr.push(arr[i])
        }
    }
    let kq = newArr.join('')
    return kq
}
let s = 10000000
console.log(formatPrice(s));