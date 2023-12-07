import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../components/route/AuthRoutes";
import ProtectedRoutes from "../components/route/ProtectedRoutes";
import { authRoute, protedRoutes } from "../config/routes";
import AppRoute from "../components/route/AppRoute";
import CheckAuth from "../components/CheckAuth";
import { useSelector } from "react-redux";

function AllPages() {
  const { signedIn } = useSelector((state) => state.session);
  const { role } = useSelector((state) => state.user);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoutes isAuthenticated={signedIn} />}
        >
          {protedRoutes.map((raute) => (
            <Route
              key={raute.key}
              path={raute.path}
              element={
                <CheckAuth role={raute.role} userRole={role}>
                  <AppRoute component={raute.component} />
                </CheckAuth>
              }
            />
          ))}
        </Route>
        <Route path="/" element={<AuthRoutes isAuthenticated={signedIn} />}>
          {authRoute.map((raute) => (
            <Route
              key={raute.key}
              path={raute.path}
              element={<AppRoute component={raute.component} />}
            />
          ))}
        </Route>
        <Route path="/*" element={"page not found"} />
      </Routes>
    </div>
  );
}

export default AllPages;
