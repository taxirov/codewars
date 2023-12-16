function score(dice) {
    let one = 0, two = 0, three = 0, four = 0, five = 0, six = 0
    for (let i = 0; i < dice.length; i++) {
        if (dice[i] == 1) { one += 1 }
        else if (dice[i] == 2) { two += 1 }
        else if (dice[i] == 3) { three += 1 }
        else if (dice[i] == 4) { four += 1 }
        else if (dice[i] == 5) { five += 1 }
        else { six += 1 }
    }
    let one_score = 0, two_score = 0, three_score = 0, four_score = 0, five_score = 0, six_score = 0
    if (one > 0) {
        if (one == 5) { one_score = 1200 }
        if (one == 4) { one_score = 1100 }
        if (one == 3) { one_score = 1000 }
        if (one == 2) { one_score = 200 }
        if (one == 1) { one_score = 100 }
    }
    if (two == 3 || two > 3) { two_score = 200 }
    if (three == 3 || three > 3) { three_score = 300 }
    if (four == 3 || four > 3) { four_score = 400 }
    if (five == 1) { five_score = 50 }
    if (five == 3 || five > 3) { five_score = 500 }
    if (six == 3 || six > 3) { six_score = 600 }
    return one_score + two_score + three_score + four_score + five_score + six_score
}
