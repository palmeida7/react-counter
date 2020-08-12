import React from 'react'
class Hidden extends React.Component {
    state = {
      person: {
        name: 'PJ',
      },
      showPerson: false
    }
    togglePersonHandler = () => {
    const isVisible = this.state.showPerson;
    this.setState({
      showPerson: !isVisible
      });
    }
    render() {
      let person = null;
      if (this.state.showPerson) {
        person = (
        <div className="personCard">
          <p>Name: {this.state.person.name}</p>
        </div>
        );
      }
      return (
        <div className="container">
          <button class="btn"
            className="btn"
            onClick={this.togglePersonHandler}>
              Toggle
          </button>
          <div>{person}</div>
        </div>
      );
    }
  }
  export default Hidden;
