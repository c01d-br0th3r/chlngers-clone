const MILLISECOND = 1000;
const SECOND = 60;
const MINUTE = 60;
const HOUR = 24;

export const calcStartDay = startDate => {
  const today = new Date();
  const gap = today.getTime() - startDate.getTime();

  const dday = Math.ceil(gap / (MILLISECOND * SECOND * MINUTE * HOUR));

  let ret = '';

  if (dday > 0) ret = `${dday}일 후 시작`;
  else if (dday === 0) ret = '오늘부터 시작';
  else ret = '이미 시작';

  return ret;
};
