//  Getting a random integer between two values, inclusive

/*  While the getRandomInt() function above is inclusive at the minimum,
 *  it's exclusive at the maximum. What if you need the results to be
 *  inclusive at both the minimum and the maximum?
 *  The getRandomIntInclusive() function below accomplishes that.
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

module.exports = getRandomIntInclusive;