import Utils from './Utils';
import dayjs from 'dayjs';

export default class Validator {

    static genValidate = (validate, fieldName) => {
        let _validate = {};
        validate.forEach((e, i) => {
            _validate[`${fieldName}_${i}`] = e;
        });
        return _validate;
    };
    // static required (value) {
    //     return value?.toString()?.trim() ? undefined : '* Không được để trống';
    // }
    static required = (message) => (value) => {

        return value ? undefined : message;
    };
    static validateDeadline = (message) => (value) => {
        const currentDate = dayjs();
        const selectedDate = dayjs(value);

        return selectedDate.isAfter(currentDate) ? undefined : message;
    };
    static money = (value) =>
        !/^[0-9.]*$/i.test(value) && value != null
            ? 'Giá trị không đúng định dạng'
            : undefined;
    static maxLength = (max) => (value) =>
        value && value.length > max ? `* Không quá ${max} kí tự` : undefined;
    static maxLengthh = (max, message) => (value) =>
        value && value.length > max ? message : undefined;
    static minLength = (min) => (value) =>
        value && value.length < min ? `* Không ít hơn ${min} kí tự` : undefined;
    static checkChar = (value) => {
        // return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/i.test(value) && value ? "Không chưa kí tự đặc biệt" : undefined
    };

    static checkEmotion = (value) => {
        return value != null && /^\+\d* ?\d*$/i.test(value)
            ? 'Không chưa kí tự đặc biệt'
            : undefined;
    };
    static maxDate = (value) => {
        if (value > new Date()) {
            return 'Ngày không được lớn hơn ngày hiện tại';
        }
        return undefined;
    };
    static CheckedDate = (dateCheck, type) => (value) => {
        if (value && dateCheck) {
            switch (type) {
                case 1:
                    if (value && value > dateCheck) {
                        return 'Thời gian đăng bài từ phải nhỏ hơn hoặc bằng Thời gian đăng bài đến';
                    }
                    break;
                case 2:
                    if (value && value < dateCheck) {
                        return 'Thời gian đăng bài đến phải lớn hơn hoặc bằng Thời gian đăng bài đến';
                    }
                    break;
                default:
                    return undefined;
            }
        } else {
            return undefined;
        }
    };
    static requiredDate = (date, type) => (value) => {
        if (value && date) {
            switch (type) {
                case 1:
                    if (value && value > date) {
                        return 'Thời gian từ phải nhỏ hơn hoặc bằng Thời gian đăng bài đến';
                    }
                    break;
                case 2:
                    if (value && value < date) {
                        return 'Thời gian đến phải lớn hơn hoặc bằng Thời gian từ';
                    }
                    break;
                default:
                    return undefined;
            }
        } else {
            return undefined;
        }
    };

    static checkPriceMaxReduce = (price) => (value) => {
        if (
            value &&
            price &&
            parseInt(value?.toString().split(',').join('')) >
            parseInt(price?.toString().split(',').join(''))
        ) {
            return 'Không thể tìm kiếm sản phẩm giá từ lớn hơn giá đến';
        }
        return undefined;
    };
    static checkPriceMaxIncrea = (price) => (value) => {
        if (
            value &&
            price &&
            parseInt(value?.toString().split(',').join('')) <
            parseInt(price?.toString().split(',').join(''))
        ) {
            return 'Không thể tìm kiếm sản phẩm giá đến nhỏ hơn giá từ';
        }
        return undefined;
    };
    static checkHeightFrom = (height) => (value) => {
        if (value > 0 && height > 0 && value >= height) {
            return 'Giá trị từ phải nhỏ hơn giá trị đến';
        }
        return undefined;
    };
    static checkHeightTo = (height) => (value) => {
        if (value && height && value <= height) {
            return 'Giá trị đến phải lớn hơn giá trị từ';
        }
        return undefined;
    };
    static checkWeightFrom = (height) => (value) => {
        if (
            value &&
            height &&
            parseInt(value?.toString().split(',').join('')) >=
            parseInt(height?.toString().split(',').join(''))
        ) {
            return 'Giá trị từ phải nhỏ hơn giá trị đến';
        }
        return undefined;
    };
    static checkWeightTo = (height) => (value) => {
        if (
            value &&
            height &&
            parseInt(value?.toString().split(',').join('')) <=
            parseInt(height?.toString().split(',').join(''))
        ) {
            return 'Giá trị đến phải lớn hơn giá trị từ';
        }
        return undefined;
    };
    static checkPrice = (value) => {
        return value && value < 0
            ? 'Giá tiền phải lớn hơn hoặc bằng 0'
            : undefined;
    };
    static checkSymbols = (value) => {
        return value && /[!$%^&*()_+|~=`{}[\]:/;<>?@#]/i.test(value)
            ? 'Không chưa kí tự đặc biệt'
            : undefined;
    };
    static checkCharRegex = (value) => {
        return value &&
            !/^[/\s/A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ0-9_.,+-]+$/i.test(
                value,
            )
            ? 'Không đúng định dạng'
            : undefined;
    };

    static checkSKU = (value) => {
        return value && !/^[A-Z0-9]*$/i.test(value)
            ? 'Không đúng định dạng'
            : undefined;
    };

    static repeatValue = (list, rowIndex, groupIndex) => (value) => {
        let newList = [];
        let error = false;
        list.forEach((group, groupKey) => {
            group.list.forEach((s, sKey) => {
                s['Key'] = group.key;
                s['ColorId'] = group.key;
                s['RowIndex'] = groupKey;
                s['GroupIndex'] = sKey;
                newList.push(s);
            });
        });
        if (value) {
            newList?.map((x, index) => {
                if (x?.Barcode == value && index > 0) {
                    if (
                        x?.RowIndex != rowIndex &&
                        x?.GroupIndex != groupIndex
                    ) {
                        if (x?.RowIndex == rowIndex) {
                            if (x?.GroupIndex != groupIndex) {
                                error = true;
                            } else {
                                error = false;
                            }
                        } else {
                            error = true;
                        }
                    }
                } else {
                    error = false;
                }
            });
        }

        if (error) {
            return `* Giá trị bị trùng lặp`;
        } else {
            return undefined;
        }
    };
    //email
    static email = (message) => (value) =>
        value &&
            !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(value)
            ? message
            : undefined;


    //phone 
    static phone = (message) => (value) =>
        value &&
            !/(090|093|070|072|079|077|076|078|089|088|091|094|083|084|085|081|082|032|033|034|035|036|037|038|039|086|096|097|098|099|059|092|052|056|058)+([0-9]{7})\b/i.test(value)
            ? message
            : undefined;

}
