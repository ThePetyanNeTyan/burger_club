import React from 'react';
import {Tab}  from '@ya.praktikum/react-developer-burger-ui-components';
import data from  '../../Data/data.json';
import { CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css' ;
import imageSelected from '../../images/selected.jpg';
import {useState, useMemo}  from 'react';
import PropTypes from 'prop-types';

function BurgerIngredients () {

const [ingredients, setIngredients] = useState(data);


  const bunIngredients  = useMemo(() => {
    return ingredients.filter((item) => item.type === "bun");
}, [ingredients]);

const sauceIngredients  = useMemo(() => {
  return ingredients.filter((item) => item.type === "sauce");
}, [ingredients]);

const mainIngredients  = useMemo(() => {
  return ingredients.filter((item) => item.type === "main");
}, [ingredients]);
    
    return (
      <>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
                <Tab value="bun"  >
                    Булки
                </Tab>
                <Tab value="sauce"  >
                    Соусы
                </Tab>
                <Tab value="main" >
                    Начинки
                </Tab>
      </div>

      
<div className={styles.container }>    
<>  
      <p className="text text_type_main-medium pr-1">Булки</p>
      
       {bunIngredients.map((item) => (
        <div className={styles.container_div_left}>
          <div >
            <div className={styles.display_selected}>
                <img src={imageSelected} />
            </div>
              
              <img src={item.image}  />
              <div >
                  <p className="text text_type_main-default pr-1 m-1 p-1">{item.price + " "}
                    <CurrencyIcon type='primary' />
                  </p>
              </div>
                <div >
                  <p className="text text_type_main-default pr-1">{item.name}</p>
                </div>
              </div>
         </div>
         ))}
</>


<>
      <p className="text text_type_main-medium pr-1">Соусы</p>

          {sauceIngredients.map((item) => (
              <div className={styles.container_div_left }>
                <div>
                  <img src={item.image}  />
                  <div >
                    <p className="text text_type_main-default pr-1">{item.price + " "}
                      <CurrencyIcon type='primary' />
                    </p>
                  </div>
                  <div >
                    <p className="text text_type_main-default pr-1">{item.name}</p>
                  </div>

              </div>
            </div>
            ))}  
 </>


 <>    
     <p className="text text_type_main-medium pr-1">Начинка</p>   
   
        {mainIngredients.map((item) => (
               <div className={styles.container_div_left }>
               <div>
                 <img src={item.image}  />
                 <div >
                   <p className="text text_type_main-default pr-1">{item.price + " "}
                     <CurrencyIcon type='primary' />
                   </p>
                 </div>
                 <div >
                   <p className="text text_type_main-default pr-1">{item.name}</p>
                 </div>

             </div>
           </div>
            ))}
</>
</div>
       </>
    );
  }

  BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object.isRequired)
  }


export default BurgerIngredients; 