import * as React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    font-size: 1em;
    align-items: center;
    background-color: #907dc5;
    grid-area: header;
`;

const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1140px;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 72rem) {
        padding: 0px 3em;
    }
    @media screen and (max-width: 48rem) {
        padding: 0;
        flex-direction: column;
        justify-content: center;
        h2 {
            margin: 0.4em 0;
        }
    }
`;

// TODO set user as a function part of login
export default class NavBarDisplay extends React.Component<any, any> {
    public render() {
        return (
            <NavContainer>
                <ContentContainer>
                    <h2>Projection</h2>
                    <Navigation />
                </ContentContainer>
            </NavContainer>
        );
    }
}
