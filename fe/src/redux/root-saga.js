import { all } from 'redux-saga/effects'
import AppSaga from './app/saga'
import Career from './career/saga'
import HomePageSaga from './home-page/saga'
import FooterSaga from './footer/saga'
import CandidateSaga from './candidate/saga'
import QuestionAndAnswerSaga from './question-answer/saga'
import BusinessPageSaga from './business/saga'
import ContactSaga from './contact/saga'
import CompanyPageSaga from './company/saga'
import AuthSaga from './auth/saga'
import AccountSaga from './account/saga'
import ImageSaga from './image/saga'
import PageSaga from './page/saga'
import ProjectSaga from './project/saga'
import TechnologySaga from './technology/saga'
import AiSolutionPageSaga from './ai-solution/saga'
export default function* rootSaga() {
    yield all([
        AppSaga(),
        Career(),
        HomePageSaga(),
        FooterSaga(),
        CandidateSaga(),
        BusinessPageSaga(),
        QuestionAndAnswerSaga(),
        ContactSaga(),
        CompanyPageSaga(),
        AuthSaga(),
        AccountSaga(),
        ImageSaga(),
        PageSaga(),
        ProjectSaga(),
        TechnologySaga(),
        AiSolutionPageSaga()

    ])
}
