const names = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const uniq = names
    .map((name) => {
        return {
            count: 1,
            name: name
        }
    })
    .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count
        return a
    }, {})

let pair = 0;

for (let el in uniq) {
    pair = pair + parseInt(uniq[el] / 2)
}

console.log(pair)


//  input : 10 20 20 10 10 30 50 10 20
// output : 3