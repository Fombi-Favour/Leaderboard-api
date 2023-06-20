import { displayScore, addScore } from './listStorage.js';
import './style.css';

const forms = document.getElementById('forms');
// const refresh = document.getElementById("refresh");

// refresh.addEventListener("click", () => {
//   displayScore();
// });

forms.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  if (name !== '' && score !== '') {
    const lists = {
      name,
      score,
    };
    await addScore(lists);
    console.log('Added!!!');
  }

  document.getElementById('name').value = '';
  document.getElementById('score').value = '';

//   displayScore();
});
