// დავალება 1
const div = document.getElementById("main");

const ul = document.createElement("ul");
div.appendChild(ul);

const array = [
  {
    username: "ლუკა",
    age: 18,
  },

  {
    username: "გიორგი",
    age: 12,
  },

  {
    username: "ნიკა",
    age: 28,
  },

  {
    username: "ლევანი",
    age: 17,
  },

  {
    username: "დათო",
    age: 18,
  },
];

let names = array.map((person) => {
  if (person.age >= 18) {
    return person.username;
  }
});

names.forEach((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  ul.appendChild(li);
});


// დავალება 2 
const removee = document.getElementById('remove')
const add1 = document.getElementById('add')
add1.style.display = 'none';

function remove() {
  ul.remove();
  removee.style.display = 'none'
  add1.style.display = 'block'

}


function add() {
    main.appendChild(ul);
    removee.style.display = 'block'
    add1.style.display = 'none';
}


// დავალება 3
function btn() {
    const link = document.getElementById("link");
    link.classList.toggle("blank");
  }