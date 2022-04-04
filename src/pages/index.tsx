import { useState } from 'react';
import { rockScissorsPaper, TGameOptions } from '../lib/rock-scissors-paper';
import { randomNumber } from '../lib/random-number';

type TOptionPlayer = TGameOptions | string;

export default function Home() {
  const optionsPlayer1 = {
    rock: {
      class: 'fa-hand-back-fist rotate-90',
    },
    scissors: {
      class: 'fa-hand-scissors scale-x-[-1]',
    },
    paper: {
      class: 'fa-hand rotate-90',
    },
  };

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

  const [optionPlayer1, setOptionPlayer1] = useState<TOptionPlayer>('');
  const [optionPlayer2, setOptionPlayer2] = useState<TOptionPlayer>('');
  const [winner, setWinner] = useState<TOptionPlayer | 'Tie'>('');

  const handleOptionClick = (optionPlay: TOptionPlayer): void => {
    const randomPlayer2 = Object.keys(optionsPlayer2)[randomNumber(0, 2)];
    setOptionPlayer1(optionPlay);
    setOptionPlayer2(randomPlayer2);
    setWinner(rockScissorsPaper(optionPlay, randomPlayer2));
  };

  const handleRestartClick = (): void => {
    setOptionPlayer1('');
    setOptionPlayer2('');
    setWinner('');
  };

  return (
    <>
      <h1 className="text-center text-3xl text-white font-bold py-4">
        Rock Scissors Paper
      </h1>

      <section className="w-full min-h-[calc(100vh-168px)] grid grid-cols-2 relative">
        <div className="grid place-content-center">
          <i
            className={`fa-solid ${optionsPlayer1[optionPlayer1]?.class} text-white text-9xl`}
          ></i>
        </div>

        {winner !== '' && (
          <div className="fixed w-full h-screen top-0 right-0 flex justify-center items-center flex-col">
            <div className="text-white font-bold text-2xl px-4 py-4">{`${
              winner === 'tie' ? 'Tie !' : `${winner} Won!`
            }`}</div>
            <button
              onClick={handleRestartClick}
              className="text-white border rounded px-4 py-2 cursor-pointer hover:bg-white hover:text-blue-700"
            >
              Restart
            </button>
          </div>
        )}

        <div className="grid place-content-center">
          <i
            className={`fa-solid ${optionsPlayer2[optionPlayer2]?.class} text-white text-9xl`}
          ></i>
        </div>
      </section>

      <section className="flex justify-center items-center h-[100px]">
        <button
          type="button"
          className="border rounded-full p-4 mr-2 cursor-pointer"
          onClick={() => handleOptionClick('rock')}
        >
          <i className="fa-solid fa-hand-back-fist text-white text-5xl rotate-90"></i>
        </button>
        <button
          type="button"
          className="border rounded-full p-4 mr-2 cursor-pointer1"
          onClick={() => handleOptionClick('scissors')}
        >
          <i className="fa-solid fa-hand-scissors text-white text-5xl scale-x-[-1]"></i>
        </button>
        <button
          type="button"
          className="border rounded-full p-4 cursor-pointer1"
          onClick={() => handleOptionClick('paper')}
        >
          <i className="fa-solid fa-hand text-white text-5xl rotate-90"></i>
        </button>
      </section>
    </>
  );
}
