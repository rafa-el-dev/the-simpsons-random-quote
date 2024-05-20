const selectors = {
  logo: document.querySelector('#logo'),
  characterName: document.querySelector('#character-name'),
  characterImage: document.querySelector('#character-image'),
  randomQuote: document.querySelector('#quote'),
  btn: document.querySelector('#btn')
};

const api_url = 'https://thesimpsonsquoteapi.glitch.me/quotes';

const getQuote = async () => {
  try {
    Object.values(selectors).forEach(selector => selector.classList.remove('fade'));

    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const [{ character, image, quote }] = await response.json();

    selectors.characterName.textContent = character;
    selectors.characterImage.src = image;
    selectors.characterImage.alt = character;
    selectors.randomQuote.textContent = `"${quote}"`;

    Object.values(selectors).forEach(selector => selector.classList.add('fade'));
  } catch (error) {
    selectors.randomQuote.textContent = 'Failed to fetch quote. Please try again later.';
  }
};

selectors.btn.addEventListener('click', getQuote);
document.addEventListener('DOMContentLoaded', getQuote);
