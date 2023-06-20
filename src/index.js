import { displayScore, addScore } from './listStorage.js';
import './style.css';

const forms = document.querySelector('#forms');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
  displayScore();
});

forms.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userName = document.getElementById('name').value;
  const userScore = document.getElementById('score').value;
  if (userName !== '' && userScore !== '') {
    await addScore(userName, userScore);
    // console.log('Added!!!');
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
  }

  displayScore();
});
