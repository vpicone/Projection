import React, { Component } from 'react';
import Layout from './Layout';
import Json from '../components/Json';

export default class Home extends Component {
  render() {
    const {user} = this.props;
    return (
      <Layout>
        <h2>Hello {user.given_name}!!</h2>
        <img src={user.picture} style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
        <Json>{user}</Json>
      </Layout>
    );
  }
}
