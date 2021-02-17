function solution() {
    document.querySelector('section:nth-child(1) > div > button').addEventListener('click', addGift);

    let gifts = [];

    function addGift(event) {
        let lsitOfGifts = document.querySelector('body > div > section:nth-child(2) > ul');
        let giftName = event.target.parentNode.children[0];

        gifts.push(giftName.value);
        gifts.sort((a, b) => a.localeCompare(b));

        while (lsitOfGifts.firstChild) {
            lsitOfGifts.removeChild(lsitOfGifts.firstChild);
        }

        for (const gift of gifts) {
            let li = createElement('li', gift, ['class', 'gift']);

            let buttonSend = createElement('button', 'Send', ['id', 'sendButton']);

            buttonSend.addEventListener('click', send);

            function send(event) {
                action(event, 3);
            }

            let buttonDiscard = createElement('button', 'Discard', ['id', 'discardButton']);

            buttonDiscard.addEventListener('click', discard);

            function discard(event) {
                action(event, 4);
            }

            li.appendChild(buttonSend);
            li.appendChild(buttonDiscard);
            lsitOfGifts.appendChild(li);
        }

        console.log(lsitOfGifts);

        giftName.value = '';
    }

    function createElement(type, content, attributes = []) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        if (attributes.length > 0) {
            element.setAttribute(attributes[0], attributes[1]);
        }

        return element;
    }

    function action(event, childNumber) {
        let sendGift = document.querySelector(`body > div > section:nth-child(${childNumber}) > ul`);
        let gift = event.target.parentNode.textContent.split('SendDiscard');
        let li = createElement('li', gift[0], ['class', 'gift']);
        sendGift.appendChild(li);

        removeElement(gift[0]);

        event.target.parentNode.remove();
    }

    function removeElement(element) {
        const index = gifts.indexOf(element);

        gifts.splice(index, 1);
    }
}