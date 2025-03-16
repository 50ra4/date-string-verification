import { useState } from 'react';
import { DateForm } from './components/DateForm/DateForm';

const doNothing = () => {};

function App() {
  const [date1, setDate1] = useState<string>('');

  return (
    <>
      <section className="m-4 p-5 border border-pink-600">
        <h1 className="text-pink-600 text-3xl font-bold mb-3">
          Date String Example
        </h1>
        <DateForm
          id={'date-1'}
          name={'example-1'}
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
          label={'Example1'}
          onBlur={doNothing}
        />
      </section>
    </>
  );
}

export default App;
