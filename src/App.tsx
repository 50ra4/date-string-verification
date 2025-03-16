import { useState } from 'react';
import { DateForm } from './components/DateForm/DateForm';

const doNothing = () => {};

function App() {
  const [date1, setDate1] = useState<string>('');
  const [date2, setDate2] = useState<string>('');
  const [date3, setDate3] = useState<string>('');

  return (
    <div className="p-4 flex justify-center items-center">
      <section className="flex-1 max-w-4xl  p-5 border border-pink-600">
        <h1 className="text-pink-600 text-3xl font-bold mb-3">
          Date String Example
        </h1>
        <div className="space-y-3">
          <DateForm
            id={'date-1'}
            name={'example-1'}
            value={date1}
            onChange={(e) => setDate1(e.target.value)}
            label={'Example1'}
            onBlur={doNothing}
          />
          <DateForm
            id={'date-2'}
            name={'example-3'}
            value={date2}
            onChange={(e) => setDate2(e.target.value)}
            label={'Example2'}
            onBlur={doNothing}
          />
          <DateForm
            id={'date-3'}
            name={'example-3'}
            value={date3}
            onChange={(e) => setDate3(e.target.value)}
            label={'Example3'}
            onBlur={doNothing}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
