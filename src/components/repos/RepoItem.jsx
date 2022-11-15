import { FaEye, FaStar, FaInfo, FaLink, FaUtensils } from "react-icons/fa";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body gap-0">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} rel="noreferrer" target="_blank">
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-4">{description}</p>
        <div className="flex items-center gap-3">
          <div className="badge badge-info badge-lg">
            <FaEye />
            {watchers_count}
          </div>
          <div className="badge badge-success badge-lg">
            <FaStar />
            {stargazers_count}
          </div>
          <div className="badge badge-error badge-lg">
            <FaInfo />
            {open_issues}
          </div>
          <div className="badge badge-warning badge-lg">
            <FaUtensils />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
