import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FriendsList from './FriendsList';

// let friends = ['John', 'Sally', 'Ron'];

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     friends: ['John', 'Sally', 'Ron'],
  //     friendName: ''
  //   };
  // }

  // updateFriendName(value) {
  //   this.setState({ friendName: value });
  // }

  // addFriend() {
  //   let { friends, friendName } = this.state;
  //   let copy = friends.slice();
  //   copy.push(friendName);
  //   this.setState({ friends: copy, friendName: '' });
  // }

  render() {
    return (
      <div>
        <Header />
        <FriendsList />
        {/* <FriendsList />
        <FriendsList /> */}
      </div>
    );
  }
}
