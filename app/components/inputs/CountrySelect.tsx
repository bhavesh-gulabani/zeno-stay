import useCountries from '@/app/hooks/useCountries';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import Select from 'react-select';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder='Anywhere'
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className='flex flex-row items-center gap-3'>
            <Image
              src={`/images/flags/${option.code.toLowerCase()}.svg`}
              width={20}
              height={20}
              alt='Flag'
              className='w-5 h-auto'
            />
            <div>
              {option.label},{' '}
              <span className='text-neutral-500 ml-1'>{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg',
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6',
            primary50: '#ffe4e6',
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
