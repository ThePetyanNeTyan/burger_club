import React from 'react';
import { CurrencyIcon, Button, ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { useState, useMemo } from 'react';
import { Modal } from '../Modal/Modal';
import { OrderDetails } from '../OrderDetails/OrderDetails';

function BurgerConstructor(props) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const getSumPrice = useMemo(() => {
    const total =
      props.ingredients.reduce((prevValue, currentValue) =>
        prevValue + currentValue.price

        , 0);
    return total;
  }, [props.ingredients]);


  const bunIngredients = useMemo(() => {
    return props.ingredients.filter((item) => item.type === 'bun');
  }, [props.ingredients]);


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
            <div className={styles.box1} >
              <DragIcon type="primary" />
            </div>
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
        <div style={{ overflow: 'hidden' }}>
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

export default BurgerConstructor;