import { KeyCodeChallengeApp } from './App/KeyCodeChallengeApp.js';

// Debug Mode disables the key binding, and the cover image, 
// so that it's easier to style the information cards.
const DEBUG_MODE = false;

// Select the cover image, and cards container, from the DOM.
const elCoverImage = document.querySelector('#coverImage');
const elCardsContainer = document.querySelector('#cardsContainer');

// Instatiate a new instance of the app.
const app = new KeyCodeChallengeApp(elCoverImage, elCardsContainer);

// Run the app.
app.run(DEBUG_MODE);