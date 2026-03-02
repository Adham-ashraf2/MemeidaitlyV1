const resultBox = document.getElementById("searchResult");
const loadBtn = document.getElementById("loadLiveMemes");

let memes = [];

async function loadMemes() {
  try {
    const res = await fetch("MEMES.json");
    const data = await res.json();
    memes = data.MEMES || [];
  } catch (err) {
    console.error("Failed to load MEMES.json:", err);
  }
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generateMemes() {
  if (!memes.length) {
    resultBox.innerHTML = "<p>No memes loaded.</p>";
    return;
  }

  const randomThree = shuffleArray([...memes]).slice(0, 3);

  resultBox.innerHTML = randomThree.map(meme => `
    <div class="card2">
      <img src="${meme.img}" alt="${meme.title}">
      <div class="card2-body">
        <h3>${meme.title}</h3>
      </div>
    </div>
  `).join("");
}
loadBtn.addEventListener("click", generateMemes);
loadMemes();