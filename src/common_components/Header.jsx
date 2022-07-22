import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [commonRoutes, setCommonRoutes] = useState([
    {
      name: "categories",
      link: "/",
    },
    {
      name: "products",
      link: "/shop",
    },
    {
      name: "cart",
      link: "/cart",
    },
    {
      name: "my account",
      link: "/my-account",
    },
  ]);
  return (
    <div className="text-center py-4">
      <h3 className="text-muted fst-italic">ExpoMStore</h3>
      <div className="routes d-flex justify-content-center mt-4">
        {commonRoutes.map((i) => {
          return (
            <h5>
              <Link to={i.link} className="mx-3 text-capitalize text-dark">
                {i.name}
              </Link>
            </h5>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
