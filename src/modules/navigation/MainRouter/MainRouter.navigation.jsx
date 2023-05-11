import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from '../../common/components/UI/Loader/Loader.component';
import { APP_KEYS } from '../../common/const';



const MainView = lazy(() => import('../../views/MainView/MainView.views'));
const OrderView = lazy(() => import('../../views/OrderView/OrderView.views'));
const NotFoundView = lazy(() => import('../../views/NotFoundView/NotFoundView.views'));
export const MainRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainView />} path={APP_KEYS.ROUTER_KEYS.ROOT} />
        <Route element={<OrderView />} path={APP_KEYS.ROUTER_KEYS.ORDER} />
        <Route element={<NotFoundView />} path={APP_KEYS.ROUTER_KEYS.NOTFOUND} />
      </Routes>
    </Suspense>
  );

};
