import MainLayout from 'shared/components/layout/MainLayout';
import HomePageLayout from 'shared/components/layout/HomePageLayout';
import AuthLayout from 'shared/components/layout/AuthLayout';
import AdminLayout from 'shared/components/layout/AdminLayout';
import { AdminGuard } from './guards/AdminGuard';
import { GuestGuard } from './guards/GuestGuard';
import { lazy } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import RouterPath from './RouterPath';
// Auth
const LoginPage = lazy(() => import('pages/auth/LoginPage'));
const ForgotPwPage = lazy(() => import('pages/auth/ForgotPwPage'));

const HomePage = lazy(() => import('pages/home/HomePage'));
const ProductInfoPage = lazy(() =>
    import('pages/product-info/ProductInfoPage'),
);
const CareerPage = lazy(() => import('pages/career/CareerPage'));
const CareerInfoPage = lazy(() => import('pages/career-info/CareerInfoPage'));
const BusinessContractPage = lazy(() =>
    import('pages/business-content/BusinessContractPage'),
);
const BusinessLabPage = lazy(() =>
    import('pages/business-content/BusinessLabPage'),
);
const ContactPage = lazy(() => import('pages/contact/ContactPage'));
const BusinessPage1 = lazy(() =>
    import('pages/business-content/BusinessContentPage1'),
);
const BusinessHolonPage = lazy(() =>
    import('pages/business-content/BusinessHolonPage'),
);
const CompanyInfoPage = lazy(() =>
    import('pages/company-info/CompanyInfoPage'),
);

const QuestionAnswerPage = lazy(() =>
    import('pages/question-answer/QuestionAnswerPage'),
);
const DashboardPage = lazy(() => import('pages/admin/dashboard/DashboardPage'));
const AccountListPage = lazy(() =>
    import('pages/admin/account/AccountListPage'),
);
const AccountChangePwPage = lazy(() =>
    import('pages/admin/account/AccountChangePw'),
);
const AccountEditPage = lazy(() =>
    import('pages/admin/account/AccountEditPage'),
);
const AccountRegisterPage = lazy(() =>
    import('pages/admin/account/AccountRegisterPage'),
);
const CareerPageAdminPage = lazy(() => import('pages/admin/career/CareerPage'));
const CareerAddPage = lazy(() => import('pages/admin/career/CareerAddPage'));
const CareerEditPage = lazy(() => import('pages/admin/career/CareerEditPage'));
const AddImagePage = lazy(() => import('pages/admin/image/AddImagePage'));
const EditImagePage = lazy(() => import('pages/admin/image/EditImagePage'));
const ImageListPage = lazy(() => import('pages/admin/image/ImageListPage'));
const CompanyEditPage = lazy(() =>
    import('pages/admin/company-page/CompanyPage'),
);
const CandidatePage = lazy(() => import('pages/admin/candidate/CandidatePage'));
const ContactAdminPage = lazy(() => import('pages/admin/contact/ContactPage'));
const HomepageEditPage = lazy(() =>
    import('pages/admin/homepage-edit-page/HomeEditPage'),
);

const BusinessEditPage = lazy(() => import('pages/admin/business/MainPage'));
const ModelEditPage = lazy(() => import('pages/admin/model/ModelEditPage'));

const ProjectListPage = lazy(() =>
    import('pages/admin/project/ProjectListPage'),
);
const ProjectAddPage = lazy(() => import('pages/admin/project/ProjectAddPage'));
const ProjectEditPage = lazy(() =>
    import('pages/admin/project/ProjectEditPage'),
);
const QnAListPage = lazy(() => import('pages/admin/qna/QnAList'));
const AddQnAPage = lazy(() => import('pages/admin/qna/AddQnAPage'));
const EditQnAPage = lazy(() => import('pages/admin/qna/EditQnAPage'));
const TechListPage = lazy(() => import('pages/admin/technology/TechListPage'));
const TechAddPage = lazy(() => import('pages/admin/technology/TechAddPage'));
const TechEditPage = lazy(() => import('pages/admin/technology/TechEditPage'));
const AiSolutionPage = lazy(() => import('pages/ai-solution/AiSolutionPage'));
const TopPage = lazy(() => import('pages/top-page/TopPage'));
/**
 * ****************************************************************************
 * DUNGNT ADD
 * Routes.js
 *
 * description		:
 * created at		:	2023-07-09
 * created by		:	DungNT
 * package			:	src/router/Routes.js
 * copyright			:	Copyright (c) DungNT
 * version			:	1.0.0
 * ****************************************************************************
 */
const Routes = [
    // Auth
    {
        layout: AuthLayout,
        routes: [
            {
                id: 'LOGIN',
                guards: [GuestGuard],
                component: <LoginPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: AuthLayout,
        routes: [
            {
                id: 'FORGOT_PASSWORD',
                guards: [GuestGuard],
                component: <ForgotPwPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    // User
    {
        layout: HomePageLayout,
        routes: [
            {
                id: 'HOME',
                guards: [GuestGuard],
                component: <HomePage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                id: 'PRODUCT',
                guards: [GuestGuard],
                component: <HomePage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                id: 'PRODUCT_INFO',
                guards: [GuestGuard],
                component: <ProductInfoPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                id: 'CAREER',
                guards: [GuestGuard],
                component: <CareerPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                id: 'CAREER_INFO',
                guards: [GuestGuard],
                component: <CareerInfoPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                id: 'CONTACT',
                guards: [GuestGuard],
                component: <ContactPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: HomePageLayout,
        routes: [
            {
                id: 'BUSINESS',
                guards: [GuestGuard],
                component: <BusinessPage1 />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                id: 'CONTRACT',
                guards: [GuestGuard],
                component: <BusinessContractPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                id: 'LABTYPE',
                guards: [GuestGuard],
                component: <BusinessLabPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                id: 'COMPANY_INFO',
                guards: [GuestGuard],
                component: <CompanyInfoPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                id: 'QUESTION_ANSWER',
                guards: [GuestGuard],
                component: <QuestionAnswerPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                id: 'HOLON',
                guards: [GuestGuard],
                component: <BusinessHolonPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    {
        layout: MainLayout,
        routes: [
            {
                id: 'AI_SOLUTION',
                guards: [GuestGuard],
                component: <AiSolutionPage />,
                fallback: () => {
                    return null;
                },
            },
        ],
    },
    // Admin
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'ACCOUNT',
                guards: [AdminGuard],
                component: <AccountListPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'ACCOUNT_REGISTER',
                guards: [AdminGuard],
                component: <AccountRegisterPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'ACCOUNT_CHANGE_PASSWORD',
                guards: [AdminGuard],
                component: <AccountChangePwPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'DASHBOARD_ADMIN',
                guards: [AdminGuard],
                component: <DashboardPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'ADMIN',
                guards: [AdminGuard],
                component: <DashboardPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'CAREER_ADMIN',
                guards: [AdminGuard],
                component: <CareerPageAdminPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'CAREER_ADD_ADMIN',
                guards: [AdminGuard],
                component: <CareerAddPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'CAREER_EDIT_ADMIN',
                guards: [AdminGuard],
                component: <CareerEditPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'ACCOUNT_EDIT',
                guards: [AdminGuard],
                component: <AccountEditPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'IMAGE_ADD',
                guards: [AdminGuard],
                component: <AddImagePage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'IMAGE_EDIT',
                guards: [AdminGuard],
                component: <EditImagePage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'IMAGE',
                guards: [AdminGuard],
                component: <ImageListPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'CANDIDATE',
                guards: [AdminGuard],
                component: <CandidatePage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'CONTACT_ADMIN',
                guards: [AdminGuard],
                component: <ContactAdminPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'COMPANY_EDIT',
                guards: [AdminGuard],
                component: <CompanyEditPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'HOMEPAGE_EDIT',
                guards: [AdminGuard],
                component: <HomepageEditPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'BUSINESS_MAIN',
                guards: [AdminGuard],
                component: <BusinessEditPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'BUSINESS_MODEL',
                guards: [AdminGuard],
                component: <ModelEditPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'PROJECT',
                guards: [AdminGuard],
                component: <ProjectListPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'PROJECT_ADD',
                guards: [AdminGuard],
                component: <ProjectAddPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'PROJECT_EDIT',
                guards: [AdminGuard],
                component: <ProjectEditPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'QNA_MANAGE',
                guards: [AdminGuard],
                component: <QnAListPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'ADD_QNA',
                guards: [AdminGuard],
                component: <AddQnAPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'TECH_LIST',
                guards: [AdminGuard],
                component: <TechListPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'TECH_ADD',
                guards: [AdminGuard],
                component: <TechAddPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'TECH_EDIT',
                guards: [AdminGuard],
                component: <TechEditPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
    {
        layout: AdminLayout,
        routes: [
            {
                id: 'EDIT_QNA',
                guards: [AdminGuard],
                component: <EditQnAPage />,
                fallback: () => {
                    return <Redirect to={RouterPath.LOGIN} />;
                },
            },
        ],
    },
];

export default Routes;
