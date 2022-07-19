import { Layout } from 'layout/Layout';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductAction } from 'stores/slices/product.slice';
import BestSellersProduct from './components/BestSellersProduct';
import RecommenedProduct from './components/RecommenedProduct';

export default function HomePage() {
    const productState = useSelector((state) => state.product.productState);
    const dispatch = useDispatch();
    const bestSellerProduct = productState.data.slice(10,20);
    const recommenedProduct = productState.data.slice(0,10);
    console.log("productState", productState);
    // console.log("bestSellerProduct", bestSellerProduct);
    // console.log("recommenedProduct", recommenedProduct);
    // const page = productState.pagination.page;
    // const total = productState.pagination.total;
    // const loading = productState.loading;
    useEffect(() => {
        dispatch(fetchProductAction(2));
      }, [dispatch]);
    // const onPaginationChange = (page, pageSize) => {
    //   dispatch(fetchProductAction(page));
    // };
    return (<>
        <Layout>
            <RecommenedProduct recommenedProduct={recommenedProduct}/>
            <BestSellersProduct bestSellerProduct={bestSellerProduct} />
        </Layout>
    </>)
}