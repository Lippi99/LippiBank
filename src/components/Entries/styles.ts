import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
  div {
    background: var(--white);
    padding: 2rem;
    color: var(--text-title);
    border-radius: 0.25rem;
    
    font-family: 'Poppins',sans-serif;
    
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    img {
        object-fit: cover;
    }

    strong {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 2rem;
    }

    &.highlight-total {
        background: var(--green);
        color: #FFF;
    }
  }
`;
