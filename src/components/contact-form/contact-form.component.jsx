import React from "react"

import CustomBtn from "../custom-btn/custom-btn.component"

import "./contact-form.styles.scss"

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  setLabelClassName(state) {
    return `${state.length ? "shrink" : ""} form-input-label`
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    const { name, email, message } = this.state
    event.preventDefault()

    alert(`name: ${name}, email: ${email}, message: ${message}`)
  }

  render() {
    const { name, email, message } = this.state

    return (
      <div className="contact-content-container">
        <h1 className="title">Let's Talk</h1>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <div className="group">
            <input
              id="name"
              className="form-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label className={this.setLabelClassName(name)} htmlFor="name">
              Name
            </label>
          </div>
          <div className="group">
            <input
              id="email"
              className="form-input"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label className={this.setLabelClassName(email)} htmlFor="email">
              Email
            </label>
          </div>
          <div className="group">
            <textarea
              id="message"
              className="form-input textarea"
              name="message"
              rows="6"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />
            <label
              className={this.setLabelClassName(message)}
              htmlFor="message"
            >
              Message
            </label>
          </div>
          <CustomBtn type="submit">GET IN TOUCH</CustomBtn>
        </form>
      </div>
    )
  }
}

export default ContactForm
