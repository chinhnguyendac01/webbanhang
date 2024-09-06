import md5 from 'md5';
import { toast } from 'react-toastify';
export default class Utils {
    static MD5(val) {
        return md5(`${val}`);
    }
    static formatCurrencyString(inputString) {
        // Kiểm tra xem chuỗi đầu vào có phù hợp không
        if (typeof inputString !== 'string') {
            return '';
        }

        // Sử dụng regex để tìm số trong chuỗi
        const match = inputString.match(/\d+/);

        // Kiểm tra xem có số nào không
        if (!match) {
            return 'No number found in the input string';
        }

        // Lấy số từ kết quả match
        const number = match[0];

        // Định dạng số thành chuỗi tiền tệ
        const formattedNumber = Number(number).toLocaleString('en-US');

        // Thay thế số trong chuỗi đầu vào bằng số đã được định dạng
        const result = inputString.replace(/\d+/, formattedNumber);

        return result;
    }
    static formatLasary = (number) => {
        const formattedNumber = Number(number).toLocaleString('en-US');
        return formattedNumber;
    };
    static showSuccessToast(option) {
        toast(option?.message, {
            type: 'success',
            autoClose: 3000,
            theme: 'colored',
            ...option,
        });
    }

    static showErrorToast(option) {
        toast(option?.message, {
            type: 'error',
            autoClose: 3000,
            theme: 'colored',
            ...option,
        });
    }
    static showInfoToast(option) {
        toast(option?.message, {
            type: 'info',
            autoClose: 3000,
            theme: `colored`,
            ...option,
        });
    }
}
