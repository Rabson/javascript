const names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl'];

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

const duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

console.log(duplicates) // [ 'Nancy' ]