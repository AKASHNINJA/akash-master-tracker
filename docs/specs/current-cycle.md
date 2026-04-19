# Feature: Delete Confirmation Modal

## Description
This feature introduces a confirmation dialog (modal) before a user can delete an item from any of the trackers (Tasks, Water, Food, Fitness, Custom). This prevents accidental deletions, improving the overall user experience and data integrity.

## Files to Change

1.  `index.html`: Add a new modal overlay structure for the delete confirmation.
2.  `app.js`:
    *   Implement functions to open and close the new delete confirmation modal.
    *   Modify existing `delete-btn` event listeners within each tracker module (`tasks`, `water`, `food`, `fitness`, `custom`) to open this confirmation modal.
    *   Add logic to the confirmation modal to execute the actual deletion only upon user confirmation.
3.  `style.css`: Add necessary CSS rules for the new modal to ensure it matches the app's existing dark mobile-first design.

## Acceptance Criteria

1.  A new `<div class="modal-overlay" id="modal-confirm-delete">` element is added to `index.html`, containing a modal with a confirmation message (e.g., "Are you sure you want to delete this item? This action cannot be undone.") and two action buttons: "Cancel" and "Delete".
2.  When a user clicks on any `delete-btn` (the "✕" icon) in the Task, Water, Food, Fitness, or Custom trackers, the `modal-confirm-delete` appears, covering the current view.
3.  The item is **not** deleted immediately when the `delete-btn` is clicked.
4.  If the "Delete" button within the `modal-confirm-delete` is clicked, the corresponding item is removed from the tracker's state, `localStorage` is updated, and the UI for that tracker is re-rendered to reflect the change.
5.  If the "Cancel" button within the `modal-confirm-delete` is clicked, or if the user clicks on the overlay outside the modal, the modal closes, and no item is deleted.
6.  The `modal-confirm-delete` should be styled consistently with the existing modal designs (e.g., `modal-task`, `modal-water`), including dark theme, animations, and responsive behavior.
7.  The focus should be automatically set to the "Delete" button when the modal opens for better accessibility. (Optional, but good to have)
