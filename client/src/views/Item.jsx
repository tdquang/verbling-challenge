var React = require('react');
var PropTypes = React.PropTypes;
var TextTruncate = require('react-text-truncate');

var Item = React.createClass({
  getInitialState: function() {
    return {
      collapsed: true
    }
  },
  collapse: function() {
    this.setState({collapsed: true});
  },
  expand: function() {
    this.setState({collapsed: false});
  },
  toggleCollapseExpand: function() {
    if (this.state.collapsed){
      this.setState({collapsed: false});
    }else{
      this.setState({collapsed: true});
    }
  },
  render: function() {
    var numOfLinesToShow;
    if (this.state.collapsed){
      numOfLinesToShow = 1;
    }else{
      numOfLinesToShow = Infinity;
    }
    return (
      <div className="list-item" onClick={this.toggleCollapseExpand}>
        <TextTruncate
          line={numOfLinesToShow}
          truncateText="…"
          text={this.props.text}
          showTitle={true}
          raf={true}
          />
        <div className={this.state.collapsed? "downarrow-icon":"uparrow-icon"} />
      </div>
    );
  }

});

module.exports = Item;
