var React = require('react');
var PropTypes = React.PropTypes;

var ScrollSearchList = require('./ScrollSearchList.jsx')

var App = React.createClass({
  getInitialState: function() {
    return {
      data: []
    }
  },
  fetchData: function() {
    // Fetches dummy data.
    // With a server, this would be replaced by a GET http request.
    this.setState({
      data:[
        {id:1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam pulvinar ipsum gravida congue. Donec in erat auctor, condimentum risus et, suscipit lorem. Aliquam pharetra, eros sed eleifend euismod, turpis lectus commodo elit, id maximus nibh purus sit amet massa. Nunc ornare tellus quis facilisis tempor. Proin non pellentesque dolor, ut eleifend urna. Ut pulvinar lacus non tellus ullamcorper porta. Aliquam erat volutpat. Fusce egestas velit vel dui mattis pellentesque. Aliquam congue purus eu finibus tincidunt. "},
        {id:2, text: "Integer tincidunt porttitor volutpat. Donec ac velit id leo sollicitudin porta. Donec scelerisque lacinia massa, in ornare massa feugiat ac. Mauris ac mi ultricies, facilisis augue id, rhoncus dolor. Mauris id aliquet nisi. Nam sed mattis dolor. Morbi dapibus elit eu nisi lobortis ultrices. Sed vitae ornare massa. Vivamus non tempus lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque at odio pharetra, imperdiet felis vulputate, varius lacus. Vivamus varius eros et tellus aliquam tempor. Donec placerat turpis nunc, in vestibulum leo pretium eu. Pellentesque sed dolor ut tellus hendrerit varius nec eu nulla. Duis ullamcorper condimentum ligula eu mattis. "},
        {id:3, text: "Mauris lectus diam, blandit eget turpis eu, dapibus iaculis augue. Duis volutpat ornare molestie. Proin ac nulla id mi mattis lacinia. Donec eget efficitur magna. In sit amet euismod est. Morbi rutrum laoreet elit ac gravida. Sed egestas, sem eget fringilla accumsan, tellus mi rutrum quam, at molestie tellus lorem eget nulla. "}
      ]
    })
  },
  addData: function(textToAdd) {
    // Updates dummy data.
    // With a server, this would be replaced by a POST http request.
    var newEntry = {
      id: this.state.data.length + 1,
      text: textToAdd
    };
    var newData = this.state.data;
    newData.push(newEntry);
    this.setState(
      {
        data: newData
      }
    )
  },
  componentDidMount: function() {
    this.fetchData();
  },
  render: function() {
    return (
      <div className="challenge-section">
        <div className="title">Verbling Challenge</div>
        <div className="scroll-search-list">
          <ScrollSearchList data={this.state.data} addData={this.addData}/>
        </div>
      </div>
    );
  }

});

module.exports = App;
