import React, { Component } from "react";
import uuid from "uuid";
import $ from "jquery";
import "./App.css";
import ContactList from "./data/mockcontacts";
import Contacts from "./components/contactlist";
import AddContact from "./components/addcontact";
import ViewContact from "./components/viewcontact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }

  getContacts() {
    this.setState({ contacts: ContactList }, () => console.log(this.contacts));

    // $.ajax({
    //   url: "mockcontacts.json",
    //   dataType: "json",
    //   cache: false,
    //   success: function(data) {
    //     this.setState({ contacts: data }, () => console.log(this.contacts));
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.log(err);
    //   }
    // });
  }

  componentWillMount() {
    this.getContacts();
  }

  componentDidMount() {
    this.getContacts();
  }

  handleAddContact(contact) {
    let contacts = this.state.contacts;

    contacts.push(contact);
    this.setState({ contacts });
  }

  handleDeleteContact(id) {
    let contacts = this.state.contacts;
    let index = contacts.findIndex(i => i.id === id);
    contacts.splice(index, 1);
    this.setState({ contacts });
  }

  handleViewContact(id) {
    let contacts = this.state.contacts;
    let index = contacts.findIndex(i => i.id === id);
    contacts.splice(index, 1);
    ViewContact.showDetails(contacts);
  }

  render() {
    return (
      <div className="App">
        <AddContact addContact={this.handleAddContact.bind(this)} />
        <br />
        <h3>Available Contacts</h3>
        <Contacts
          contacts={this.state.contacts}
          onView={this.handleViewContact.bind(this)}
          onDelete={this.handleDeleteContact.bind(this)}
        />
      </div>
    );
  }
}

export default App;
