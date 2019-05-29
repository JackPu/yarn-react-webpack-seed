import { FETCH_DATA, FETCH_TAGS } from './events';


export function fetchList() {
  return {
    type: FETCH_DATA,
    data: [
      {
        name: 'KungFu Hustle',
        rank: '8.3',
      },
      {
        name: 'CJ-7',
        rank: '6.4',
      },
      {
        name: 'The 007',
        rank: '7.8',
      },
    ],
  }
}

export function fetchTags() {
  return {
    type: FETCH_TAGS,
    data: ['Comedy', 'Movie', 'Stars'],
  };
}
