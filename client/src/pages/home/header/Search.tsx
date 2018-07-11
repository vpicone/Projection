import React from "react";
import styled from "styled-components";

const Search = styled.input.attrs({
    name: "project search",
    placeholder: "Search projects",
    type: "text",
})`
    color: var(--black);
    border: none;
    padding: 0.5em 1em;
    border-radius: 100px;
    transition: all 0.3s ease;
    background-color: #f5f8fa;
    border: 1px solid #f5f8fa;
    &:focus{
        background-color: #ffffff;
        border: 1px solid var(--light);
        ::placeholder {
            color: grey;
        }
    }
`;

export default Search;
