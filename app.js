const selectors = {
  logo: document.querySelector('#logo'),
  characterName: document.querySelector('#character-name'),
  characterImage: document.querySelector('#character-image'),
  randomQuote: document.querySelector('#quote'),
  btn: document.querySelector('#btn')
};

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';

const getQuote = async () => {
  Object.values(selectors).forEach(selector => selector.classList.remove('fade'));

  const response = await fetch(url);
  const [{ character, image, quote }] = await response.json();

  selectors.characterName.textContent = character;
  selectors.characterImage.src = image;
  selectors.characterImage.alt = character;
  selectors.randomQuote.textContent = `"${quote}"`;

  Object.values(selectors).forEach(selector => selector.classList.add('fade'));
};

selectors.btn.addEventListener('click', getQuote);
getQuote();