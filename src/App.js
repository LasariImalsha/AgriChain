import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import HomeSignUp from "./Pages/Home/HomeSignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardContent from "./Pages/Dashboard/DashboardContent";
import ManageStock from "./Pages/Orders/Supplier/ManageStock";
import ViewPastOrders from "./Pages/Orders/Supplier/ViewPastOrders";
import CustomerPastOrderDetails from "./Pages/Orders/Supplier/OrderIdDetails/CustomerPastOrderDetails";
import FarmerProfile from "./Pages/Dashboard/Farmer/FarmerProfile";
import FarmerDashboard from "./Pages/Dashboard/Farmer/FarmerDashboard";
import Cultivation from "./Pages/Cultivation/Cultivation";
import FarmerOrders from "./Pages/Orders/Farmer/FarmerOrders";
import Profile from "./Pages/Profile/Profile";
import UserList from './Pages/UserManagement/UserList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="" element={<Home />}/>
          <Route path="/homesignup" element={<HomeSignUp />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardContent />}/>
            <Route path="stockManage" element={<ManageStock />}/>
            <Route path="pastOrders" element={<ViewPastOrders />}/>
            <Route path="orderDetails/:orderID" element={<CustomerPastOrderDetails />}/>
            <Route path="profile" element={<Profile />}/>
            <Route path="myorders" element={<FarmerOrders />}/>
            <Route path="products" element={<FarmerDashboard />}/>
            <Route path="cultivate" element={<Cultivation />}/>
            <Route path="users" element={<UserList />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
