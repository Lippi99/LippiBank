import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;

        --text-body: #969CB2;
        
        --blue: #5429CC;
        --green: #33CC95;
        --red: #E52E4D;
        --white: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    .react-modal-close {
        position: absolute;
        right: 1rem;
        top: 1rem;
        border: none;
        background: none;
    }

    .react-modal-overlay {
        background: rgb(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
       
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
`;
