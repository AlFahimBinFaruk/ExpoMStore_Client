import { useEffect, useState } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import { getCategoryList, reset } from "../../features/category/categorySlice";
import Pagination from "../../common_components/Pagination";
import SingleCategoryCard from "./components/SingleCategoryCard";
import ServerErrorPage from "../Error/ServerErrorPage";

//home will consist of all the categorylist of products.
const Home = () => {
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(1);
  //get initial state from admin store
  const { categoryList, isCategoryLoading, isCategoryError } = useSelector(
    (state) => state.category
  );
  //by default one time ,and then everytime pageNo changes call it..
  useEffect(() => {
    dispatch(getCategoryList(pageNo));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, pageNo]);

  //if there are error
  if (isCategoryError) {
    return <ServerErrorPage />;
  }

  //if the page is loading
  if (isCategoryLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="home">
      <h4 className="mb-3 text-muted">Categories</h4>
      <MDBRow className="gy-4">
        {categoryList &&
          categoryList.categoryList.map((i, index) => {
            return (
              <MDBCol size="12" md="4" lg="3" key={index}>
                <SingleCategoryCard {...i} />
              </MDBCol>
            );
          })}
      </MDBRow>
      {/* pagination */}
      <Pagination
        pageNo={pageNo}
        setPageNo={setPageNo}
        totalPageCount={categoryList?.totalPageCount}
      />
    </div>
  );
};

export default Home;
