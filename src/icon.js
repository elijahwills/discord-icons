import classnames from "classnames/dedupe";

import attribute from "./attrbutes.json";

export default class Icon {
  constructor(name, contents, tags = []) {
    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attrs = {
      ...attribute,
      ...{ class: `discord discord-${name}` },
    };
  }

  /**
   * Creates an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */
  toSvg(attrs = {}) {
    const mergedAttrs = {
      ...this.attrs,
      ...attrs,
      ...{ class: classnames(this.attrs.class, attrs.class) },
    };

    return `<svg ${attrsToString(mergedAttrs)}>${this.contents}</svg>`;
  }

  /**
   * Renders Icon string representation.
   *
   * @returns {string}
   */
  toString() {
    return this.contents;
  }
}

/**
 * Convert attributes object to HTML string atributes.
 * @param {Object} attrs
 * @returns {string}
 */
function attrsToString(attrs) {
  return Object.keys(attrs)
    .map((key) => `${key}="${attrs[key]}"`)
    .join(" ");
}
