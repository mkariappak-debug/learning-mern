import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Navbar = () => {

  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>useContext Hook Example</h1>

      <h2>User Name: {user.name}</h2>

      <h3>Role: {user.role}</h3>
    </div>
  );
};

export default Navbar;