import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export default createGlobalStyle`
  :root {
    --primary-color: ${props => props.theme.colors.primary};
    --title-color: ${props => props.theme.colors.secundary};
    --text-color: ${props => props.theme.colors.text};
    --background: ${props => props.theme.colors.background};
    --background-lighter: ${props => lighten(0.1, props.theme.colors.background)};
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
  }
  
  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: var(--title-color);
    font-family: Ubuntu;
  }
`;
