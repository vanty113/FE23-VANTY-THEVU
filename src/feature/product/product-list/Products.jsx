import { LoadingOutlined } from "@ant-design/icons";
import { Pagination } from 'antd';
import { AppLayout } from "layout/AppLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductAction, PRODUCT_LIMIT } from "stores/slices/product.slice";
import styled from "styled-components";
import BoxProduct from "./BoxProduct";


const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const AllProducts = () => {
  const productState = useSelector(state => state.product.productState);
  const dispatch = useDispatch();

  const page = productState.pagination.page;
  const total = productState.pagination.total;
  const loading = productState.loading;

  useEffect(() => {
    dispatch(fetchProductAction(1));
  }, [dispatch]);

  const onPaginationChange = (page, pageSize) => {
    dispatch(fetchProductAction(page));
  };

  return (<AppLayout>
    {loading ? <div> <LoadingOutlined style={{ fontSize: '30px', marginTop: '20px' }} /> </div>
      : <Container>
        {productState.data.map(item => (
          <Link to={`/products-detail/${item.id}`} key={item.id} style={{ marginBottom: "10px" }}>
            <BoxProduct data={item} />
          </Link>
        ))}
        <Pagination
          onChange={onPaginationChange}
          pageSize={PRODUCT_LIMIT}
          current={page}
          total={total}
        />
      </Container>
    }
  </AppLayout>);
};

export default AllProducts;
