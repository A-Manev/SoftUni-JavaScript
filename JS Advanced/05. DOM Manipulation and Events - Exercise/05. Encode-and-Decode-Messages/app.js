// function encodeAndDecodeMessages() {
//     let buttons = [...document.getElementsByTagName("button")];

//     buttons[0].addEventListener('click', decodeMessage);

//     buttons[1].addEventListener('click', encodeMessage);

//     let textAreas = [...document.getElementsByTagName("textarea")];

//     let decodedMessage = '';
//     function decodeMessage(event) {
//         let message = textAreas[0].value;

//         decodedMessage = message
//             .split("")
//             .map((x) => String.fromCharCode(x.charCodeAt(0) + 1))
//             .join("");

//         textAreas[0].value = "";
//         textAreas[1].value = decodedMessage;
//     }

//     function encodeMessage() {
//         let encodedMessage = decodedMessage
//             .split("")
//             .map((x) => String.fromCharCode(x.charCodeAt(0) - 1))
//             .join("");

//         textAreas[1].value = encodedMessage;
//     }
// }

function encodeAndDecodeMessages() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const map = {
        encode: {
            text: textareas[0],
            btn: buttons[0],
            transform: (char) => String.fromCharCode(char.charCodeAt(0) + 1),
        },
        decode: {
            text: textareas[1],
            btn: buttons[1],
            transform: (char) => String.fromCharCode(char.charCodeAt(0) - 1),
        },
    };

    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        const type = e.target.textContent
            .toLowerCase()
            .trim()
            .includes('encode') ? 'encode' : 'decode';

        const message = map[type].text.value
            .split('')
            .map(map[type].transform)
            .join('');

        map.encode.text.value = '';
        map.decode.text.value = message;
    })
}