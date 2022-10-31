import { LoadingOutlined } from "@ant-design/icons";
import { Pagination } from 'antd';
import { AppLayout } from "layout/AppLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductAction, PRODUCT_LIMIT } from "stores/slices/product.slice";
import styled from "styled-components";
import BoxProduct from "./BoxProduct";


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ContainerProduct = styled.div`
  margin-top: 125px;
  display: block;
`;

const AllProducts = () => {
  const productState = useSelector(state => state.product.productState);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const page = productState.pagination.page;
  const total = productState.pagination.total;
  const loading = productState.loading;
  const data = productState.data;
  const [sortData, setSortData] = useState(data);

  useEffect(() => {
    setSortData(data);
  }, [data]);

  useEffect(() => {
    dispatch(fetchProductAction(currentPage));
  }, [dispatch, currentPage]);

  const onPaginationChange = (page) => {
    setCurrentPage(page);
  };

  const SortHighToLow = () => {
    const array = data.slice().sort((a, b) => b.price - a.price);
    setSortData(array);
  }

  const SortLowToHigh = () => {
    const array = data.slice().sort((a, b) => a.price - b.price);
    setSortData(array);
  }

  return (<AppLayout>
    <ContainerProduct> </ContainerProduct>
    <button onClick={SortHighToLow}>Sort Price High To Low</button>
    <button onClick={SortLowToHigh}>Sort Price Low To High</button>
    <button onClick={SortLowToHigh}>adidas</button>
    {loading ? <div> <LoadingOutlined style={{ fontSize: '30px', marginTop: '20px' }} /> </div>
      : <Container>
        {sortData.map(item => (
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
