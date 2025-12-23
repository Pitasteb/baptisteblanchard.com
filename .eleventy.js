module.exports = function(eleventyConfig) {
  // Copier le CSS/JS
  eleventyConfig.addPassthroughCopy("src");

  return {
    dir: {
      input: "pages",         // le dossier contenant toutes les pages
      output: "_site",
      includes: "../_includes" // inclus _includes depuis la racine
    },
    htmlTemplateEngine: "njk"
  };
};