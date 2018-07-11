import { navigate } from "@reach/router";
import { WebAuth } from "auth0-js";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import * as React from "react";

export const AuthorizationContext = React.createContext({
    actions: {
        handleAuthentication: PropTypes.func,
        isAuthenticated: PropTypes.func,
        login: PropTypes.func,
        logout: PropTypes.func,
    },
    user: PropTypes.object,
});

export class AuthorizationProvider extends React.Component<any, any> {

    public state = {
        user: {},
    };

    public authenticator = new WebAuth({
        audience: `https://${process.env.DOMAIN}/userinfo`,
        clientID: process.env.CLIENTID,
        domain: "vpicone.auth0.com",
        redirectUri: process.env.REDIRECT,
        responseType: "token id_token",
        scope: "openid profile",
    });

    public componentDidMount() {
        this.setState({
            user: this.getUserData(),
        });
    }

    public login = () => {
        this.authenticator.authorize();
    }

    public logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        // navigate to the home route
        navigate("/");
    }

    public handleAuthentication = () => {
        this.authenticator.parseHash((err, authResult) => {
            if (authResult && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                console.error(err); // tslint:disable-line
            }
            navigate("/");
        });
    }

    public isAuthenticated = () => {
        // Check whether the current time is past the
        // Access Token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        const now = new Date().getTime();
        return now < expiresAt;
    }

    public getUserData(): any {
        const idToken = localStorage.getItem("id_token");
        // we only really care about given_name, family_name, nickname, name, picture, gender, sub
        // and could destructure those jwt_decode(idToken) from here.
        return idToken ? jwt_decode(idToken) : {};
    }

    public render() {
        return (
            <AuthorizationContext.Provider value={{
                actions: {
                    handleAuthentication: this.handleAuthentication,
                    isAuthenticated: this.isAuthenticated,
                    login: this.login,
                    logout: this.logout,
                },
                user: this.state.user,
            }}>
                {this.props.children}
            </AuthorizationContext.Provider>
        );
    }

    protected setSession(authResult) {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
        this.setState({ user: { ...jwt_decode(authResult.idToken) } });
    }
}
