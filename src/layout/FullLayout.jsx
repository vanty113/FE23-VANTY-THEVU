import Categories from "component/category/Categories";
import Header from "component/header/Header";
import Slider from "component/slider/Slider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getListCartAction } from "stores/slices/cart.slice";
import { Footer } from "../component/footer/Footer";


export function FullLayout({ children }) {
    const dispatch = useDispatch();
    const location = useLocation()

    useEffect(() => {
        const checkLogin = localStorage.getItem('USER_INFO')
        if (checkLogin) dispatch(getListCartAction())
    }, [dispatch, location.pathname]);
    return (<>
        <Header />
        <Slider />
        <Categories />
        {children}
        <Footer />
    </>)
}