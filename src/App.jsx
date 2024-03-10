import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import CreatePage from "./pages/CreatePage";
import NewPage from "./pages/NewPage";
import ProgressPage from "./pages/ProgressPage";
import CompletedPage from "./pages/CompletedPage";
import CanceledPage from "./pages/CanceledPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ForgetPassPage from "./pages//ForgetPassPage";
import Page404 from "./pages/Page404";
import CreatePasswordPage from "./pages/AccountRecover/CreatePasswordPage";
import SendOTPPage from "./pages/AccountRecover/SendOTPPage";
import VerifyOTPPage from "./pages/AccountRecover/VerifyOTPPage";
import FullscreenLoader from "./components/MasterLayout/FullscreenLoader";
import { Toaster } from 'react-hot-toast';
import { getToken } from "./helper/SessionHelper";

const App = () => {
  if (getToken()) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/all" element={<NewPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/completed" element={<CompletedPage />} />
            <Route path="/canceled" element={<CanceledPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/forgetpass" element={<ForgetPassPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader />
        <Toaster />
      </>
    );
  }
  else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />

            <Route path="/sendOTP" element={<SendOTPPage />} />
            <Route path="/verifyOTP" element={<VerifyOTPPage />} />
            <Route path="/createPassword" element={<CreatePasswordPage />} />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullscreenLoader />
        <Toaster />
      </>
    )
  }

};

export default App;