import React from 'react';
import PropTypes from 'prop-types';

class AddMessage extends React.Component {
  state = {
    message: ''
  };
  
  handleInputChange = event =>
    this.setState({ message: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    const { onMessage } = this.props;
    const { message } = this.state;
    onMessage(message);
  };

  isDisabled = () => this.state.message === '';

  render() {
    const { message } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="input-group">
		  <input
		    type="text"
			className="form-control"
			value={message}
			placeholder="Enter your message"
			onChange={this.handleInputChange}
		  />
		  <div className="input-group-append">
			<button className="btn submit-button" disabled={this.isDisabled()}>
			  SEND
			</button>
		  </div>
		</form>
      </div>
    );
  }
}

AddMessage.propTypes = {
  onMessage: PropTypes.func.isRequired
};

export default AddMessage;