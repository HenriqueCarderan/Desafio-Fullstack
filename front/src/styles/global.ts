import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      --color-gray-4: #121214;
      --color-gray-3: #212529;
      --color-gray-2: #343B41;
      --color-gray-1: #868E96;
      --color-gray-0: #F8F9FA;
      --color-primary: #FF577F;
      --color-primary-focus: #FF427F;
      --color-primary-negative: #59323F;
      --color-success: #3FE864;
      --color-error: #E83F5B;

      font-size: 60%;   
    }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ul,
  ol {
    list-style: none;
  }

  body, html {
    width: 100vw;
    height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  small {
    margin: 0;
    padding: 0;
  }

  button {
  cursor: pointer;
  border: none;
  background: transparent;
  }

  img {
    max-width: 100%;
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }

  .flexGrid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-gray-1);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-gray-3);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray-4);
  }
`;
