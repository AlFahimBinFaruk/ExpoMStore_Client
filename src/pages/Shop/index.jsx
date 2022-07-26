import { useEffect, useState } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import { useParams } from "react-router-dom";
import { getProductList, reset } from "../../features/product/productSlice";
import Pagination from "../../common_components/Pagination";
import ServerErrorPage from "../Error/ServerErrorPage";
import SingleProductCard from "../../common_components/SingleProductCard";
//shop page will have the product list.If a category is given it will show product under that category.If not given then it will show all product list pagination will be included.
const Shop = () => {
  const dispatch = useDispatch();
  let { categoryId } = useParams();
  const [pageNo, setPageNo] = useState(1);
  //get initial state from product store
  const { productList, isProductLoading, isProductError } = useSelector(
    (state) => state.product
  );
  //by default one time ,and then everytime pageNo changes call it..
  useEffect(() => {
    dispatch(getProductList({ pageNo, categoryId:categoryId || "" }));

    return () => {
      dispatch(reset());
    };
  }, [categoryId, dispatch, pageNo]);

  //if there are error
  if (isProductError) {
    return <ServerErrorPage />;
  }

  //if the page is loading
  if (isProductLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="shop">
      <h4 className="mb-3 text-muted">Products</h4>
      <MDBRow className="gy-4">
        {productList &&
          productList.productList.map((i, index) => {
            return (
              <MDBCol size="12" md="4" lg="3" key={index}>
                <SingleProductCard {...i} />
              </MDBCol>
            );
          })}
      </MDBRow>
      {/* pagination */}
      <Pagination
        pageNo={pageNo}
        setPageNo={setPageNo}
        totalPageCount={productList?.totalPageCount}
      />
    </div>
  );
};

export default Shop;
