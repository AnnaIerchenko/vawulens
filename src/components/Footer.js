import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo"/>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptate obcaecati officia vel provident vitae vero molestiae ut, qui sunt minus facilis et saepe possimus, nesciunt excepturi distinctio deserunt exercitationem?
          </p>
          <div className="footer__socials">
            <a href='https://linkedin.com' target="_blank" rel="noreferrer noopener">
              <FaLinkedin />
            </a>
            <a href='https://linkedin.com' target="_blank" rel="noreferrer noopener">
              <FaFacebookF />
            </a>
            <a href='https://linkedin.com' target="_blank" rel="noreferrer noopener">
              <AiOutlineTwitter />
            </a>
            <a href='https://linkedin.com' target="_blank" rel="noreferrer noopener">
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/plans">Case Studies</Link>
          <Link to="/trainers">Events</Link>
          <Link to="/gallery">Communities</Link>
          <Link to="/contact">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/plans">Support</Link>
        </article>
     
      </div>
      <div className="footer__copyright">
        <small>2022, Anna Ierchenko &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer