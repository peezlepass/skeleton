import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./redux/reducers/userReducer/actions";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    dispatch(login(result.user));
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}
