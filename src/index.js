/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let inLove = [];

    return (function startCheckTriangle(preferences) {
        if (!preferences.length) {
            return 0
        }

        outer: for (let i = 0; i < preferences.length; i++) {

            var firstLover = {it: i + 1, careFor: preferences[i]};
            if (!inLove.includes(firstLover.it) && firstLover.it !== firstLover.careFor) {

                var secondLover = {it: preferences[i], careFor: preferences[preferences[i] - 1]};
                if (!inLove.includes(secondLover.it) && secondLover.it !== secondLover.careFor) {

                    var thirdLover = {it: preferences[preferences[i] - 1], careFor: preferences[preferences[preferences[i] - 1] - 1]};
                    if (!inLove.includes(thirdLover.it) && thirdLover.it !== thirdLover.careFor) {

                        if (firstLover.careFor === secondLover.it && secondLover.careFor === thirdLover.it && thirdLover.careFor === firstLover.it) {
                            inLove.push(firstLover.it, secondLover.it, thirdLover.it);
                        }
                    } else {
                        continue outer;
                    }
                } else {
                    continue outer;
                }
            } else {
                continue outer;
            }
        }

        return inLove.length / 3 || 0

    })(preferences)
};
