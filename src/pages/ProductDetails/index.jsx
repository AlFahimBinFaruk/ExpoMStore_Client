import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
const ProdcutDetails = () => {
  return (
    <div className="product-details my-5">
      <MDBRow className="align-items-center justify-content-center ">
        {/* left */}
        <MDBCol size="12" md="8" lg="6">
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
            alt=""
            className="border border-warning"
            width={400}
          />
        </MDBCol>
        {/* right */}
        <MDBCol size="12" md="6" lg="4">
          <h5 className="title text-dark">Electric Drum Kit</h5>
          <h6 className="category">
            <span className="text-muted">Category</span>: Drum
          </h6>
          <h6 className="price">$312</h6>

          {/* add to cart btn */}
          <MDBBtn className="mt-3">Add to cart</MDBBtn>
        </MDBCol>
      </MDBRow>
      {/* desc */}
      <MDBCol size="4" className="mx-auto my-5">
        <div className="text-center">
          <h4>Product Description</h4>
          <h6 className="text-muted">
            I'm baby live-edge prism retro gastropub kale chips vinyl plaid
            keffiyeh kinfolk. Cray photo booth vexillologist vinyl actually DIY.
            Ramps polaroid ennui everyday carry williamsburg venmo thundercats
            8-bit organic retro pitchfork roof party PBR&B synth typewriter.
            Typewriter hoodie 3 wolf moon, yuccie hexagon umami vice gochujang
            tumblr aesthetic cold-pressed fam. Keffiyeh quinoa distillery,
            affogato yuccie iPhone brooklyn coloring book dreamcatcher roof
            party pinterest freegan. Succulents YOLO narwhal, unicorn mustache
            street art hella cray pabst meditation kitsch shaman. Quinoa
            slow-carb tote bag four dollar toast. Iceland flexitarian wayfarers
            sartorial skateboard, narwhal post-ironic subway tile. Whatever VHS
            scenester unicorn cornhole, messenger bag helvetica tumblr. Before
            they sold out yr photo booth coloring book chia. Wolf lyft butcher
            hoodie godard fingerstache irony gentrify migas squid next level
            salvia live-edge bushwick banjo.
          </h6>
        </div>
      </MDBCol>
    </div>
  );
};

export default ProdcutDetails;
