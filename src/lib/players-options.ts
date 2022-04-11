interface IPayerOption {
  [key: string]: {
    class: string;
  };
}

export const optionsPlayer1: IPayerOption = {
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

export const optionsPlayer2: IPayerOption = {
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
