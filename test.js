while (true) {
    let answer = prompt('Грустишь?');
    if (answer.toLowerCase() === 'да') {
        alert('Не грусти!!!');
        break
    } else if (answer.toLowerCase() === 'нет') {
        alert('Умница!');
        break
    } else {
        alert('Не понял тебя, попробуй заново.')
    }

}
