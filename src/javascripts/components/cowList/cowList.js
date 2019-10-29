import smash from '../../helpers/data/smash';
import './cowList.scss';

const buildCows = () => {
  smash.getCompleteCows()
    .then((response) => {
      console.log('cow array from cow list', response);
    })
    .catch((error) => {
      console.log('shit broke', error);
    });
};

export default { buildCows };
