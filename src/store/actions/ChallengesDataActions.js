export const GET_CHALLENGES_DATA = 'GET_CHALLENGES_DATA';

const getChallengesData = challenges => {
  return {
    type: GET_CHALLENGES_DATA,
    challenges,
  };
};

export default {
  getChallengesData,
};
