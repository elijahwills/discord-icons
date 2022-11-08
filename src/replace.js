import classnames from "classnames";

/**
 * Replace all HTML elements that have a `data-discord` attribute with SVG markup
 * corresponding to the element's `data-discord` attribute value.
 * @param {Object} attrs
 */

function replace(attrs = {}) {
  if (typeof document == undefined) {
    throw new Error("`icon.replace()` won't work out of a browser env");
  }

  const elementToReplace = document.querySelectorAll("[data-discord]");

  Array.from(elementToReplace).forEach((element) =>
    replaceElement(element, attrs)
  );

  /**
   * Replaces single HTML to SVG Markup
   * corresponding to the element's `data-discord` attribute value.
   * @param {HTMLDocument} element
   * @param {Object} attrs
   */

  function replaceElement(element, attrs = {}) {
    const elementAttrs = getAttrs(element);
    const name = elementAttrs["data-discord"];
    delete elementAttrs["data-discord"];

    const svgString = icons[name].toSvg({
      ...attrs,
      ...elementAttrs,
      ...{ class: classnames(attrs.class, elementAttrs.class) },
    });

    const svgDocument = new DOMParser().parseFromString(
      svgString,
      "image/svg+xml"
    );

    const svgElement = svgDocument.querySelectorAll("svg");

    element.parentElement.replaceChild(svgElement, element);
  }

  /**
   * Fetches HTML element attributes
   * @param {HTMLElement} element
   * @returns {Object}
   */

  function getAttrs(element) {
    return Array.from(element.attributes).reduce((attrs, attr) => {
      attrs[attr.name] = attr.value;
      return attrs;
    }, {});
  }
}

export default replace;
