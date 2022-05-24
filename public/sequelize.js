// 용어 로딩
async function geWord() {
  try {
    const res = await axios.get("/words");
    const words = res.data;
    console.log(words);
    const tbody = document.querySelector("#word-list tbody");
    tbody.innerHTML = "";
    words.map(function (word) {
      const row = document.createElement("tr");

      // 로우 셀 추가
      let td = document.createElement("td");
      td.textContent = word.id;
      row.appendChild(td);
      td = document.createElement("td");
      td.textContent = word.ja;
      row.appendChild(td);
      td = document.createElement("td");
      td.textContent = word.en;
      row.appendChild(td);
      tbody.appendChild(row);
    });
  } catch (err) {
    console.error(err);
  }
}

// 용어 등록 시
document.getElementById("word-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = e.target.id.value;
  const ja = e.target.ja.value;
  const en = e.target.en.checked;

  try {
    await axios.post("/words", { id, en, ja });
    getWord();
  } catch (err) {
    console.error(err);
  }
  e.target.id.value = "";
  e.target.en.value = "";
  e.target.ja.value = "";
});
