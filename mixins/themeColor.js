export function themeColorMixin(color = "blue") {
  return function () {
    return {
      bodyAttrs: {
        "data-theme": color,
      },
    };
  };
}
