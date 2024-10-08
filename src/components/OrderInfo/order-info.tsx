import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import styles from "./order-info.module.css";
import cn from "classnames";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IOrder } from "../types/ingredient-types";
import { API, ORDER_STATUS, WEBSOCKET_API } from "../utils/constants";
import { RootState } from "../services/store/store";
import { wsOrdersConnect, wsOrdersDisconnect } from "../services/slices/feed-orders/feed-orders";

export const OrderInfo: FC = () => {
    const { number } = useParams<{ number: string }>();
    const dispatch = useDispatch();
    const feedOrder = useSelector((state: RootState) => state.feedOrders.orders);
    const userOrder = useSelector((state: RootState) => state.userOrders.orders);
    const ingredients = useSelector((state: RootState) => state.ingredients.ingredients);
    const wsConnected = useSelector((state: RootState) => state.feedOrders.wsConnected);

    const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null);

    useEffect(() => {
        if (!number) {
            return;
        }

        dispatch(wsOrdersConnect(WEBSOCKET_API.baseUrl + WEBSOCKET_API.endpoints.allOrders));

        return () => {
            dispatch(wsOrdersDisconnect());
        };
    }, [number, dispatch]);

    const orders = [...userOrder, ...feedOrder];
    const order = orders.find((item) => item._id === number) || currentOrder;
    if (!order) {
        return <p className="text text_type_main-default">Загрузка...</p>;
    }

    const ingredientsMap = new Map<string, { price: number; count: number }>();

    order.ingredients.forEach((item: string) => {
        const ingredient = ingredients.find(
            (ingredient) => ingredient._id === item
        );
        if (ingredient) {
            const current = ingredientsMap.get(item) || {
                price: ingredient.price,
                count: 0,
            };
            ingredientsMap.set(item, {
                price: current.price,
                count: current.count + 1,
            });
        }
    });

    const ingredientsWithoutRepeat = Array.from(ingredientsMap.entries()).map(
        ([id, { price, count }]) => ({
            _id: id,
            price,
            count,
            name: ingredients.find((ingredient) => ingredient._id === id)?.name || "",
            image_mobile:
                ingredients.find((ingredient) => ingredient._id === id)?.image_mobile ||
                "",
        })
    );

    const totalPrice = Array.from(ingredientsMap.values()).reduce(
        (sum, { price, count }) => sum + price * count,
        0
    );

    return (
        <div className={styles.orderInfo}>
            <div className={styles.infoHeading}>
                <p className="text text_type_digits-default">{`#${order.number}`}</p>
                <h2 className="text text_type_main-medium">{order.name}</h2>
                <p
                    className={cn("text text_type_main-default", {
                        [styles.done]: order.status === "done",
                    })}
                >
                    {ORDER_STATUS[order.status]}
                </p>
                <h3 className="text text_type_main-medium">Состав:</h3>
            </div>
            <div className={styles.orderStructure}>
                {ingredientsWithoutRepeat.map((ingredient) => (
                    <div key={ingredient._id} className={styles.structureItem}>
                        <div className={styles.ingredientIcon}>
                            <img
                                className={styles.ingredientImage}
                                src={ingredient.image_mobile}
                                alt="Иконка ингредиента"
                            />
                        </div>
                        <p className={styles.itemName}>{ingredient.name}</p>
                        <div className={styles.itemPrice}>
                            <span className="text text_type_digits-default">{`${ingredient.count} x ${ingredient.price}`}</span>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.footer}>
                <FormattedDate
                    className="text text_type_main-default text_color_inactive"
                    date={new Date(order.createdAt)}
                />
                <div className={styles.price}>
                    <span className="text text_type_digits-default">{totalPrice}</span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
};