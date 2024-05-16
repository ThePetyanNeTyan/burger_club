import React from 'react';
import logo from './logo.svg';
import './App';
import styles from './App.module.css';
import BurgerIngredients  from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor  from './components/BurgerConstructor/BurgerConstructor';
import AppHeader from './components/AppHeader/AppHeader';

import {BrowserRouter} from 'react-router-dom';


function App() {
  return (

  <main className={`${styles.page} `}>
    <BrowserRouter>
    <AppHeader/>
      
      < div className={styles.container} >
          <div className={styles.container_div_left}>
            <BurgerIngredients />
          </div>
          <div className={styles.container_div_right}>
            <BurgerConstructor  />
          </div>
      
      </div>
    </BrowserRouter>
  </main>

    
  );
}

export default App;