import { toast } from 'react-toastify';
export default class ShowToastify {
    static showSuccessToast(message = "Thành công") {
        toast(message, {
            type: 'success',
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            closeButton: true,
        })
    }

    static showErrorToast(message = "Lỗi") {
        toast(message, {
            type: 'error',
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            closeButton: true,
        })
    }

    static showWarningToast(message) {
        toast(message, {
            type: 'warning',
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            closeButton: true,
        })
    }
}