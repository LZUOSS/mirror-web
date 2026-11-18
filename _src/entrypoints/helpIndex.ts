import "./default";
import "../styles/help.scss";

const search = document.getElementById("help-search") as HTMLInputElement;
const entries = Array.from(
  document.querySelectorAll<HTMLElement>("[data-help-entry]"),
);
const empty = document.getElementById("help-empty");
const count = document.getElementById("help-count");

search.addEventListener("input", () => {
  const query = search.value.trim().toLocaleLowerCase();
  let visible = 0;
  entries.forEach((entry) => {
    const keywords = `${entry.dataset.helpKeywords || ""} ${entry.textContent}`;
    entry.hidden = !keywords.toLocaleLowerCase().includes(query);
    if (!entry.hidden) visible++;
  });
  empty.hidden = visible !== 0;
  count.textContent = `显示 ${visible} / ${entries.length} 个仓库`;
});
