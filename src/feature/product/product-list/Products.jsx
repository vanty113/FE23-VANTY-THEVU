import styled from "styled-components";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction, PRODUCT_LIMIT } from "stores/slices/product.slice";
import BoxProduct from "./BoxProduct";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const productState = useSelector(state => state.products.productState);
  // console.log(productState);
  const dispatch = useDispatch();

  const page = productState.pagination.page;
  const total = productState.pagination.total;
  console.log(page);

  useEffect(() => {
    // Dispatch action gọi product từ server => Slice => action
    // Nếu có saga đang theo dõi action này thì hàm tương ứng trong saga sẽ chạy => fetchProduct
    dispatch(fetchProductAction(1));
  }, []);

  const onPaginationChange = (page, pageSize) => {
    dispatch(fetchProductAction(page));
  };

  return (
    <Container>
      {productState.data.map((item) => (
        <BoxProduct data={item} key={item.id} />
      ))}
      {/* <Pagination
        onChange={onPaginationChange}
        pageSize={20}
        current={page}
        total={total}
      /> */}
      <Stack>
        <Pagination 
          onChange={onPaginationChange}
          pageSize={20}
          count={page}
          total={total} />
      </Stack>
    </Container>
  );
};

export default Products;
