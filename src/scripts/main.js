'use strict';

const currentList = document.querySelector('ul');
const salaryToNumber = s => s.replace(/[,$]/g, '');

function sortList(list) {
  const sortedList = [...list.children].sort((a, b) => (
    salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary)
  ));

  list.append(...sortedList);
}

function getEmployees(list) {
  return [...list.children].map((
    { innerText, dataset: { position, salary, age } }
  ) => ({
    name: innerText,
    position,
    salary,
    age,
  }));
}

sortList(currentList);
getEmployees(currentList);
