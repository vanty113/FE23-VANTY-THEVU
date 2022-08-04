import { LoadingOutlined } from "@ant-design/icons";
import { AppLayout } from "layout/AppLayout";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BoxProduct from "../product-list/BoxProduct";

const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const EmptySearch = styled.div`
    color: #000;
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
`
export default function ProductSearch() {
    const productState = useSelector(state => state.product.productState);
    console.log("productState:", productState.data.length);
    const loading = productState.loading;
    const dataLength = productState.data.length;

    return (<AppLayout>
        {loading ?? <div> <LoadingOutlined style={{ fontSize: '30px', marginTop: '20px' }} /> </div>}
        {dataLength ? <Container>
            {productState.data.map((item) => (
                <BoxProduct data={item} key={item.id} />
            ))}
        </Container>
            : <EmptySearch>No results</EmptySearch>}
    </AppLayout>)
}