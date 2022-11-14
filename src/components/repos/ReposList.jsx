import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const ReposList = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg bg-base-100 card">
      <div className="card-body">
        <h2 className="text-3xl card-title font-bold my-4">
          Latest Respositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

ReposList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default ReposList;
