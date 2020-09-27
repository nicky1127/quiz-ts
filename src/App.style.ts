import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/wallpaper.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        backgound-image: url(${BGImage});
        background-size: cover;
        margin:0;
        padding: 0 20px;
        display: flex;
        justify-content:center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`