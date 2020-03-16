import React from 'react';
import PropTypes from 'prop-types';

import AddMessage from './AddMessage';
import MessageHistory from './MessageHistory';

class ChatWindow extends React.Component {
  onMessage = message => {
    const { onMessage, user } = this.props;
    onMessage(user.username, message);
  };

  render() {
    const { messages, user } = this.props;

    return (
      <div className="class-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
		<MessageHistory messages={messages} user={user} />
		<AddMessage onMessage={this.onMessage} />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  onMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired
};

export default ChatWindow;