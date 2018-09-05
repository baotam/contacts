import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "./contact";

class Contacts extends Component {
  deleteContact(id) {
    this.props.onDelete(id);
  }

  viewContact(id) {
    this.props.onView(id);
  }

  render() {
    let contacts;

    if (this.props.contacts) {
      contacts = this.props.contacts.map(contact => {
        //console.log(project);
        return (
          <Contact
            key={contact.id}
            contact={contact}
            onView={this.viewContact.bind(this)}
            onDelete={this.deleteContact.bind(this)}
          />
        );
      });
    }

    return <div className="Contacts">{contacts}</div>;
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func
};

export default Contacts;
