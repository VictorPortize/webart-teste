import {useMemo} from 'react';
import {sortNumberArray} from '../../utils/ArrayHelper';

const useModalAlert = (data: Array<number>) => {
  function calcMedia(list: Array<number>): number {
    return list.reduce((prev, next) => prev + next, 0) / list.length;
  }

  const values = useMemo(() => {
    let sortedList = sortNumberArray(data);

    return {
      max: sortedList[sortedList.length - 1],
      min: sortedList[0],
      media: calcMedia(sortedList),
    };
  }, [data]);

  return {
    values,
  };
};

export default useModalAlert;
