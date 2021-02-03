function printDeckOfCards(cards) {
    function createCard(face, suit) {
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

    let allValidCards = [];

    for (const currentCard of cards) {
        try {
            let suit = currentCard.slice(-1);
            let face = currentCard.slice(0, currentCard.length - 1);

            const card = createCard(face, suit);

            allValidCards.push(card);
        } catch (error) {
            console.log(`Invalid card: ${currentCard}`);
            return;
        }
    }

    return allValidCards.join(' ');
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
console.log(printDeckOfCards(['5S', '3D', 'QD', '1C']));