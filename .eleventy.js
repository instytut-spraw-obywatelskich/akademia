const util = require('util');

module.exports = function(eleventyConfig) {

  // Layout aliases for convenience
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');

  eleventyConfig.setUseGitIgnore(false);
  
  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
  });

  eleventyConfig.addFilter("polskadata", require("./src/utils/polskadata.js") );
  eleventyConfig.addFilter("cudzyslowy", require("./src/utils/cudzyslowy.js") );
  eleventyConfig.addFilter("sierotki", require("./src/utils/sierotki.js") );
  eleventyConfig.addFilter("markdownify", require("./src/utils/markdownify.js") );

  eleventyConfig.addFilter("jsmin", require("./src/utils/minify-js.js") );
  
  if (process.env.NODE_ENV == "production") {
    eleventyConfig.addTransform("htmlmin", require("./src/utils/minify-html.js") );
  }

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy("./src/site/fonts");
  eleventyConfig.addPassthroughCopy("./src/site/img");
  eleventyConfig.addPassthroughCopy("./src/site/css");
  eleventyConfig.addPassthroughCopy("./src/site/js");
  eleventyConfig.addPassthroughCopy("./src/site/admin");

  return  {
    dir: {
      input: "src/site",
      includes: "_includes",
      output: "dist"
    },
    passthroughFileCopy: true,
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
  };

};
