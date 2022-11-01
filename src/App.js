import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route
              path="/"
              element={
                  <Dashboard />
              }
            >
              {/* <Route index element={<DashboardHome />}></Route>
              <Route path="order-history" element={<OrderHistory />}></Route>
              <Route path="take-service" element={<TakeService />}></Route>
              <Route path="track-product" element={<TrackProduct />}></Route>
              <Route path="offers" element={<Offers />}></Route>
              <Route path="support" element={<Support />}></Route>
              <Route path="coverage-area" element={<CoverageArea />}></Route>
              <Route path="create-shop" element={<CreateShopForm />}></Route> */}
            </Route>
          </Routes>
    </div>
  );
}

export default App;
