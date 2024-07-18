# Todo Application

A simple, responsive todo application built with Bootstrap and vanilla JavaScript.

## Features

- Create, toggle, and delete todos
- Data persistence using local storage
- Responsive design with Bootstrap
- Zero-build system using JavaScript import maps
- Web Components for modular design
- Maintenance mode feature using Service Workers

## Getting Started

### Prerequisites

- A modern web browser
- A local web server (e.g., Live Server for VS Code)

### Installation

1. Clone the repository:
   git clone https://github.com/0xAndreiD/todo-app.git

2. Navigate to the project directory:
   cd todo-app

3. Open the project in your preferred code editor.

4. Start your local web server and open the application in your browser.

## Usage

- Add a new todo by typing in the input field and pressing Enter or clicking the "Add Todo" button.
- Click on a todo to mark it as complete.
- Click the delete button to remove a todo.
- The application automatically saves your todos to local storage.

## Maintenance Mode

To activate maintenance mode:

1. Create a file named `isUnderMaintenance.json` in the `/static` directory.
2. Refresh the page to see the maintenance overlay.

To deactivate maintenance mode, simply delete the `isUnderMaintenance.json` file.

## Development

- `index.html`: Main HTML file
- `app.js`: Main application logic
- `todoComponent.js`: Web component for individual todo items
- `serviceWorker.js`: Service worker for maintenance mode feature
- `testData.js`: Provides initial test data

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
