import { GameModeMenu } from "../interface/game";

export const gameModes: GameModeMenu[] = [
  {
    id: 'gbn',
    title: 'Guess By Name',
    description: 'Guess the country flag by name',
    isAvailable: true,
    screen: '/guess-by-name'
  },
  {
    id: 'gbf',
    title: 'Guess By Flag',
    description: 'Guess the country name by flag',
    isAvailable: true,
    screen: '/guess-by-flag'
  },
  {
    id: 'ctf',
    title: 'Color the flag',
    description: 'Assign the right color to the flag by name',
    isAvailable: true,
    screen: '/color-the-flag'
  },
  {
    id: 'gbm',
    title: 'Guess By Map',
    description: 'Guess the country name by the shape of the map',
    isAvailable: false,
    screen: ''
  },
  {
    id: 'r',
    title: 'Random',
    description: 'Get a combination of all the game modes available',
    isAvailable: false,
    screen: ''
  }
];
