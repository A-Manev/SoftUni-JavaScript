function create(words) {
   let content = document.getElementById('content');

   words.forEach(w => {
      const divElement = createElement('div', w);

      content.appendChild(divElement);
   })

   function createElement(type, content) {
      const element = document.createElement(type);

      element.addEventListener('click', show);

      const pElement = createPElement('p', content);

      element.appendChild(pElement);

      return element;
   }

   function createPElement(type, content) {
      const element = document.createElement(type);
      element.textContent = content;
      element.style.display = 'none';
      return element;
   }

   function show(event) {
      console.log(event.target.children[0].style.display = '');
   }
}