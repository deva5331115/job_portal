import { helper } from '@ember/component/helper';

export default helper(function range([start, end]) {
  let rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
});
