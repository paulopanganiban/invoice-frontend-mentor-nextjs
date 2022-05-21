import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 /* reset */
 * {
  margin: 0;
  padding: 0;
}
*, *::before, *::after {
  box-sizing: border-box;
}
/* make images easier to work with */
img, picture {
  max-width: 100%;
  display: block;
}
/* make forms easier to work with */
input, button, textarea, select {
  font: inherit;
}
/* remove animations for people who turned them off */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
h1,h2,h3,h4,h5,h6,p {
  font-weight: 400;
}
a {
  font-family: inherit;
  color: inherit;
  text-decoration: none;
  :hover {
      text-decoration: underline;
  }
}
ul, li {
  list-style: none;
}
/* end of reset */
html {
    --orange: hsl(26, 100%, 55%);
    --pale-orange: hsl(25, 100%, 94%);

    --dark-blue: hsl(220, 13%, 13%);
    --dark-grayish-blue: hsl(219, 9%, 45%);
    --grayish-blue: hsl(220, 14%, 75%);

    --light-grayish-blue: hsl(223, 64%, 98%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    font-family: --apple-system, 
    BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif; 
}
body {
  overflow-x: hidden;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  transition: background-color 0.50s linear, color 0.50s linear;
}
a {
  color: inherit;
  text-decoration: none;
  :hover {
      text-decoration: underline;
  }
}
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
}
`