# Feature: Edit Existing Tasks

## I. Feature Name
Edit Existing Tasks

## II. Files to Change
- `index.html`
- `app.js`

## III. Implementation Plan

The goal is to allow users to edit the text and priority of existing tasks within the Task Tracker. We will reuse the existing `modal-task` for this functionality, dynamically adjusting its content based on whether a new task is being added or an existing one is being edited.

### `index.html` changes:
1.  No new elements are strictly required. The existing `<div class="modal-overlay" id="modal-task">` and its children (`#task-input`, `.priority-options`, `#task-add-btn`) will be repurposed.
2.  A hidden input field will be added to `modal-task` to store the index of the task being edited. This will help differentiate between adding and editing tasks.
    ```html
    <!-- Inside modal-task, after #task-input -->
    <input type="hidden" id="task-edit-index" value="-1" />
    ```

### `app.js` changes:
1.  **Task Tracker Module (`TRACKERS.tasks`):**
    *   Introduce a variable `editingTaskIndex` (or similar) to keep track of the index of the task currently being edited. Initialize it to `-1` (or null) to indicate no task is being edited.
    *   **Modify `render()` function:**
        *   Attach an event listener to each `task-card` (excluding the checkbox and delete button clicks) that, when clicked, will call a new `editTask` function (see below) with the task's index.
    *   **Create `editTask(index)` function:**
        *   This function will be called when a user clicks on a task card.
        *   Set `editingTaskIndex` to the `index` of the clicked task.
        *   Populate the `modal-task` inputs:
            *   Set the modal title (`modal-header h2`) to "Edit Task".
            *   Set `#task-input` value to the `text` of `todos[index]`.
            *   Set the active priority button to match `todos[index].priority`.
            *   Set `#task-add-btn` text to "Save Changes".
            *   Set the hidden `#task-edit-index` value to `index`.
        *   Open the `modal-task`.
    *   **Modify `addTask()` function (rename to `saveTask` for clarity):**
        *   This function will now handle both adding new tasks and saving edited tasks.
        *   Check the value of `editingTaskIndex` (or the hidden `#task-edit-index`).
            *   If it's `-1` (or null), proceed with adding a *new* task as currently implemented.
            *   If it contains a valid index, update `todos[editingTaskIndex]` with the new `text` and `priority` from the modal's inputs.
        *   After saving (either new or edited), reset `editingTaskIndex` to `-1` and revert modal title and button text to "New Task" and "Add Task" respectively, and clear the hidden input.
        *   Call `persist()`, `closeModal('modal-task')`, `render()`, and `renderStats('tasks')`.
    *   **Modify FAB event listener for tasks:**
        *   When the FAB opens the task modal, ensure `editingTaskIndex` is reset to `-1`, the modal title is "New Task", button text is "Add Task", and inputs are cleared. This ensures a clean state for adding new tasks.
    *   **Modify `closeModal()` in the `tasks` module:**
        *   Ensure that when the modal is closed (via 'x' button or overlay click), the `editingTaskIndex` is reset and the modal UI elements are reverted to their "New Task" state.

### `style.css` changes:
1.  No specific CSS changes are anticipated as the feature reuses existing modal and task card styles.

## IV. Acceptance Criteria

1.  **Open Edit Modal:** Clicking on any part of a task card (excluding the checkbox and delete button) will open the `modal-task` in "edit" mode.
2.  **Pre-fill Data:** When in "edit" mode, the modal's input field (`#task-input`) will be pre-filled with the task's current text, and the priority buttons will correctly highlight the task's current priority.
3.  **Modal Title & Button Text:** In "edit" mode, the modal title will display "Edit Task", and the button text will change to "Save Changes".
4.  **Save Changes:** Clicking the "Save Changes" button will update the task in the display and in `localStorage` with the new text and priority. The modal will then close.
5.  **Cancel Edit:** Closing the modal via the '✕' button or clicking the overlay in "edit" mode will discard changes and close the modal.
6.  **Add New Task:** The "Add Task" functionality via the FAB button will continue to work as before, opening the modal with title "New Task", button "Add Task", and empty inputs.
7.  **Data Persistence:** Edited tasks will persist correctly across app reloads.
8.  **No Visual Regressions:** All existing tracker functionalities and their UIs remain unaffected.
