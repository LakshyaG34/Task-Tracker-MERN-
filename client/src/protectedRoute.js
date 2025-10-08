import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, role, allowedRoles, children }) => {
  if (!user) return React.createElement(Navigate, { to: "/login", replace: true });
  if (!allowedRoles.includes(role)) return React.createElement(Navigate, { to: "/signup", replace: true });
  return children;
};

export default ProtectedRoute;
