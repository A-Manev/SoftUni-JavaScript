function solve() {
  let inputText = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  function makeTextCamelCase(text) {
    let allWords = text.toLowerCase().split(' ');
    let result = '';

    result += allWords.shift();
    result += allWords.map(word => capitalize(word)).join('');
    return result;
  }

  function makeTextPascalCase(text) {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => capitalize(word))
      .join('');
  }

  if (namingConvention === 'Camel Case') {
    document.getElementById('result').textContent = makeTextCamelCase(inputText);
  } else if (namingConvention === 'Pascal Case') {
    document.getElementById('result').textContent = makeTextPascalCase(inputText);
  } else {
    document.getElementById('result').textContent = 'Error!';
  }
}