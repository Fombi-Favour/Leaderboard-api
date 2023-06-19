const scoreList = [
  { name: 'john', score: 100 },
  { name: 'jane', score: 200 },
  { name: 'jack', score: 300 },
  { name: 'jill', score: 400 },
  { name: 'mary', score: 500 },
  { name: 'peter', score: 600 },
  { name: 'peter', score: 700 },
  { name: 'peter', score: 800 },
  { name: 'peter', score: 900 },
];

const recentList = document.querySelector('.recent-list');

const displayScore = () => {
  scoreList.forEach((score) => {
    recentList.innerHTML += `<li class="list-item">${score.name}: ${score.score}</li>`;
  });
};

exports.displayScore = displayScore;