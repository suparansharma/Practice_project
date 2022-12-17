import { DatePicker } from 'antd';
import React from 'react';
import { useState } from 'react';
import moment from 'moment';
const { RangePicker } = DatePicker;
// import 'antd/dist/antd.css';
const Daterange = () => {
    const [dates,setDates] = useState([])
    console.log(dates[0]);
    console.log(dates[0]);
    return (
        <div style={{ margin:20 }}>
            <RangePicker

onChange={(values) => {
         
    setDates(values.map(item=>{
      return  moment(item).format('YYYY-DD-MM')
    }))
  }}
            

            />
        </div>
    );
};

export default Daterange;