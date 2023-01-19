import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import BasicLayout from '@components/Layout/BasicLayout';
import DefaultLayout from '@components/Layout/DefaultLayout';
import AirQualityPage from '@pages/AirQuality';
import CovidPage from '@pages/Covid19';
import Ambulances from '@pages/Covid19/views/Ambulances';
import Statistic from '@pages/Covid19/views/Statistic';
import HomePage from '@pages/Home';
import SearchPage from '@pages/SearchPage';
import { Loading } from '@reactoso-ui';
import './style/style.scss';

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/search"
          element={
            <DefaultLayout>
              <SearchPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/kovid19"
          element={
            <DefaultLayout>
              <CovidPage />
            </DefaultLayout>
          }
        >
          <Route path="" element={<Statistic />} />
        </Route>
        <Route
          path="/kovid-ambulante"
          element={
            <DefaultLayout>
              <CovidPage />
            </DefaultLayout>
          }
        >
          <Route path="" element={<Ambulances />} />
        </Route>
        <Route
          path="/kvalitet-vazduha"
          element={
            <DefaultLayout>
              <AirQualityPage />
            </DefaultLayout>
          }
        />
        <Route
          path="/"
          element={
            <BasicLayout>
              <HomePage />
            </BasicLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
export default App;
