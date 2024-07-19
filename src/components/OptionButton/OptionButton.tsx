import React from 'react';

interface IProps {
  type: string;
  onClick: (type: string) => void;
}

export const OptionButton = ({ type, onClick }: IProps): JSX.Element => {
  if (type === 'rock')
    return (
      <button
        type="button"
        className="border rounded-full p-4 mr-2 cursor-pointer"
        onClick={() => onClick('rock')}
      >
        <i className="fa-solid fa-hand-back-fist text-white text-5xl rotate-90"></i>
      </button>
    );
  if (type === 'scissors')
    return (
      <button
        type="button"
        className="border rounded-full p-4 mr-2 cursor-pointer1"
        onClick={() => onClick('scissors')}
      >
        <i className="fa-solid fa-hand-scissors text-white text-5xl scale-x-[-1]"></i>
      </button>
    );
  if (type === 'paper')
    return (
      <button
        type="button"
        className="border rounded-full p-4 cursor-pointer1"
        onClick={() => onClick('paper')}
      >
        <i className="fa-solid fa-hand text-white text-5xl rotate-90"></i>
      </button>
    );
};
