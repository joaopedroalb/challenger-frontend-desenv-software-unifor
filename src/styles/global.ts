import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --black:#000814;
        --white:#f7f9fa;
        --d-gray:#9eadba;
        --l-gray:#c3cfd9;
        --text-gray:#69747d;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: sans-serif; 
        background: var(--white);
        color: var(--text-gray);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        list-style: none;
    }
` 

export default GlobalStyle 