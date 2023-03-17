import '../../Core/Abstractions/prototype.js';

/**
 * Represents an article rendered to the page, displaying specific information about a keyboard event.
 */
export class InformationCard
{
    /** @type {HTMLElement} */
    #_article;
    
    /**
     * Initialises a new instance of the {@link InformationCard} class.
     * 
     * @param {String} headerText - The text to show within the header of the information card.
     * @param {String} footerText - The text to show within the footer of the information card.
     */
    constructor(headerText, footerText)
    {
        this.#_article = `
            <article class="card">
                <header>
                    <p>${headerText}</p>
                </header>
                <main id="card-${headerText.toLowerCase()}">
                    <!-- Dynamically populated. -->
                </main>
                <footer>
                    ${footerText}
                </footer>
            </article>
        `.parseAsHtml();
    }

    /**
     * Sets the HTML conten within the main section of the information card.
     * 
     * @param {String} content - The text to show within the main section of the information card.
     * @returns {InformationCard} - The same instance that called this method.
     */
    setContent(content)
    {
        this.#_article.querySelector('main').html(content);
        return this;
    }

    /**
     * Appends this information card to a parent element within the page.
     * 
     * @param {HTMLElement} parent - The parent HTML element to inject this information card into.
     */
    render(parent)
    {        
        parent.append(this.#_article);
    }
}