/** @format */
import DatePicker from 'react-datepicker';
import { useState } from 'react';

const Index = () => {
  const a = 1;
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  console.log(a);

  return (
    <div>
      home
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        // locale='pt-BR'
        showTimeSelect
        timeFormat='p'
        timeIntervals={15}
        dateFormat='Pp'
      />
    </div>
  );
};
export default Index;
