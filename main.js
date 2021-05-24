let myArray = [];

const element = document.querySelector(".sc-jwKygS");
const myFilter = document.createElement("input");
element.appendChild(myFilter);

const table = element.getElementsByTagName("table")[1];
const tbody = table.getElementsByTagName("tbody")[0];

for (let i = 0; i < tbody.rows.length; i++) {
  const key = tbody.rows[i].getAttribute("data-row-key");
  const description = tbody.rows[i].cells[2].innerHTML;
  myArray.push({ key, description });
}
console.log(myArray);

function wordFilter() {
  const word = myFilter.value;
  const validKeys = myArray.map((row) => {
    if (row.description.includes(word)) {
      return row.key;
    }
  });

  for (let i = 0; i < tbody.rows.length; i++) {
    const row = tbody.rows[i];
    if (!validKeys.includes(row.getAttribute("data-row-key"))) {
      row.setAttribute("style", "display: none");
    } else {
      row.setAttribute("style", "display: table-row");
    }
  }

  console.log(validKeys);
}

const tabs = document.querySelector(".ant-tabs-nav-wrap");

myFilter.addEventListener("keyup", wordFilter);

tabs.addEventListener("click", () => {
  console.log("hihihi");
});
