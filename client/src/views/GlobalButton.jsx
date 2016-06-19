var React = require('react');
var PropTypes = React.PropTypes;

var GlobalButton = React.createClass({
  handleClick: function() {
    this.props.action();
  },
  render: function() {
    return (
      <div className="global-button" onClick={this.handleClick}>
        {this.props.name}
      </div>
    );
  }

});

module.exports = GlobalButton;
