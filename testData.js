const testTodos = [
  { id: 1, text: "Complete mini-project", completed: false },
  { id: 2, text: "Learn about service workers", completed: true },
  { id: 3, text: "Implement local storage", completed: false },
  { id: 4, text: "Test maintenance mode", completed: false },
  { id: 5, text: "Review Bootstrap styling", completed: true },
];

function loadTestData() {
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify(testTodos));
    console.log("Test data loaded into local storage");
  } else {
    console.log("Existing data found in local storage");
  }
}

loadTestData();
