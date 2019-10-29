import cowData from '../../helpers/data/cows';
import './cowList.scss';

const buildCows = () => {
  cowData.getCows()
    .then((response) => {
      console.log('cow array from cow list', response);
    })
    .catch((error) => {
      console.log('shit broke', error);
    });
};

export default { buildCows };
