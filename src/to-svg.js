import icons from "./icons";

/**
 * Creates SVG String
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */

function toSvg(name, attrs = {}) {
  if (!name) {
    throw new Error("The required `key` (icon name) is missing");
  }

  if (!icons[name]) {
    throw new Error(
      `Oops, looks like there is no match for ${name}. You may see all icons list here: https://discord-icons.com`
    );
  }

  return icons[name].toSvg(attrs);
}

export default toSvg;
