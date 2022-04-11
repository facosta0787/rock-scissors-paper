import { useState } from 'react';
import { rockScissorsPaper, TGameOptions } from '../lib/rock-scissors-paper';
import { randomNumber } from '../lib/random-number';
import { Spinner } from '../components/Spinner/Spinner';
import { optionsPlayer1, optionsPlayer2 } from '../lib/players-options';
import { OptionButton } from '../components/OptionButton/OptionButton';

type TOptionPlayer = TGameOptions | string;

export default function Home() {
  const [optionPlayer1, setOptionPlayer1] = useState<TOptionPlayer>('');
  const [optionPlayer2, setOptionPlayer2] = useState<TOptionPlayer>('');
  const [winner, setWinner] = useState<TOptionPlayer | 'Tie'>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOptionClick = (optionPlay: TOptionPlayer): void => {
    const randomPlayer2 = Object.keys(optionsPlayer2)[randomNumber(0, 2)];
    setOptionPlayer1(optionPlay);
    setIsLoading(true);
    setTimeout(() => {
      setOptionPlayer2(randomPlayer2);
      setWinner(rockScissorsPaper(optionPlay, randomPlayer2));
      setIsLoading(false);
    }, 1000);
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
          {isLoading ? (
            <Spinner side="left" />
          ) : (
            <i
              className={`fa-solid ${optionsPlayer1[optionPlayer1]?.class} text-white text-9xl`}
            ></i>
          )}
        </div>

        {winner !== '' && (
          <div className="fixed w-full h-screen top-0 right-0 flex justify-center items-center flex-col">
            <div className="text-white font-bold text-2xl px-4 py-4">{`${
              winner === 'tie' ? 'Tie !' : `${winner} Won!`
            }`}</div>
            <button
              onClick={handleRestartClick}
              className="text-white border rounded px-4 py-2 cursor-pointer hover:bg-white hover:text-blue-700 font-semibold"
            >
              Restart
            </button>
          </div>
        )}

        <div className="grid place-content-center">
          {isLoading ? (
            <Spinner />
          ) : (
            <i
              className={`fa-solid ${optionsPlayer2[optionPlayer2]?.class} text-white text-9xl`}
            ></i>
          )}
        </div>
      </section>

      <section className="flex justify-center items-center h-[100px]">
        <OptionButton type="rock" onClick={handleOptionClick} />
        <OptionButton type="scissors" onClick={handleOptionClick} />
        <OptionButton type="paper" onClick={handleOptionClick} />
      </section>
    </>
  );
}
