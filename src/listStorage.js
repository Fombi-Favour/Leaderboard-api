const recentList = document.querySelector('.recent-list');
const apiBaseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const idURL = 'BUOIgYkttZc70qv998Ig/';

let scoreList = [];

const getScore = async () => {
  const response = await fetch(`${apiBaseURL}${idURL}scores/`);

  const userData = response.json();
  return userData;
};

const displayScore = () => {
  getScore().then((res) => {
    if (typeof res === 'object') {
      scoreList = Array.from(res);
      recentList.innerHTML = '';
      if (scoreList.length > 0) {
        scoreList.forEach((score) => {
          recentList.innerHTML += `<li class="list-item">${score.name}: ${score.score}</li>`;
        });
      }
    }
  });
};

const addScore = async (data) => {
  await fetch(`${apiBaseURL}${idURL}scores/`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

exports.addScore = addScore;
exports.getScore = getScore;
exports.displayScore = displayScore;

// const scoreList = [
//   { name: 'john', score: 100 },
//   { name: 'jane', score: 200 },
//   { name: 'jack', score: 300 },
//   { name: 'jill', score: 400 },
//   { name: 'mary', score: 500 },
//   { name: 'peter', score: 600 },
//   { name: 'peter', score: 700 },
//   { name: 'peter', score: 800 },
//   { name: 'peter', score: 900 },
// ];

// const displayScore = () => {
//   scoreList.forEach((score) => {
//     recentList.innerHTML += `<li class="list-item">${score.name}: ${score.score}</li>`;
//   });
// };

// exports.displayScore = displayScore;