import { useState } from 'react';
import { DateForm } from './components/DateForm/DateForm';

const doNothing = () => {};

export function DateExampleSection() {
  const [date1, setDate1] = useState<string>('');

  return (
    <section className="m-4 p-5 border border-pink-600">
      <h2 className="text-pink-600 text-3xl font-bold mb-3">
        Date String Example
      </h2>
      <DateForm
        id={'date-1'}
        name={'example-1'}
        value={date1}
        onChange={(e) => setDate1(e.target.value)}
        label={'example1'}
        onBlur={doNothing}
      />
    </section>
  );
}
