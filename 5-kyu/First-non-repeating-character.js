function firstNonRepeatingLetter(s) {
    if (s.length == 0) { return '' }
    else {
        let arr = s.toLowerCase().split('')
        for (i in arr) {
            let count = 0
            for (j in arr) {
                if (arr[j] == arr[i]) {
                    count += 1
                }
            }
            if (count == 1) { return s[i] }
        }
        return ''
    }
}


console.log(firstNonRepeatingLetter('sT'))