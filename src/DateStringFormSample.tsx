import { ChangeEvent, memo, useCallback, useState } from 'react';
import { DateForm } from './components/DateForm/DateForm';

const doNothing = () => {};

type Props = {
  className?: string;
  title: string;
};

export const DateStringFormSample = memo(function DateFormSample({
  className,
  title,
}: Props) {
  const [date1, setDate1] = useState<string>('');
  const [date2, setDate2] = useState<string>('');
  const [date3, setDate3] = useState<string>('');

  const onChange1 = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setDate1(e.target.value),
    [],
  );
  const onChange2 = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setDate2(e.target.value),
    [],
  );
  const onChange3 = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setDate3(e.target.value),
    [],
  );

  return (
    <section className={`${className || ''} p-5 border border-pink-600`}>
      <h2 className="text-pink-600 text-3xl font-bold mb-3">{title}</h2>
      <div className="space-y-3">
        <DateForm
          id={'date-1'}
          name={'example-1'}
          value={date1}
          onChange={onChange1}
          label={'Example1'}
          onBlur={doNothing}
        />
        <DateForm
          id={'date-2'}
          name={'example-3'}
          value={date2}
          onChange={onChange2}
          label={'Example2'}
          onBlur={doNothing}
        />
        <DateForm
          id={'date-3'}
          name={'example-3'}
          value={date3}
          onChange={onChange3}
          label={'Example3'}
          onBlur={doNothing}
        />
      </div>
    </section>
  );
});
