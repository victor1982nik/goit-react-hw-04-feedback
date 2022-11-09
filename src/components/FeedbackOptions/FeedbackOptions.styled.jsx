import styled from "@emotion/styled";

export const Button = styled.button`    
    margin-right: 10px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    box-shadow:
        1px 3px 1px rgba(0, 0, 0, 0.1),
        2px 1px 2px rgba(0, 0, 0, 0.08),
        1px 2px 2px rgba(0, 0, 0, 0.12);
    
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 14px;    
    :active {
        background-color: lightblue;
    }
`;