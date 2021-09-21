import React, { useState } from "react"
import { navigate } from "gatsby-link"

import CustomBtn from "../../custom-btn/custom-btn.component"

import "./contact.styles.scss"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    botField: "",
  })

  const setLabelClassName = state => {
    return `${state.length ? "shrink" : ""} form-input-label`
  }

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => alert("Thank you for reaching out to me :)"))
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <section className="contact-section-container" id="contact">
      <div className="contact-content-container">
        <h1 className="title">Let's Talk</h1>
        <form
          className="contact-form"
          name="contact"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="botField"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Spam Prevention */}
          <div hidden>
            <label>
              Don’t fill this out if you’re human:
              <input name="botField" onChange={handleChange} />
            </label>
          </div>
          <div className="group">
            <input
              id="name"
              className="form-input"
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
            <label className={setLabelClassName(state.name)} htmlFor="name">
              Name
            </label>
          </div>
          <div className="group">
            <input
              id="email"
              className="form-input"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <label className={setLabelClassName(state.email)} htmlFor="email">
              Email
            </label>
          </div>
          <div className="group">
            <textarea
              id="message"
              className="form-input textarea"
              name="message"
              rows="5"
              value={state.message}
              onChange={handleChange}
              required
            />
            <label
              className={setLabelClassName(state.message)}
              htmlFor="message"
            >
              Message
            </label>
          </div>
          <CustomBtn type="submit">GET IN TOUCH</CustomBtn>
        </form>
      </div>
    </section>
  )
}

export default Contact
