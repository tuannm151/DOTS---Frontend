import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ADMIN_API_KEY, BASE_URL, USER_API_KEY } from "./constant";
import {store} from '../redux/store'


export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
}


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers:{
   'Authorization':`Bearer ${USER_API_KEY}`
  }
})
export const adminRequest = axios.create({
  baseURL: BASE_URL,
  headers:{
    'Authorization':`Bearer ${ADMIN_API_KEY}`
  }
})

export const formatCurrencies = (price) => {
  const currency = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  return currency;
}

