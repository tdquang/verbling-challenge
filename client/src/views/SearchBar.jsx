var React = require('react');
var PropTypes = React.PropTypes;

var SearchBar = React.createClass({
  handleSearch: function() {
    this.props.handleSearch(this.refs.SearchBar.value);
  },
  render: function() {
    return (
      <input
        type="text"
        placeholder="Search"
        id="search-bar"
        onChange={this.handleSearch}
        ref="SearchBar"
        />
    );
  }

});

module.exports = SearchBar;
