import { useState } from 'react';

const Square = () => {
  const [value, setValue] = useState<string>('');
  const clickHandler = () => setValue('X');

  return (
    <button
      className="square"
      onClick={clickHandler}
    >
      {value}
    </button>
  );
};

export default Square;
