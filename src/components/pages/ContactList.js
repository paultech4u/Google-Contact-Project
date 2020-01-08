import React, { Component } from "react";
import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import classes from "./ContactList.module.css";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Persons: [],
      name: 'Paul'
    };
  }
  componentDidMount() {
    const users = {
       name: this.state.name
    }
    axios.get(`https://jsonplaceholder.typicode.com/users`, { users })
     .then((res) => {
      const Persons = res.data;
      console.log(Persons)
      this.setState({ Persons });
    });
  }
  render() {
    return (
      <div className={classes.contactlist}>
        <div className={classes.list}>
          <div className={classes.Avatar}>
            <Avatar style={{ background: "green" }}>P</Avatar>
          </div>
          <div className={classes.name}>
            {this.state.Persons.map((person) => <span key={person.name}>{person.name}</span>).slice(1, 2)}
          </div>
          <div className={classes.email}>
           {this.state.Persons.map((person) => <span key={person.name}>{person.email}</span>).slice(1, 2)}
          </div>
          <div className={classes.number}>
          {this.state.Persons.map((person) => <span key={person.name}>{person.phone}</span>).slice(1, 2)}
          </div>
          <div className={classes.title}></div>
        </div>
      </div>
    );
  }
}

export default ContactList;
