import { useEffect, useState } from 'react';

export const Spinner = () => {
  const optionsPlayer2 = {
    rock: {
      class: 'fa-hand-fist rotate-[270deg] scale-x-[-1]',
    },
    scissors: {
      class: 'fa-hand-scissors',
    },
    paper: {
      class: 'fa-hand rotate-[270deg] scale-x-[-1]',
    },
  };

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => (counter === 2 ? 0 : counter + 1));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <i
      className={`fa-solid ${
        optionsPlayer2[Object.keys(optionsPlayer2)[counter]].class
      } text-white text-9xl`}
    ></i>
  );
};
