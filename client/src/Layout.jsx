import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./redux/reducers/userReducer/actions";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await fetch("/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({}),
    });
    dispatch(logout());
    navigate("/");
  };
  return (
    <main className="bg-felt-pattern min-h-screen">
      <header>
        <nav className="flex gap-x-4">
          {user ? (
            <>
              <span>{user.name}</span>
              <button onClick={handleLogout} type="button">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
      <div>{children}</div>
    </main>
  );
}
