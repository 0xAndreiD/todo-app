export class TodoComponent extends HTMLElement {
  constructor(todo, toggleCallback, deleteCallback) {
    super();
    this.todo = todo;
    this.toggleCallback = toggleCallback;
    this.deleteCallback = deleteCallback;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="form-check d-flex justify-content-between align-items-center mb-2 bg-light py-2 px-5 rounded-3">
                <input class="form-check-input" type="checkbox" ${
                  this.todo.completed ? "checked" : ""
                }>
                <label class="form-check-label ${
                  this.todo.completed ? "text-decoration-line-through" : ""
                }">
                    ${this.todo.text}
                </label>
                <button class="btn btn-danger btn-sm">Delete</button>
            </div>
        `;

    this.querySelector("input").addEventListener("change", () =>
      this.toggleCallback(this.todo.id)
    );
    this.querySelector("button").addEventListener("click", () =>
      this.deleteCallback(this.todo.id)
    );
  }
}

customElements.define("todo-item", TodoComponent);
