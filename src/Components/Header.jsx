import React from 'react';
import Logo from '../assets/desktop/logo.svg?react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, setDarkMode }) => {
  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={styles.headerBg}>
      <header className={`${styles.header} container`}>
        <div>
          <Link to='/'><Logo /></Link>
        </div>
        <div>
          <button
            className={`${styles.button} ${darkMode ? styles.active : ''}`}
            onClick={handleClick}
          >
            <span></span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
