import React from 'react';
import Logo from '../assets/desktop/logo.svg?react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerBg}>
      <header className={`${styles.header} container`}>
        <div>
          <Logo />
        </div>
        <div>
          <button className={styles.button}>
            <span></span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
