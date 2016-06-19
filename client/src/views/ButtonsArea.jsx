var React = require('react');
var PropTypes = React.PropTypes;
var GlobalButton = require('./GlobalButton.jsx')

var ButtonsArea = React.createClass({
  openAllClick: function() {
    this.props.openAll();
  },
  closeAllClick: function() {
    this.props.closeAll();
  },
  toggleAllClick: function() {
    this.props.toggleAll();
  },
  addClick: function() {
    this.props.add();
  },
  render: function() {
    return (
      <div className="button-area">
        <GlobalButton name="Open All" action={this.openAllClick}/>
        <GlobalButton name="Close All" action={this.closeAllClick}/>
        <GlobalButton name="Toggle All" action={this.toggleAllClick}/>
        <GlobalButton name="Add" action={this.addClick}/>
      </div>
    );
  }

});

module.exports = ButtonsArea;
