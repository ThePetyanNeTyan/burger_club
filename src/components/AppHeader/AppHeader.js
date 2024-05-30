import React, { useState } from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={styles.menu_up}>
          <li className={styles.menu_up_punkt}>
            <NavLink
              className={styles.link}
              to='/'
              exact
            >
              <>
                <BurgerIcon type="primary" />
                <p className="p-1"></p>
                <p className="text text_type_main-default">Конструктор</p>
              </>
            </NavLink>
          </li>
          <li className={styles.menu_up_punkt}>
            <NavLink
              className={styles.link}
              to='/'
              exact
            >
              <>
                <ListIcon type="primary" />
                <p className="p-1"></p>
                <p className="text text_type_main-default">Лента заказов</p>
              </>
            </NavLink>
          </li>
          <li className={styles.menu_up_punkt}>
            <NavLink to='/' className={styles.link}>
              <Logo />
            </NavLink>
          </li>
          <li className={styles.menu_up_punkt}>
            <NavLink
              className={styles.link}
              to='/'
              exact
            >
              <>
                <ProfileIcon type="primary" />
                <p className="p-1"></p>
                <p className="text text_type_main-default">
                  Личный кабинет
                </p>
              </>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
