/**
 * ****************************************************************************
 * @description     :   Combinie all reducers on app
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * import libraries
 */
import { combineReducers } from 'redux';
import AppReducer from './app/reducer';
import Career from './career/reducer';
import HomePageReducer from './home-page/reducer';
import FooterReducer from './footer/reducer';
import CandidateReducer from './candidate/reducer';
import QuestionAndAnswerReducer from './question-answer/reducer';
import BusinessPageReducer from './business/reducer';
import ContactReducer from './contact/reducer';
import CompanyReducer from './company/reducer';
import AuthReducer from './auth/reducer';
import AccountReducer from './account/reducer';
import ImageReducer from './image/reducer';
import PageReducer from './page/reducer';
import ProjectReducer from './project/reducer';
import TechnologyReducer from './technology/reducer';
import AiSolutionPageReducer from './ai-solution/reducer';
const rootReducer = combineReducers({
    App: AppReducer,
    Career: Career,
    HomePage: HomePageReducer,
    Footer: FooterReducer,
    Candidate: CandidateReducer,
    QuestionAndAnswer: QuestionAndAnswerReducer,
    Business: BusinessPageReducer,
    Contact: ContactReducer,
    Company: CompanyReducer,
    Auth: AuthReducer,
    Account: AccountReducer,
    Image: ImageReducer,
    Page: PageReducer,
    Project: ProjectReducer,
    Technology: TechnologyReducer,
    AiSolution : AiSolutionPageReducer
});

export default rootReducer;
