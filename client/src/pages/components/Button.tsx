import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: var(--light);
    color: white;
    padding: 0.5em 1em;
    border: 1px solid var(--light);
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color: var(--dark);
    }
`;

export default Button;
