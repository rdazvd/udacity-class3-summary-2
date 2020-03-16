import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: []
  };

  onNewMessage = (username, text) => {
    const newMessage = {
      username,
      text
    };
    this.setState(currentState => ({
      messages: currentState.messages.concat([newMessage])
    }));
  };

  isDisabled = () => {
    return false;
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
		  {users.map(user => (
            <ChatWindow
              key={user.username}
              user={user}
              messages={messages}
              onMessage={this.onNewMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
