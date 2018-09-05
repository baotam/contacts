import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      newContact: {}
    };
  }
  static defaultProps = {
    occupations: ["Engineer", "Law Enforcement", "Retail Clerk"]
  };

  handleSubmit(e) {
    if (this.refs.firstName.value === "") {
      alert("First Name is missing");
    } else if (this.refs.lastName.value === "") {
      alert("Last Name is missing");
    } else {
      this.setState(
        {
          newContact: {
            id: uuid.v4(),
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value,
            phoneNumber: this.refs.phoneNumber.value,
            occupation: this.refs.occupation.value
          }
        },
        function() {
          this.props.addContact(this.state.newContact);
        }
      );
    }
    e.preventDefault();
  }

  render() {
    let occupations = this.props.occupations.map(occupation => {
      return (
        <option key={occupation} value={occupation}>
          {occupation}
        </option>
      );
    });

    return (
      <div>
        <h3>Add New Contact</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>First Name</label>
            <br />
            <input type="text" ref="firstName" />
          </div>
          <br />
          <div>
            <label>Last Name</label>
            <br />
            <input type="text" ref="lastName" />
          </div>
          <br />
          <div>
            <label>Email</label>
            <br />
            <input type="text" ref="email" />
          </div>
          <br />
          <div>
            <label>Phone Number</label>
            <br />
            <input type="text" ref="phoneNumber" />
          </div>
          <br />
          <div>
            <label>Occupation</label>
            <br />
            <select ref="occupation">{occupations}</select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
      </div>
    );
  }
}

AddContact.propTypes = {
  occupations: PropTypes.array,
  addContact: PropTypes.func
};

export default AddContact;
