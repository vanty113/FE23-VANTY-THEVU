import { Footer } from "../component/footer/Footer";
import { React } from 'react';
import Header from "component/header/Header";
import Slider from "component/slider/Slider";
import Categories from "component/category/Categories";


export function Layout({children}) {
    return (<>
        <Header/>
        <Slider/>
        <Categories/>
        {children}
        <Footer/>
    </>)
}