import '../../Core/Abstractions/prototype.js';
import { InformationCard } from "./InformationCard.js";

/**
 * Component that renders keyboard event information to the screen.
 */
export class KeyboardEventController
{
    #_containerElement;

    // A dictionary of information cards, ready to be rendered to the page.
    //
    // ROADMAP: If this project was continued, I would like to move these
    // out of the class, and work with object discovery to collate a dynamic
    // dictionary of cards. That way, we would not need to re-open this class
    // in order to add new cards.
    //
    // This would mean making `InformationCard` an abstract class, and refactoring the
    // `.setContent()` method to be an `.update()` method, for each dervied instance.
    //
    // This class would then just be a controller class, only reponsible for rendering
    // the up-to-date event information within each of the cards.
    #_cards = {
        Key: new InformationCard("Key", "event.key"),
        Code: new InformationCard("Code", "event.code"),
        Which: new InformationCard("Which", "event.which"),
        Location: new InformationCard("Location", "event.location"),
        Modifiers: new InformationCard("Modifiers", "event.&lt;X&gt;Key"),
        Dump: new InformationCard("Dump", "event")
    };

    /**
     * Initialises a new instance of the {@link KeyboardEventController} class.
     * @param {Element} containerElement - The HTML element in which to inject the information cards.
     */
    constructor(containerElement)
    {
        this.#_containerElement = containerElement;
    }

    /**
     * Clear the container element of all innter HTML.
     */
    clear()
    {
        this.#_containerElement.html('');
    }

    /**
     * Render the information cards as children of the containter element.
     */
    render()
    {
        this.clear();
        Object.values(this.#_cards).forEach(card => {
            card.render(this.#_containerElement);
        });
    }

    /**
     * Updates the info cards with the infomation held within a given {KeyboardEvent} instance.
     * 
     * @param {KeyboardEvent} event - Each event describes a single interaction between the user
     *      and a key (or combination of a key with modifier keys) on the keyboard.
     */
    update(event)
    {
        this.#_cards["Key"].setContent(event.key);
        this.#_cards["Code"].setContent(event.code);
        this.#_cards["Which"].setContent(event.which);
        this.#_cards["Location"].setContent(this.#_updateLocation(event));
        this.#_cards["Modifiers"].setContent(this.#_updateModifiers(event));
        this.#_cards["Dump"].setContent(this.#_updateDump(event));
    }

    /**
     * Updates the keyboard event "location" information, in a human readable format.
     * 
     * @param {KeyboardEvent} event - Each event describes a single interaction between the user
     *      and a key (or combination of a key with modifier keys) on the keyboard.
     * @returns {string} - A string that represents the HTML to be injected into the information card.
     */
    #_updateLocation = e =>
    {
        // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location
        const sections = [
            "Standard",
            "Left",
            "Right",
            "Numpad",
            "Mobile",
            "Joystick"
        ];

        return `
        <ul>
            <li>${e.location}</li>
            <li><small>(${sections[e.location]})</small></li>
        <ul>
        `;
    }

    /**
     * Updates the keyboard event "modifiers" information (shift, ctrl, alt), in a human readable format.
     * 
     * @param {KeyboardEvent} event - Each event describes a single interaction between the user
     *      and a key (or combination of a key with modifier keys) on the keyboard.
     * @returns {string} - A string that represents the HTML to be injected into the information card.
     */
    #_updateModifiers = e =>
    {
        return `
            <ul>
                <li>Ctrl: ${e.ctrlKey}</li>
                <li>Shift: ${e.shiftKey}</li>
                <li>Alt: ${e.altKey}</li>
            <ul>
        `;
    }

    /**
     * Create a dump of information about the keyboard event, in a human readable format.
     * 
     * @param {KeyboardEvent} event - Each event describes a single interaction between the user
     *      and a key (or combination of a key with modifier keys) on the keyboard.
     * @returns {string} - A string that represents the HTML to be injected into the information card.
     */
    #_updateDump = e =>
    {
        return`
<pre>
{
    "altKey" : ${e.altKey},
    "code" : ${e.code},
    "ctrlKey" : ${e.ctrlKey},
    "detail" : ${e.detail},
    "key" : ${e.key},
    "location" : ${e.location},
    "metaKey" : ${e.metaKey},
    "repeat" : ${e.repeat},
    "shiftKey" : ${e.shiftKey},
    "type" : ${e.type},
    "which" : ${e.which}
}
</pre>`;
    }
}