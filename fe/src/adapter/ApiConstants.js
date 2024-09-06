const BASE_PREFIX = '/'
const ApiConstants = {
    LOGIN: `${BASE_PREFIX}auth/login`,
    LOGOUT: `${BASE_PREFIX}auth/login/logout`,
    FORGOT_PW: `${BASE_PREFIX}auth/forgot-password`,
    RESET_PW: `${BASE_PREFIX}auth/reset-password`,
    REFRESH_TOKEN: `${BASE_PREFIX}auth/login/refresh-token`,
    AUTH: `${BASE_PREFIX}auth/me`,
    LOCALE: `${BASE_PREFIX}locale`,
    QNA: `${BASE_PREFIX}qna`,
    RECUITMENT_POST: `${BASE_PREFIX}recruitment-post`,
    CANDIDATE: `${BASE_PREFIX}candidate`,
    LOCATION: `${BASE_PREFIX}library?type=8`,
    TYPE_JOB: `${BASE_PREFIX}library?type=6`,
    WORK_TYPE: `${BASE_PREFIX}library?type=7`,
    INQUIRY: `${BASE_PREFIX}inquiry`,
    CONTACT: `${BASE_PREFIX}contact`,
    COMPANY: `${BASE_PREFIX}company`,
    // LINK: `${BASE_PREFIX}library?type=14`,
    PROJECT: `${BASE_PREFIX}project`,
    LIBRARY: `${BASE_PREFIX}library`,
    SECTION: `${BASE_PREFIX}section`,
    ACCOUNT: `${BASE_PREFIX}user${BASE_PREFIX}admin`,
    PICTURE: `${BASE_PREFIX}picture`,
    SERVICES: `${BASE_PREFIX}service`,
    TECHNOLOGY: `${BASE_PREFIX}technology`,
    LINK:`${BASE_PREFIX}link`,
    USER: `${BASE_PREFIX}user`,
}

export default ApiConstants

export { BASE_PREFIX }
