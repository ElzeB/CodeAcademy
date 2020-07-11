module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "~@/scss/variables.scss";
            @import "~@/scss/vendors/index.scss";
            @import "~@/scss/main.scss";
            `
        },
      }
    }
  }