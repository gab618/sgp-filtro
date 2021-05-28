let root = document.querySelector("#root");
let myArray = [];

let myFilterInput = document.createElement("input");
myFilterInput.type = "search";
myFilterInput.classList.add("ant-input");
myFilterInput.style.marginTop = "16px";
myFilterInput.placeholder = "Filtrar itens";
let element;

let table;
let tbody;

function generateFilterInput() {
  setTimeout(() => {
    element = document.querySelector(".sc-jwKygS");
    element.appendChild(myFilterInput);

    table = element.getElementsByTagName("table")[1];
    tbody = table.getElementsByTagName("tbody")[0];

    myArray = [];
    for (let i = 0; i < tbody.rows.length; i++) {
      const key = tbody.rows[i].getAttribute("data-row-key");
      const description = tbody.rows[i].cells[2].innerHTML.toLowerCase();
      myArray.push({ key, description });
    }

    myFilterInput.addEventListener("keyup", wordFilter);
  }, 150);
}

function wordFilter() {
  const word = myFilterInput.value.toLowerCase();
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
}

function handleRootClick() {
  const tabs = document.querySelector(".ant-tabs-nav-wrap");

  if (tabs) {
    tabs.addEventListener("click", generateFilterInput);
  }
}

root.addEventListener("click", handleRootClick);
