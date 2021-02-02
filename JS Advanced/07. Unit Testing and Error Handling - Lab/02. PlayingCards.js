function printDeckOfCards(face, suit) {
    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (!Object.keys(suits).includes(suit)) {
        throw new Error('Invalid suit!');
    } else if (!faces.includes(face)) {
        throw new Error('Invalid face!');
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${suits[suit]}`;
        }
    }
}

console.log(printDeckOfCards('A', 'S').toString());
console.log(printDeckOfCards('10', 'H').toString());