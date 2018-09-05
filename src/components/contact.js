import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  deleteContact(id) {
    this.props.onDelete(id);
  }

  viewContact(id) {
    this.props.onView(id);
  }

  render() {
    return (
      <li className="Contact">
        <strong>
          {this.props.contact.firstName} {this.props.contact.lastName}
        </strong>{" "}
        <a
          href="#"
          onClick={this.viewContact.bind(this, this.props.contact.id)}
        >
          [View]
        </a>{" "}
        <a
          href="#"
          onClick={this.deleteContact.bind(this, this.props.contact.id)}
        >
          [Delete]
        </a>
      </li>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
  onView: PropTypes.func
};

export default Contact;
