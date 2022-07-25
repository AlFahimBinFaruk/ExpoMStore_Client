import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import { useParams } from "react-router-dom";
import { getProductDetails, reset } from "../../features/product/productSlice";
import ServerErrorPage from "../Error/ServerErrorPage";
import { useEffect } from "react";
const ProdcutDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  //get initial state from product store
  const { productDetails, isProductLoading, isProductError } = useSelector(
    (state) => state.product
  );
  //product details info
  let { _id, title, categoryDetails, thumbnail, price, description } =
    productDetails || false;
  //by default one time ,and then everytime pageNo changes call it..
  useEffect(() => {
    dispatch(getProductDetails(id));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, id]);

  //if there are error
  if (isProductError) {
    return <ServerErrorPage />;
  }

  //if the page is loading
  if (isProductLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="product-details my-5">
      {productDetails && (
        <>
          <MDBRow className="align-items-center justify-content-center ">
            {/* left */}
            <MDBCol size="12" md="8" lg="6">
              <img
                src={thumbnail}
                alt=""
                className="border border-warning"
                width={400}
              />
            </MDBCol>
            {/* right */}
            <MDBCol size="12" md="6" lg="4">
              <h5 className="title text-dark">{title}</h5>
              <h6 className="category">
                <span className="text-muted">Category</span>:
                {categoryDetails?.title}
              </h6>
              <h6 className="price">${price}</h6>

              {/* add to cart btn */}
              <MDBBtn className="mt-3">Add to cart</MDBBtn>
            </MDBCol>
          </MDBRow>
          {/* desc */}
          <MDBCol size="4" className="mx-auto my-5">
            <div className="text-center">
              <h4>Product Description</h4>
              <h6 className="text-muted">{description}</h6>
            </div>
          </MDBCol>
        </>
      )}
    </div>
  );
};

export default ProdcutDetails;
