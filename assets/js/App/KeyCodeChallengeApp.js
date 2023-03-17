import './Core/Abstractions/prototype.js';
import { KeyboardEventController } from './Features/InfoCards/KeyboardEventController.js';
import { CountdownTimer } from './Core/CountDownTimer.js';

// DEBUG: Exposing the TTL here gives finer-grained control while testing.
var TIMER_TTL = 5;

/**
 * Main component for the KeyCode Challenge web page.
 */
export class KeyCodeChallengeApp
{
    /** @type {HTMLElement} */
    #_elCoverImage;
    
    /** @type {HTMLElement} */
    #_elCardsContainer;
    
    /** @type {KeyboardEventController} */
    #_elCardController;
    
    /** @type {CountdownTimer} */
    #_autoHideTimer = new CountdownTimer(() => {
        if (this.#_elCardsContainer.hidden) return;
        this.#_toggleViews();
        this.#_elCardController.clear();
    }, TIMER_TTL);

    /**
     * Initialises a new instance of the {@link KeyCodeChallengeApp} class.
     * 
     * @param {HTMLElement} elCoverImage - The HTML element to use as the container for the cover image.
     * @param {HTMLElement} elCardsContainer - The HTML element to use as the container for all information cards.
     */
    constructor(elCoverImage, elCardsContainer)
    {
        this.#_elCoverImage = elCoverImage;
        this.#_elCardsContainer = elCardsContainer;
        this.#_elCardController = new KeyboardEventController(elCardsContainer);
    }

    /**
     * Run the keyboard code challenge app.
     * 
     * @param {Boolean} debugMode - In debug mode, we toggle the views, and disable the event listener,
     *      to allow debugging of information card styling.
     */
    run(debugMode)
    {   
        if (debugMode)
        {
            this.#_toggleViews();
            this.#_elCardController.render();
            return;
        }

        // Listen for keyboard events...
        window.addEventListener("keydown", e =>
        {
            // Display the info cards.
            if (this.#_elCardsContainer.hidden) {
                this.#_toggleViews();
                this.#_elCardController.render();
                this.#_autoHideTimer.start();
            }
        
            // Update the cards with the current event info.
            this.#_elCardController.update(e);
        
            // Reset the screen after 5 seconds.
            this.#_autoHideTimer.reset();
        });
    }

    /**
     * Toggle between showing the welcome message, and the info cards.
     */
    #_toggleViews() {
        this.#_elCoverImage.toggleDisplay();
        this.#_elCardsContainer.toggleDisplay();
    }
}