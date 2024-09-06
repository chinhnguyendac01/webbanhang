const prefix = '/';
/**
 * ****************************************************************************
 * DUNGNT ADD
 * RouterPath.js
 *
 * description		:
 * created at		:	2023-07-09
 * created by		:	DungNT
 * package			:	src/router/RouterPath.js
 * copyright			:	Copyright (c) DungNT
 * version			:	1.0.0
 * ****************************************************************************
 */
export default class RouterPath {
    static HOME = prefix + '';
    static getRouteWithId(path, id) {
        return path.replace(':id', id);
    }

    // auth
    static LOGIN = '/login';
    static FORGOT_PASSWORD = '/forgot-password';

    // user
    static PRODUCT = '/product';
    static PRODUCT_INFO = '/product/:id';
    static CAREER = '/career';
    static CAREER_INFO = '/career/info/:id';
    static CONTACT = '/contact';
    static CONTRACT = '/business/contract';
    static BUSINESS = '/business';
    static LABTYPE = '/business/lab';
    static COMPANY_INFO = '/company-information';
    static QUESTION_ANSWER = '/question-answer';
    static HOLON = '/business/holon';
    static AI_SOLUTION = '/ai-solution';
    // admin
    static ADMIN = '/admin';
    static DASHBOARD_ADMIN = '/admin/dashboard';
    static ACCOUNT = '/admin/account';
    static ACCOUNT_REGISTER = '/admin/account/register';
    static ACCOUNT_CHANGE_PASSWORD = '/admin/account/change-password';
    static ACCOUNT_EDIT = '/admin/account/edit';
    static CAREER_ADMIN = '/admin/career';
    static CAREER_ADD_ADMIN = '/admin/career/add';
    static CAREER_EDIT_ADMIN = '/admin/career/edit';
    static IMAGE_ADD = '/admin/image/add';
    static IMAGE_EDIT = '/admin/image/edit';
    static IMAGE = '/admin/image';
    static COMPANY_EDIT = '/admin/company';
    static CANDIDATE = '/admin/candidate';
    static CONTACT_ADMIN = '/admin/contact';
    static HOMEPAGE_EDIT = '/admin/home';
    static BUSINESS_MAIN = '/admin/business';
    static BUSINESS_MODEL = '/admin/model';
    static PROJECT = '/admin/project';
    static PROJECT_ADD = '/admin/project/add';
    static PROJECT_EDIT = '/admin/project/edit';
    static QNA_MANAGE = '/admin/qna';
    static ADD_QNA = '/admin/qna/add';
    static EDIT_QNA = '/admin/qna/edit';
    static TECH_LIST = '/admin/technology';
    static TECH_ADD = '/admin/technology/add';
    static TECH_EDIT = '/admin/technology/edit';
}
