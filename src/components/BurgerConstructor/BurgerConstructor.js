import React from 'react';
import { CurrencyIcon, Button, ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { useState, useMemo } from 'react';
import { Modal } from '../Modal/Modal';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import PropTypes from 'prop-types';

function BurgerConstructor(props) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const getSumPrice = useMemo(() => {
    const total =
      props.ingredients.reduce((prevValue, currentValue) =>
        prevValue + currentValue.price

        , 0);
    return total;
  }, [props.ingredients]);

  const bunIngredients = [];
  bunIngredients.push(props.ingredients[0]);
  bunIngredients.push(...props.ingredients.filter(x => x.type !== "bun"));
  bunIngredients.push(props.ingredients[0]);


  function handleOrderClick() {
    setIsModalVisible(true);
  }

  function handleOrderClose() {
    setIsModalVisible(false);
  }

  return (
    <>
      <p className="text text_type_main-medium pt-20 pb-10"> </p>

      <div className={styles.container}>
        {bunIngredients.map((item, index) => (
          <div key={item._id} className={styles.container}>
            {item.type !== "bun" ? <div className={styles.box1} >
              <DragIcon type="primary" />
            </div> : " "}
            <div className={styles.box2}>
              <ConstructorElement
                text={item.name + (index === 0 ? '(верх)' : index === bunIngredients.length - 1 ? '(низ)' : " ")}
                price={item.price}
                thumbnail={item.image_mobile}
                isLocked={item.type === "bun" ? true : false}
              />
            </div>
          </div>
        ))}
      </div>



      <div style={{ float: 'right' }}>

        <p className="text text_type_main-default pr-4 pt-20 pb-10">

          {getSumPrice + ' '}
          <CurrencyIcon type='primary' />
          <Button htmlType="button" type="primary" size="medium" onClick={handleOrderClick}>
            Оформить заказ
          </Button>
        </p>
      </div>
      {isModalVisible &&
        <div>
          {
            <Modal header="Внимание!" onClose={handleOrderClose} >
              <OrderDetails />
            </Modal>
          }
        </div>
      }
    </>
  );

}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image_mobile: PropTypes.string.isRequired
    })
  ).isRequired
};

export default BurgerConstructor;