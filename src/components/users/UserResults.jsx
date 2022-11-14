import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
  const { users, isLoading } = useContext(GithubContext);

  return !isLoading ? (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  ) : (
    <Spinner />
  );
};

export default UserResults;
