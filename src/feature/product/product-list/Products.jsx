import styled from "styled-components";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction, PRODUCT_LIMIT } from "stores/slices/product.slice";
import BoxProduct from "./BoxProduct";
import { AppLayout } from "layout/AppLayout";
import { Pagination } from 'antd';
import { LoadingOutlined } from "@ant-design/icons";


const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const AllProducts = () => {
  const productState = useSelector(state => state.product.productState);
  // console.log(productState);
  const dispatch = useDispatch();

  const page = productState.pagination.page;
  const total = productState.pagination.total;
  const loading = productState.loading;

  useEffect(() => {
    // Dispatch action gọi product từ server => Slice => action
    // Nếu có saga đang theo dõi action này thì hàm tương ứng trong saga sẽ chạy => fetchProduct
    dispatch(fetchProductAction(1));
  }, [dispatch]);

  const onPaginationChange = (page, pageSize) => {
    dispatch(fetchProductAction(page));
  };

  return (<AppLayout>
    {loading ? <div> <LoadingOutlined style={{ fontSize: '30px', marginTop: '20px' }} /> </div>
      : <>
        <Container>
          {productState.data.map((item) => (
            <BoxProduct data={item} key={item.id} />
          ))}
        </Container>
        <Pagination
          onChange={onPaginationChange}
          pageSize={PRODUCT_LIMIT}
          current={page}
          total={total}
        />
      </>
    }

  </AppLayout>);
};

export default AllProducts;
