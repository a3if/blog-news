import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, user, requiredRole, redirectTo }) => {
  if (user && user.role === requiredRole) {
    return <Route element={element} />;
  } else {
    return <Navigate to={redirectTo} />;
  }
};

export default ProtectedRoute;
