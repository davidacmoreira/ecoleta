import React, { useContext } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';
import logoDark from '../../assets/logo-dark.svg';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

interface Props {
  toggleTheme(): void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={title === 'light' ? logo : logoDark} alt="ecoleta"/>

          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}
            offHandleColor='#333'
            onHandleColor='#fff'
          />
        </header>

        <main>
          <h1>marketplace for waste collection</h1>
          <p>help people find a waste collection point</p>

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
