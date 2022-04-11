import { useEffect, useState } from 'react';
import { optionsPlayer1, optionsPlayer2 } from '../../lib/players-options';

interface IProps {
  side?: 'left' | 'right';
}

export const Spinner = ({ side = 'right' }: IProps) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => (counter === 2 ? 0 : counter + 1));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (side === 'left')
    return (
      <i
        className={`fa-solid ${
          optionsPlayer1[Object.keys(optionsPlayer1)[counter]].class
        } text-white text-9xl`}
      ></i>
    );

  return (
    <i
      className={`fa-solid ${
        optionsPlayer2[Object.keys(optionsPlayer2)[counter]].class
      } text-white text-9xl`}
    ></i>
  );
};
