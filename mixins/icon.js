export function iconMixin(icon = "about") {
  return function () {
    return {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: `/favicon.${icon}.png`,
          hid: "icon",
        },
      ],
    };
  };
}
