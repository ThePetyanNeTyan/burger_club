import React from "react";
import PropTypes from 'prop-types';
import styles from "./IngredientDetail.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function IngredientDetail(props) {


    return (
        <div>
            <div className="top">
            <span className={styles.title}>Детали ингредиента</span>
            <span className={styles.closeIcon}>
                <CloseIcon type="primary" className={styles.main_img} />
            </span>
            </div>
            
            
            <p>
                <img src={props.props.image} className={styles.image} alt={props.props.name} />
            </p>
            <p className=" text text_type_main-medium pt-4 pb-8" >
                {props.props.name}
            </p>

            <div className={styles.about + " pr-15 pl-15"} style={{ width: '500px' }}>
                <div style={{ flex: '25%' }}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Калории,ккал</p>
                    <p className="text text_type_main-default text_color_inactive">{props.props.calories}</p>
                </div>
                <div style={{ flex: '25%' }}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Белки, г</p>
                    <p className="text text_type_main-default text_color_inactive">{props.props.proteins}</p>
                </div>
                <div style={{ flex: '25%' }}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Жиры, г</p>
                    <p className="text text_type_main-default text_color_inactive">{props.props.fat}</p>
                </div>
                <div style={{ flex: '25%' }}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Углеводы, г</p>
                    <p className="text text_type_main-default text_color_inactive">{props.props.carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}
IngredientDetail.propTypes = {
    props: PropTypes.object.isRequired
}