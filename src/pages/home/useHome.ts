import {useEffect, useState} from 'react';
import {GestureResponderEvent} from 'react-native';
import {sortNumberArray} from '../../utils/ArrayHelper';

const useHome = () => {
  const [ageInput, setAgeInput] = useState<string>('');
  const [ageList, setAgeList] = useState<Array<number>>([]);
  const [showModalAlert, setShowModalAlert] = useState(false);

  useEffect(() => {
    if (ageList.length > 1) {
      let sortedAgeList = sortNumberArray(ageList);
      setAgeList(sortedAgeList);
    }
  }, [ageList]);

  function validateAge(age: number) {
    if (age <= 0) {
      return false;
    }
    if (age % 1 !== 0) {
      return false;
    }
    return true;
  }

  function toggleModal() {
    setShowModalAlert(oldValue => !oldValue);
  }

  function addToAgeList(e: GestureResponderEvent) {
    e.preventDefault();
    let numberInput = Number(ageInput);
    if (validateAge(numberInput)) {
      setAgeList([...ageList, numberInput]);
      setAgeInput('');
    }
  }

  function handleInputText(text: string) {
    setAgeInput(text.replace(/\D/g, ''));
  }

  return {
    ageList,
    addToAgeList,
    ageInput,
    setAgeInput,
    toggleModal,
    showModalAlert,
    handleInputText,
  };
};

export default useHome;
