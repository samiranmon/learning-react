import React from "react";

export default class UserList extends React.Component {


  constructor(props) {
    super(props);

    this.state = {person: [],
    error:null
    };
  }

  componentDidMount() {
      this.UserList();
  }

  UserList() {
    
    /* fetch('https://randomuser.me/api/')
          .then(({ results }) => this.setState({ person: results })); */

          fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            error: false,
            person: result.results
          });
          console.log(result);

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error: true,
            
          });
        }
      )
 
  }

  render() {
    if(this.state.person) {
    const persons = this.state.person.map((item, i) => (
      <div>
        <h1>{ item.name.first }</h1>
        <span>{ item.cell }, { item.email }</span>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ persons }</div>
      </div>
    );
    }
  }
}