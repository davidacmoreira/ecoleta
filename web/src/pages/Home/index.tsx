import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="ecoleta"/>
        </header>

        <main>
          <h1>your marketplace of waste collection</h1>
          <p>help people to find your waste collection point</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>register point</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
