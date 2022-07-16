import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import SingleProductCard from "../../common_components/SingleProductCard";

const Search = () => {
  const [count, setcount] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="search">
      {/* src input bar */}
      <div className="d-flex justify-content-center input-group w-auto">
        <MDBInput label="search product by name" type="search" size="lg" />
        <MDBBtn>Search</MDBBtn>
      </div>
      {/* src result */}
      <div className="src-result my-5">
        <h4 className="mb-3 text-muted">Search Result</h4>
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
    </div>
  );
};

export default Search;
