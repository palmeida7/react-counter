import React from 'react'
class Clicks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
      this.addClicked = this.addClicked.bind(this);
      this.subClicked = this.subClicked.bind(this);
      this.resetClicked = this.resetClicked.bind(this);

    }
    addClicked(event) {
      this.setState({value: this.state.value+1});
    }
    subClicked(event) {
        this.setState({value: this.state.value-1});
      }
    resetClicked(event) {
    this.setState({value: 0});
    }
    
    render() {
      return (
        <div class="buttons">
        <hr></hr>
          <div class="counted">{this.state.value}</div>
          <button class="btn" onClick={this.addClicked}>Add</button>
          <button class="btn" onClick={this.subClicked}>Subtract</button>
          <button class="btn" onClick={this.resetClicked}>Reset</button>
        </div>
      );
    }
  }
  export default Clicks;