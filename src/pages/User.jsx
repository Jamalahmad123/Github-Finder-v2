import { FaCodepen, FaUserFriends, FaUsers, FaStore } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import Spinner from "../components/layout/Spinner";
import ReposList from "../components/repos/ReposList";

const User = () => {
  const { getUser, user, getUserRepos, repos, isLoading } =
    useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    bio,
    blog,
    hireable,
    location,
    twitter_username,
    login,
    followers,
    following,
    html_url,
    public_repos,
    public_gists,
  } = user;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12 md:space-y-8">
        <Link to="/" className="btn btn-ghost">
          Back to Search
        </Link>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="profile-img" />
              </figure>
              <div className="card-body justify-end gap-0">
                <h2 className="card-title mb-0 gap-0 text-white">{name}</h2>
                <p className="text-white flex-grow-0">{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <h1 className="text-3xl card-title gap-2 mb-2">
                {name}
                <div className="badge badge-success">{type}</div>
                {hireable && <div className="badge badge-info">Hireable</div>}
              </h1>
              <p>{bio}</p>
              <div className="card-actions mt-6">
                <a
                  href={html_url}
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            {/*  */}
            <div className="w-full rounded-lg shadow-md bg-base-100 stats mt-4">
              {location && (
                <div className="stat">
                  <div className="stat-title text-sm">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-sm">Website</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-sm">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/*  */}
        <div className="stats w-full py-6 mb-6 rounded-lg shadow-md bg-base-100">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
        <ReposList repos={repos} />
      </div>
    </>
  );
};

export default User;
