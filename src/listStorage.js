const apiBaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/j7q3bFnlZmGFgxFRypCD/scores';
const recentList = document.querySelector('.recent-list');

const displayScore = (scores) => {
  scores.forEach((score) => {
    recentList.innerHTML += `<li class="list-item">${score.user}: ${score.score}</li>`;
  });
};

const getScores = async () => {
  const response = await fetch(apiBaseUrl);
  const score = (await response.json()).result;

  displayScore(score);
};

getScores();

const refresh = async () => {
  recentList.innerHTML = '';
  await getScores();
};

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', async () => {
  await refresh();
});

const postScores = async (name, scores) => {
  const response = await fetch(apiBaseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: name,
      score: scores,
    }),
  });

  const res = await response.json();
  return res;
};

const submitScores = () => {
  const forms = document.querySelector('#forms');
  const names = document.querySelector('#names');
  const scores = document.querySelector('#scores');

  forms.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userName = names.value;
    const userScore = scores.value;
    if (names.value.length > 0 && scores.value.length > 0) {
      await postScores(userName, userScore);
      forms.reset();
    }
  });
};

submitScores();