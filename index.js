function mapToNegativize(original) {
    let newArray = []
    for (let i = 0; i < original.length; i++) {
        newArray.push(-1 * original[i])
    }
    return newArray
}

function mapToNoChange(original) {
    let newArray = []
    for (let i = 0; i < original.length; i++) {
        newArray.push(original[i])
    }
    return newArray
}

function mapToDouble(original) {
    let newArray = []
    for (let i = 0; i < original.length; i++) {
        newArray.push(2 * original[i])
    }
    return newArray
}

function mapToSquare(original) {
    let newArray = []
    for (let i = 0; i < original.length; i++) {
        newArray.push(original[i] * original[i])
    }
    return newArray
}

function reduceToTotal(original, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < original.length; i++) {
        total = total + original[i]
    }
    return total
}

function reduceToAllTrue(original) {
    for (let i = 0; i < original.length; i++) {
        if (!original[i]) return false
    }
    return true
}

function reduceToAnyTrue(original) {
    for (let i = 0; i < original.length; i++) {
        if (original[i]) return true
    }
    return false
}
