import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const { userInfo } = useSelector((state) => state.user);
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
        {/* protected routes */}
        {userInfo ? (
          <h5>
            <Link to="/my-account" className="mx-3 text-capitalize text-dark">
              my account
            </Link>
          </h5>
        ) : (
          <h5>
            <Link to="/sign-up" className="mx-3 text-capitalize text-dark">
              sign up
            </Link>
          </h5>
        )}
      </div>
    </div>
  );
};

export default Header;
