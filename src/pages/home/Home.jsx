import React from 'react';

import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  document.title= "Portfolio Website - Home"
  return (
    <section className='home section grid'>
      <img src="https://kartinkin.net/pics/uploads/posts/2022-07/1656714529_54-kartinkin-net-p-kot-v-delovom-kostyume-art-krasivo-63.jpg" alt='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Ro'zimuhammad</span> Web Developer
          </h1>

          <p className='home__description'>
            I'm a Uzbek based front-end developer focused on
            crafting clean & user-friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>

          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
