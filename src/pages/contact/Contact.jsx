import React, { useEffect, useState } from 'react';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';

import './contact.css';

const Contact = () => {
  document.title= "Portfolio Website - Contact me"
  const [name, setName] = useState("")
  const [eamil, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [text, setText] = useState("")




  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In <span>Touch</span>
      </h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be Shy !</h3>

          <p className='contact__description'>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>karimovdev01@gmail.com</h4>
              </div>
            </div>

            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>+998982709877</h4>
              </div>
            </div>
          </div>

          <div className='contact__socials'>
            <a href='https://facebook.com' className='contact__social-link'>
              <FaFacebookF />
            </a>

            <a href='https://twitter.com' className='contact__social-link'>
              <FaTwitter />
            </a>

            <a href='https://youtube.com' className='contact__social-link'>
              <FaYoutube />
            </a>

            <a href='https://dribbble.com' className='contact__social-link'>
              <FaDribbble />
            </a>
          </div>
        </div>

        <form className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input
                type='text'
                placeholder='Your Name'
                className='form__control'
                onChange={(e)=>{
                  setName(e.target.value)
                }}
                required
              />
            </div>

            <div className='form__input-div'>
              <input
              required
                type='email'
                placeholder='Your Email'
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                className='form__control'

              />
            </div>

            <div className='form__input-div'>
              <input
              required
                type='text'
                placeholder='Your Number'
                onChange={(e)=>{
                  setNumber(e.target.value)
                }}
                className='form__control'
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea
            required
              placeholder='Your Message'
              onChange={(e)=>{
                setText(e.target.value)
              }}
              className='form__control textarea'
            ></textarea>
          </div>

          <button className='button'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
