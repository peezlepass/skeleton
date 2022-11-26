import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Layout from "./Layout";
import Home from "./Home";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/" element={<Home></Home>} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}
