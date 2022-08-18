import { Footer } from "component/footer/Footer";
import Header from "component/header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListCartAction } from "stores/slices/cart.slice";

export function AppLayout({ children }) {
    const dispatch = useDispatch();
    // const location = useLocation();
    // const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = localStorage.getItem('USER_INFO')
        if (checkLogin) dispatch(getListCartAction())
    }, [dispatch]);

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}