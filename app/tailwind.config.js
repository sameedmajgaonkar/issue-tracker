/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "h1, h2, h3, h4, a, p, blockquote, figure, figcaption, strong, em, kbd, code, pre, ol, ul, li, table, thead, tr, th, td, img, video, hr":
              {
                color: "var(--primary)",
              },
          },
        },
      },
    },
  },
};
