import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: #363F5F;
    font-size: 1.4rem;
    font-family: "Poppins", sans-serif;

    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 1.3rem;
    height: 4rem;
    
    border: none;
    border-radius: 0.25rem;
    border: 1px solid #D7D7D7;
    
    background: #E7E9EE;

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
        width: 100%;
       
        margin-top: 1rem;
        padding: 1.3rem;
        height: 4rem;
       
        background: var(--green);
        color: var(--white);
        
        border: none;
        border-radius: 5px;

        font-size: 1rem;
        font-family: "Poppins", sans-serif;
        transition: 0.2s filter;

        &:hover {
           filter: brightness(0.94);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1rem;
    margin-bottom: 1rem;
    gap: 0.5rem;
`;

interface RadioProps {
  isActive: boolean;
  activeColor: "red" | "green";
}


const colors = {
  red: "#d95757",
  green: "#33CC95"
};

export const RadioTypeBox = styled.button<RadioProps> `
    display: flex;
    justify-content: center;
    align-items: center;
    
    border: 1.5px solid #969CB3;
    border-radius: 5px;

    padding: 1rem 0;
    
    background: ${props => props.isActive
      ? colors[props.activeColor]
      : "transparent"
    };
    transition: 0.2s filter;

    &:hover {
        filter: brightness(0.9);
    }

    img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    p {
        font-size: 1rem;
        font-family: "Poppins", sans-serif;
    }
`;
