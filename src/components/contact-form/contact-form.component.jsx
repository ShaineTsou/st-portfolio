import React from "react"

import FormInput from "../form-input/form-input.component"
import CustomBtn from "../custom-btn/custom-btn.component"

import "./contact-form.styles.scss"

class ContactForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }

  // handleSubmit = async event => {
  //   event.preventDefault()

  //   const { name, email, message } = this.state

  //   this.setState({
  //     name: "",
  //     email: "",
  //     message: ""
  //   })
  // }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { name, email, message } = this.state
    return (
      <div className="contact-content-container">
        <h1 className="title">Let's Talk</h1>
        <span>Start by clicking on 'Name'</span>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="text"
            name="message"
            value={message}
            onChange={this.handleChange}
            label="Your Message"
            required
          />
          <CustomBtn type="submit">GET IN TOUCH</CustomBtn>
        </form>
      </div>
    )
  }
}

export default ContactForm
