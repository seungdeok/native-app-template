import React from 'react';

import { HomePage } from '@/pages/HomePage';
import { Error404Page } from '@/views/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from '@/constants/routes';

import { ProtectedRoutes } from './ProtectedRoutes';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoutes isAllowed redirectPath={ROUTE_PATH.ERROR_404} />
          }
        >
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}
