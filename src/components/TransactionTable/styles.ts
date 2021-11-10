import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
            font-family: 'Poppins',sans-serif;
        }

        td {
            padding: 1.5rem 2rem;
            border: 0;
            background: var( --white);
            color: var(--text-body);
            border-radius: 0.25rem;
            font-size: 1rem;
            font-family: 'Poppins',sans-serif;

            &:first-child {
                color: #363F5F;
                font-weight: 400;
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }

            img {
                max-width: 20px;
                margin-left: 4rem;
                
            }
        }
    }
`;

export const EmptyTable = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 300px;
        position: relative;
        object-fit: cover;
    }

    p {
        font-size: 1.8rem;
        font-family: 'Poppins',sans-serif;
        position: absolute;
        margin-left: 6rem;      
    }
`;