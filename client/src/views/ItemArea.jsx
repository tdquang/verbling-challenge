var React = require('react');
var PropTypes = React.PropTypes;
var Item = require('./Item.jsx');

var ItemArea = React.createClass({
  getInitialState: function() {
    return {
      textToFilter: ""
    }
  },
  openAll: function() {
    for (var item in this.refs){
      this.refs[item].expand();
    }
  },
  closeAll: function() {
    for (var item in this.refs){
      this.refs[item].collapse();
    }
  },
  toggleAll: function() {
    for (var item in this.refs){
      this.refs[item].toggleCollapseExpand();
    }
  },
  filterData: function(text) {
    this.setState({
      textToFilter: text
    })
  },
  render: function() {
    var self = this;
    var itemNodes = this.props.data.map(function(item) {
      if (item.text.search(self.state.textToFilter) != -1) {
        return (
          <Item key={item.id} ref={item.id} text={item.text} />
        );
      }
    });
    return (
      <div className="item-area">
        {itemNodes}
      </div>
    );
  }

});

module.exports = ItemArea;
