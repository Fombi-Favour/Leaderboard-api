const recentList = document.querySelector('.recent-list');
const apiBaseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const idURL = 'Zl4d7IVkemOTTVg2fUdz/';

const scoreList = [];

const getScore = async () => {
  const response = await fetch(`${apiBaseURL}${idURL}scores/`)
    .then((res) => res.json)
    .then((data) => data.result)
    .catch(() => 'error');
  return response;
};

const addScore = async (data) => {
  const response = await fetch(`${apiBaseURL}${idURL}scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const res = await response.json();
  return res;
};

exports.addScore = addScore;

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