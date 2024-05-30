import React, { useState, useEffect } from 'react';
import './App';
import styles from './App.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import AppHeader from '../AppHeader/AppHeader';
import { BrowserRouter } from 'react-router-dom';
import api from "../../Api/Api";

function App() {
  const [dataIngredient, setData] = useState({});
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (!isLoad) {
      api
        .getIngredients()
        .then(({ data }) => {
          setData(data);
          setIsLoad(true);
        })
        .catch(console.error);
    }
  }, [isLoad]);

  return (
    <BrowserRouter>
      <header>
        <AppHeader />
      </header>
      <main className={styles.page}>
        {isLoad && (
          <div className={styles.container}>
            <div className={styles.container_div_left}>
              <BurgerIngredients ingredients={dataIngredient} />
            </div>
            <div className={styles.container_div_left}>
              <BurgerConstructor ingredients={dataIngredient} />
            </div>
          </div>
        )}
      </main>
    </BrowserRouter>
  );
}

export default App;