import { useState } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import SingleProductCard from "../../common_components/SingleProductCard";
//shop page will have the product list.If a category is given it will show product under that category.If not given then it will show all product list pagination will be included.
const Shop = () => {
  const [count, setcount] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="shop">
      <h4 className="mb-3 text-muted">Products</h4>
      <MDBRow className="gy-4">
        {count.map((i) => {
          return (
            <MDBCol size="12" md="4" lg="3">
              <SingleProductCard />
            </MDBCol>
          );
        })}
      </MDBRow>
    </div>
  );
};

export default Shop;
