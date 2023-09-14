import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { CalendarPage } from '@/pages/CalendarPage';
import { SettingPage } from '@/pages/SettingPage';
import { Error404Page } from '@/pages/Error404';
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
          <Route path={ROUTE_PATH.HOME} element={<HomePage />} />
          <Route path={ROUTE_PATH.CALENDAR} element={<CalendarPage />} />
          <Route path={ROUTE_PATH.SETTING} element={<SettingPage />} />
        </Route>
        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}
