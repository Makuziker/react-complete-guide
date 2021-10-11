import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = (orderData, token = null) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    // BUG: firebase sometimes blocks us
    // "Invalid claim 'kid' in auth header: 'skIBNg' with iat: '1569796135'"
    axios.post(`/orders.json?auth=${token}`, orderData)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = (token = null, userId = null) => {
  return dispatch => {
    // BUG: firebase sometimes blocks us
    // "Invalid claim 'kid' in auth header: 'skIBNg' with iat: '1569796135'"
    // BUG: firebase does not parse queryParam correctly and returns ALL orders
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo"${userId}"`;
    axios.get(`/orders.json${queryParams}`)
      .then(res => {
        dispatch(fetchOrdersStart());
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
}