import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';
const AccountFactory = {
    fetchAccoutsList: ({ per_page, page }) => {
        // return accountList
        return ApiOperation.request({
            url: ApiConstants.ACCOUNT,
            params: {
                per_page: per_page,
                page: page
            }
        });
    },
    deleteMany: (data) => {
        return ApiOperation.request({
            url: ApiConstants.ACCOUNT,
            method: 'DELETE',
            data: data
        });
    },
    getAccount: (id) => {
        return ApiOperation.request({
            url: ApiConstants.ACCOUNT + `/${id}`,
        });
    },
    editAccount: (id, data) => {
        return ApiOperation.request({
            url: ApiConstants.ACCOUNT + `/${id}`,
            method: 'PUT',
            data: data,
        });
    },
    deleteAccount: (id) => {
        return ApiOperation.request({
            url: ApiConstants.ACCOUNT + `/${id}`,
            method: 'DELETE',
        });
    },
    createAccount: (data) => {
        return ApiOperation.request({
            url: ApiConstants.ACCOUNT,
            method: 'POST',
            data: data
        });
    },

    changePasswordByUser: (data) => {
        return ApiOperation.request({
            url: `${ApiConstants.USER}/change-password`,
            method: 'POST',
            data: data
        });
    },
}

export default AccountFactory