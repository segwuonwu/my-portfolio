import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://linkedin.com/in/solomonegwuonwu" target="noopener"  className="icon fa-linkedin">
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/segwuonwu" target="noopener"  className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/solomonE?s=09" target="noopener"  className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="mailto:segwuonwu@gmail.com" target="noopener"  className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy;2020 Created by Solomon Egwuonwu</li>
      </ul>
    </div>
  </div>
)

export default Footer
