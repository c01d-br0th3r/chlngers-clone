import { GET_CHALLENGES_DATA } from '../actions/ChallengesDataActions';

const challengesData = (state = [], action) => {
  switch (action.type) {
    case GET_CHALLENGES_DATA:
      return [...state, ...action.challenges];
    default:
      return state;
  }
};

export default challengesData;
