export function postMetaMixin(key = "post") {
  return function () {
    const page = this[key];

    return {
      title: page.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: page.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: page.title },
        {
          hid: "og:description",
          property: "og:description",
          content: page.description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: page.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: page.description,
        },
      ],
    };
  };
}
