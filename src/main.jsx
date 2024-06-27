import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Rect-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components:
import RegistrationPageCompany from "./pages/registrationCompany/RegistrationPageCompany";
import RegistrationPage from "./pages/registration/RegistrationPage";
import LoginPage from "./pages/login/LoginPage";
import JobPortal from "./pages/JobPortal/JobPortal";
import Home from "./pages/JobPortal/Body/Home/Home";
import Jobs from "./pages/JobPortal/Body/Jobs/Jobs";

import ApplicantDashboard from "./pages/JobPortal/Body/ApplicantDashboard/ApplicantDashboard";
import ApplicantProfile from "./pages/JobPortal/Body/ApplicantDashboard/ApplicantProfile/ApplicantProfile";
import CompanyDashboard from "./pages/JobPortal/Body/CompanyDashboard/CompanyDashboard";
import CompanyProfile from "./pages/JobPortal/Body/CompanyDashboard/CompanyProfile/CompanyProfile";
import LoginPageCompany from "./pages/loginCompany/LoginPageCompany";
import {
  ApplicantPrivateRoute,
  CompanyPrivateRoute,
} from "./utils/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <JobPortal />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: (
          <ApplicantPrivateRoute>
            <Jobs />
          </ApplicantPrivateRoute>
        ),
      },
      {
        path: "/applicantdashboard",
        element: (
          <ApplicantPrivateRoute>
            <ApplicantDashboard />
          </ApplicantPrivateRoute>
        ),
      },
      {
        path: "/companyDashboard",
        element: (
          <CompanyPrivateRoute>
            <CompanyDashboard />
          </CompanyPrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/company-registration",
    element: <RegistrationPageCompany />,
  },
  {
    path: "/applicant-registration",
    element: <RegistrationPage />,
  },
  {
    path: "/applicant-login",
    element: <LoginPage />,
  },
  {
    path: "/company-login",
    element: <LoginPageCompany />,
  },
  {
    path: "/ApplicantProfile",
    element: (
      <ApplicantPrivateRoute>
        <ApplicantProfile />
      </ApplicantPrivateRoute>
    ),
  },
  {
    path: "/Companyprofile",
    element: (
      <CompanyPrivateRoute>
        <CompanyProfile />
      </CompanyPrivateRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
