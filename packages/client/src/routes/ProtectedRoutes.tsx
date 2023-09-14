import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAllowed: boolean;
  redirectPath: string;
}

export function ProtectedRoutes({
  isAllowed,
  redirectPath = '/landing',
}: Props) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
