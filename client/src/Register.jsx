import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "./redux/reducers/userReducer/actions";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const result = await response.json();
    dispatch(register(result.user));
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="name" />
      <input name="email" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button type="submit">Register</button>
    </form>
  );
}
