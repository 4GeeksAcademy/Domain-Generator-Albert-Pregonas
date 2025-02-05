document.addEventListener("DOMContentLoaded", () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const generateDomains = () => {
    let domains = [];

    for (let a of adj) {
      for (let p of pronoun) {
        for (let n of noun) {
          const domain = `${p}${a}${n}.com`;
          domains.push(domain);
        }
      }
    }

    const domainList = document.getElementById("domainList");
    domainList.innerHTML = "";

    domains.forEach(domain => {
      const listItem = document.createElement("li");
      listItem.classList.add("text-dark", "mb-2");
      listItem.textContent = domain;
      domainList.appendChild(listItem);
    });
  };

  generateDomains();
});
