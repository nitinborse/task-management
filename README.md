
# Task Management Application

This is a task management application built with Angular 16. It provides a user-friendly interface for managing tasks, including viewing, editing, and deleting tasks. The application uses Tailwind CSS for styling and features a mock API for data interaction.

## Features

- **Login**: Credentials for login are:
  - Username: `admin`
  - Password: `1234`
- **Task List View (`/tasks`)**: Displays all tasks in a table format with a delete task option.
- **Task Detail View (`/tasks/:id`)**: View details of a single task.
- **Task Edit View (`/tasks/:id/edit`)**: Edit or update task details.
- **Login Component**: A login page for authentication.
- **Header**: Displays user details and provides a logout button.
- **AuthGuard**: Route protection is implemented to prevent unauthorized access.
- **Mock API**: Mock API is used for handling GET, PUT, and DELETE requests.
- **Service File**: API integration via Angular service.
- **Toaster Service**: Toast messages are displayed for user notifications.

## Technologies Used

- **Angular 16**: Frontend framework
- **Tailwind CSS**: For responsive UI design
- **Mock API**: To simulate real API calls for CRUD operations
- **Toaster Service**: For showing success and error messages

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/nitinborse/task-management.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   ng serve
   ```

4. Open the app in your browser at `http://localhost:4200/`.

## Authentication Details

- Login credentials:
  - **Username**: `admin`
  - **Password**: `1234`

## Features Overview

- **Task List View (`/tasks`)**: 
  - Displays all tasks in a table.
  - Tasks can be deleted using the delete icon button.

- **Task Detail View (`/tasks/:id`)**:
  - Shows detailed information about the selected task.

- **Task Edit Component (`/tasks/:id/edit`)**:
  - Allows editing or updating a task.

- **Header Component**:
  - Displays logged-in user details.
  - Provides a logout button to log out from the app.

## Toaster Messages

To provide feedback, the application uses a toaster service to show success or error messages when actions like updating or deleting tasks are performed.

## License

This project is licensed under the MIT License.
