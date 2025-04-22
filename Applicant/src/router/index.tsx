import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import ApplyPage from "../pages/ApplyPage";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import InformationPage from "../pages/InformationPage";
import CriteriaPage from "../pages/CriteriaPage";
import ScholarshipSearchPage from "../pages/ScholarshipSearchPage";
import { ROUTER_INDEX } from "../constant/routerConstant";
import SubmitFormPage from "../pages/SubmitFormPage";

const router = createBrowserRouter([
  {
    path: ROUTER_INDEX.HomePage.router,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTER_INDEX.ApplyPage.router,
        element: <ApplyPage />,
      },
      {
        path: ROUTER_INDEX.ContactPage.router,
        element: <ContactPage />,
      },
      {
        path: ROUTER_INDEX.InformationPage.router,
        element: <InformationPage />,
      },
      {
        path: ROUTER_INDEX.CriteriaPage.router,
        element: <CriteriaPage />,
      },
      {
        path: ROUTER_INDEX.ScholarshipSearchPage.router,
        element: <ScholarshipSearchPage />,
      },
    ],
  },
  {
    path: ROUTER_INDEX.SubmitFormPage.router,
    element: <SubmitFormPage />,
  },
  {
    path: ROUTER_INDEX.NotFoundPage.router,
    element: <NotFoundPage />,
  },
]);

export default router;
