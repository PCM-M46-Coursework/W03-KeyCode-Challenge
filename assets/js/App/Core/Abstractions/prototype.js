/**
 * Toggles the visiblity of the calling element, via the `hidden` HTML attribute.
 */
Element.prototype.toggleDisplay = function()
{
    this.hidden = !this.hidden;
};

/**
 * Gets or sets the HTML contents of the calling element.
 * @param {String} htmlString - A string of HTML to set as the content of each matched element.
 * @returns {String} If no value is passed in, for {@link htmlString}, returns the inner HTML of the calling element.
 *    Otherwise, returns void.
 */
Element.prototype.html = function(htmlString)
{
  if (htmlString === undefined) {
    return this.innerHTML;
  }
  this.innerHTML = htmlString;
};

/**
 * Parses a HTML object from a HTML string.
 * @returns a HTML object, parsed from a string. 
 */
String.prototype.parseAsHtml = function()
{ 
    // NOTE: We cannot inject a HTML document into another HTML document. Parsing strings with
    // `.parseFromString` results in a full HTML document with `html`, `head`, and `body` tags.
    // Because of this, we need to extract the body of the resulting DOM, and return the child,
    // or children elements within.
    
    // Parse the string as an HTML object.
    const html = new DOMParser().parseFromString(this, 'text/html').body;

    // Select the wrapped DIV from the body of the HTML document.
    return html.childElementCount > 1 ? html.childNodes : html.firstChild;
}