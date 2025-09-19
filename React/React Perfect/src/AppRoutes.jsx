import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // ✅ Use react-router-dom
import Home from "./11_Router/Home1";
import Login from "./11_Router/Login";
import About from "./11_Router/About";
import Navbar from "./Nav.jsx/Navbar";
import NotFound from "./11_Router/NotFound";

import College from "./11_Router/NestedRouting/College";
import Details from "./11_Router/NestedRouting/Details";
import Student from "./11_Router/NestedRouting/Student";
import Department from "./11_Router/NestedRouting/Department";
import User from "./11_Router/NestedRouting/User";
import UserDetails from "./11_Router/NestedRouting/UserDetails";
import Api_1 from "./12_Api/1_Api";
import MyApi from "./12_Api/MyApi";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="user/list?" element={<User />} />
          <Route path="user/:id/:name?" element={<UserDetails />} />

          <Route path="in">
            <Route path="/inuser">
              <Route path="/in/user/about" element={<About />} />
              <Route path="/in/user/login" element={<Login />} />
            </Route>
          </Route>
        </Route>
        {/* Nested Routing */}
        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="details" element={<Details />} />
          <Route path="department" element={<Department />} />
        </Route>

        {/* Catch-all for undefined routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/in/user/login" />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
