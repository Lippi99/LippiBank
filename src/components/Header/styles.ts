import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    padding: 2rem 1rem 10rem;
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;

        img {
            max-width: 50px;
            margin-right: 1rem;
        }

        h1 {
            font-size: 2rem;
            color: var(--white);
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
        }
    }


    button {
        background: #6933FF;
        border: none;
        padding: 1rem;
        width: 195px;
        color: var(--white);

        font-family: 'Poppins', sans-serif;
        font-size: 1rem;

        transition: 0.2s filter;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;