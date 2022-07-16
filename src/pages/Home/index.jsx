import { useState } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import SingleCategoryCard from "./components/SingleCategoryCard";
//home will consist of all the categorylist of products.
const Home = () => {
  const [count, setcount] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="home">
      <h4 className="mb-3 text-muted">Categories</h4>
      <MDBRow className="gy-4">
        {count.map((i) => {
          return (
            <MDBCol size="12" md="4" lg="3">
              <SingleCategoryCard />
            </MDBCol>
          );
        })}
      </MDBRow>
    </div>
  );
};

export default Home;
