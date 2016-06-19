var React = require('react');
var PropTypes = React.PropTypes;

var SearchBar = require('./SearchBar.jsx');
var ItemArea = require('./ItemArea.jsx');
var ButtonsArea = require('./ButtonsArea.jsx');



var ScrollSearchList = React.createClass({
  openAll: function() {
    this.refs.ItemArea.openAll();
  },
  closeAll: function() {
    this.refs.ItemArea.closeAll();
  },
  toggleAll: function() {
    this.refs.ItemArea.toggleAll();
  },
  add: function() {
    var newItem = prompt("Please Enter a New Entry");
    this.props.addData(newItem);
  },
  handleSearch: function(textToFilter) {
    this.refs.ItemArea.filterData(textToFilter);
  },
  render: function() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch}/>
        <ItemArea
          data={this.props.data}
          ref="ItemArea"
          />
        <ButtonsArea
          openAll={this.openAll}
          closeAll={this.closeAll}
          toggleAll={this.toggleAll}
          add={this.add}
          />
      </div>
    );
  }

});

module.exports = ScrollSearchList;
