import * as React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import AddUser from '../../mutations/AddUser';
import Button from "../components/Button";

const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  letter-spacing: 0.1ch;
`;

interface PanelProps {
  left: boolean;
}

const Panel = styled.div`
  height: 100%;
  width:  ${(props) => props.left ? "53%" : "47%"};
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  background-image: ${(props: PanelProps) => props.left ? "linear-gradient(to top, #f43b47 0%, #453a94 100%)" : "none"};
  color: ${(props) => props.left ? "#ffffff" : "#272727"};
  clip-path: ${(props) => props.left ? "polygon(0 0, 85% 0%, 100% 100%, 0% 100%)" : ""};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 35%;
`;

export default class LandingPage extends React.Component<any, any> {
  public render() {
    return (
      <LandingContainer style={{ backgroundColor: "#ffffff" }}>
        <Panel left={true}>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.5em" }}>
            <li>
              Cover all your project planning bases.
            </li>
            <li>
              Get more accomplished quicker.
            </li>
            <li>
              Make fewer costly errors.
            </li>
          </ul>
        </Panel>
        <Panel left={false}>
          <ContentContainer>
            <h3>Come build your best project yet.</h3>
            <p>Start planning today</p>
            <Button onClick={() => this.props.login()}>Log in</Button>
            <AddUser />
          </ContentContainer>
        </Panel>
        <Footer></Footer>
      </LandingContainer>
    );
  }
}
