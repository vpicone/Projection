import * as React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-top: 1px solid lightgrey;
    font-size: 1em;
    color: lightgrey;
    height: 2.5em;
`;

export default class Footer extends React.Component {
    public render() {
        return (
            <FooterContainer>
                Made with love by VPP
            </FooterContainer>
        );
    }
}
