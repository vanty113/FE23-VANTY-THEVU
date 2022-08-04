import { TOP_BRANDS_DATA } from "../../../constant/TopBrandsData";
import './brands.scss';
import { DEPARTMENTS_DATA } from "../../../constant/DepartmentsData";
import { CLEARANCE_DATA } from "../../../constant/ClearanceData";
import { Link } from "react-router-dom";

export function ScBrands() {
    const listBrands1 = TOP_BRANDS_DATA.slice(0, 20);
    const listBrands2 = TOP_BRANDS_DATA.slice(20, 40);
    const listBrands3 = TOP_BRANDS_DATA.slice(40, 60);

    const showListBrands1 = listBrands1.map((item, index) =>
        <li key={index}>{item.title}</li>);

    const showListBrands2 = listBrands2.map((item, index) =>
        <li key={index}>{item.title}</li>);

    const showListBrands3 = listBrands3.map((item, index) =>
        <li key={index}>{item.title}</li>);

    const showListDepartments = DEPARTMENTS_DATA.map((item, index) =>
        <Link to={item.path} key={index}>{item.title}</Link>)

    const showListClearance = CLEARANCE_DATA.map((item, index) =>
        <li key={index}>{item.title}</li>)

    return (<div className="sc-show-brands">
        <div className="sc-brands">
            <p>DEPARTMENTS</p>
            {showListDepartments}
            <div className="sc-clearance">
                <p>CLEARANCE</p>
                {showListClearance}
            </div>
        </div>
        <div className="sc-brands">
            <p>TOP BRANDS</p>
            {showListBrands1}
        </div>
        <div className="sc-brands">
            <p>&nbsp;</p>
            {showListBrands2}
        </div>
        <div className="sc-brands">
            <p>&nbsp;</p>
            {showListBrands3}
        </div>
    </div>)
}