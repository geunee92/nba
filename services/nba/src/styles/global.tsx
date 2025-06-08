import { css, Global } from "@emotion/react";

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          height: 100%;
          font-family: "Helvetica Neue", Arial, sans-serif;
          background-color: #fff;
          color: #111;
        }

        button {
          all: unset;
          cursor: pointer;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ul,
        ol {
          list-style: none;
        }
      `}
    />
  );
}
