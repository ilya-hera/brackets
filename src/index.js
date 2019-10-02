module.exports = function check(str, bracketsConfig) {

    for (let j = 0; j < str.length; j++) {

        for (let num = 0; num < bracketsConfig.length; num++) {

            if (str[j] === bracketsConfig[num][0] &&
                str[j + 1] === bracketsConfig[num][1]) {

                str = str.substr(0, j) + str.substr(j + 2, str.length - (j + 2));
                j--;
                num = -1;

            }
        }

    }
    return !str.length || false
}
