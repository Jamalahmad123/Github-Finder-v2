import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

const Nav = ({ title }) => {
  return (
    <nav className="navbar bg-neutral text-neutral-content mb-12 shadow-lg">
      <div className="container mx-auto">
        <div className="flex-none flex items-center gap-3">
          <FaGithub className="text-3xl" />
          <Link to="/" className="text-lg font-bold">
            {title}
          </Link>
        </div>
        <div className="flex-1 flex justify-end gap-4">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

Nav.defaultProps = {
  title: "Github Finder",
};

Nav.prototype = {
  title: PropTypes.string,
};

export default Nav;
