import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import { StaticImage } from "gatsby-plugin-image"
import CustomBtn from "../custom-btn/custom-btn.component"
import { FaBars } from "react-icons/fa"
import "./navbar.styles.scss"

class Navbar extends React.Component {
  state = {
    navbarHidden: false,
    prevScrollPos: window.pageYOffset,
    optionsHidden: true,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset

    this.setState({
      navbarHidden: currentScrollPos > this.state.prevScrollPos,
      prevScrollPos: currentScrollPos,
      optionsHidden: true,
    })
  }

  toggleOptions = () => {
    this.setState({
      optionsHidden: !this.state.optionsHidden,
    })
  }

  handleOptionClick = section => {
    this.toggleOptions()
    navigate(section)
  }

  render() {
    const { navbarHidden, optionsHidden } = this.state

    return (
      <nav
        className={`navbar-container ${!optionsHidden ? "responsive" : ""} ${
          navbarHidden ? "navbar-hidden" : ""
        }`}
      >
        <div className="icon-container">
          <Link to="/">
            <StaticImage
              className="navbar-icon"
              src="../../images/icon.png"
              alt="website icon"
              placeholder="blurred"
              layout="fixed"
              height={50}
            />
          </Link>
        </div>
        <button className="bars" onClick={this.toggleOptions}>
          {optionsHidden ? <FaBars /> : "✕"}
        </button>
        <div className="options-container">
          <button
            className="option"
            onClick={() => this.handleOptionClick("/")}
          >
            Home
          </button>
          <button
            className="option"
            onClick={() => this.handleOptionClick("#about")}
          >
            About
          </button>
          <button
            className="option"
            onClick={() => this.handleOptionClick("#skills")}
          >
            Skills
          </button>
          <button
            className="option"
            onClick={() => this.handleOptionClick("#projects")}
          >
            Projects
          </button>
          <button
            className="option"
            onClick={() => this.handleOptionClick("#contact")}
          >
            Contact
          </button>
          <CustomBtn>Resume</CustomBtn>
        </div>
      </nav>
    )
  }
}

export default Navbar
