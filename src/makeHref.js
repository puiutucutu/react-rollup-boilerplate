import React from "react";

/**
 * @param {String} href
 * @param {String} title
 * @param {String} text
 * @return {*}
 */
export const makeHref = ({ href, title, text }) => (
  <a href={href} title={title}>
    {text}
  </a>
);
