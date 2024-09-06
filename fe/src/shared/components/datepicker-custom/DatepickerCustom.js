import React from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
export default function DatepickerCustom(props) {
    const { selectedDate, setSelectedDate,defaultValue ,isDisabled} = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    disabled = {!isDisabled}
                    defaultValue={defaultValue}
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    showTimeSelect
                    format="YYYY-MM-DD"
                    views={['year', 'month', 'day']}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
