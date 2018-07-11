import * as React from "react";
import { AuthorizationContext } from "../../../services/Authorization";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Search from "./Search";

// TODO set user as a function part of login
export default class NavBarDisplay extends React.Component<any, any> {
    public render() {
        return (
            <AuthorizationContext.Consumer>
                {
                    ({ actions, user }) => (
                        <nav style={{ alignItems: "center", display: "flex", fontSize: "0.85em" }}>
                            <React.Fragment>
                                <Search />
                                <Icon onClick={() => actions.logout()} src={user.picture} />
                                <Button onClick={() => actions.logout()}>Create</Button>
                            </React.Fragment>
                        </nav>
                    )
                }
            </AuthorizationContext.Consumer>

        );
    }
}
