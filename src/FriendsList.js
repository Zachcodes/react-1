import React, { Component } from 'react';

export default class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: ['John', 'Sally', 'Ron'],
      friendName: ''
    };
  }

  updateFriendName(value) {
    this.setState({ friendName: value });
  }

  addFriend() {
    let { friends, friendName } = this.state;
    let copy = friends.slice();
    copy.push(friendName);
    this.setState({ friends: copy, friendName: '' });
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateFriendName(e.target.value)}
          value={this.state.friendName}
        />
        <button onClick={() => this.addFriend()} className="button">
          Add Friend
        </button>
        {this.state.friends.map((friend, i) => (
          <div
            key={`${friend}-${i}`}
            className={friend === 'John' ? 'best-friend' : 'friend'}
          >
            {friend}
          </div>
        ))}
      </div>
    );
  }
}
