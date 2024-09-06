import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const AppFactory = {
    fetchSample: (data) => {
        return {
            Data: {}
        };
        // return ApiOperation.request({
        //     url: ApiConstants.CREATE_CATEGORY,
        //     method: 'POST',
        //     data: data
        // });
    },
    updateSample: (data) => {
        return {
            Data: {}
        };
        // return ApiOperation.request({
        //     url: ApiConstants.CREATE_CATEGORY,
        //     method: 'POST',
        //     data: data
        // });
    },
    // fetchLocales: () => {
    //     return ApiOperation.request({
    //         url: ApiConstants.LOCALE,
    //         method: 'GET',
    //     });
    // }
 
    fetchLocales: () => {
        return ApiOperation.request({
            url: ApiConstants.LOCALE,
            // method: 'GET',
        });
    }
}

export default AppFactory