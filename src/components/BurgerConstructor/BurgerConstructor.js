import React from 'react';
import { CurrencyIcon, Button, ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../Data/data.json';
import styles from './BurgerConstructor.module.css' ;
import {useState, useMemo}  from 'react';
import PropTypes from 'prop-types';

function  BurgerConstructor  () {
  
  const [ingredients, setIngredients] = useState(data);

  const getSumPrice  = useMemo(() => {
    
      const total = 
      ingredients.reduce((prevValue, currentValue) => 
        prevValue + currentValue.price
      
    , 0) ;
      return total;
    

  }, [ingredients]);

 
    return (
      <>
        <p className="text text_type_main-medium pt-20 pb-10"> </p>

        <div className = {styles.container }>
          {ingredients.filter((item) => item.type === "bun").map((item) => (
           <>
           <div className = {styles.box1 }>
            <DragIcon type="primary" /> 
          </div>
          <div className = {styles.box2 }>
            <ConstructorElement
                text= {item.name}
                price= {item.price}
                thumbnail={item.image_mobile}
           />  
          </div>
          
          </>

            ))}

        </div>



        <div style={{ float: 'right' }}>

          <p className="text text_type_main-default pr-4 pt-20 pb-10">

            {getSumPrice + ' '}
            <CurrencyIcon type='primary' />
            <Button htmlType="button" type="primary" size="medium">
              Оформить заказ
            </Button>
          </p>
        </div>
      </>
    );

  }
  BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }).isRequired),
}

  export default BurgerConstructor;