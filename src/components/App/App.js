import React, { useState, useEffect } from 'react';
import './App';
import styles from './App.module.css';
import BurgerIngredients from '../BurgerIngredients/burgerIngredients';
import BurgerConstructor from '../BurgerConstructor/burgerConstructor';
import AppHeader from '../AppHeader/appHeader';
import { BrowserRouter } from 'react-router-dom';
import utils from "../../Utils/utils";


function App() {
  const [dataIngredient, setData] = useState({});
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (!isLoad) {
      utils
        .getIngredients()
        .then(({ data }) => {
          setData(data);
          setIsLoad(true);
        })
        .catch(console.log);
    }
  }, []);





  return (


    <main className={`${styles.page} `}>

      <BrowserRouter>
        <AppHeader />
        {isLoad && (
          < div className={styles.container} >
            <div className={styles.container_div_left}>
              <BurgerIngredients ingredients={dataIngredient} />
            </div>
            <div className={styles.container_div_left}>
              <BurgerConstructor ingredients={dataIngredient} />
            </div>
          </div>)}
      </BrowserRouter>
    </main>

  );
}

export default App;
