# Library Portal Project

This project is a simple Library Portal built using only HTML. The portal includes a homepage with a book catalog, a form to borrow books, and a details page for individual books. No CSS or JavaScript is used.

## Requirements

### 1. Homepage (`index.html`)

- Add a welcoming **header** and a brief **description** of the library.
- **Book Table**:
  - Create a table with the following structure:
    - **Book ID** (uses `rowspan` to span two rows).
    - **Book Info** (uses `colspan` to merge **Title** and **Author** under this header).
    - **Genre** and **Details** columns.
  - Add two sample books, each with:
    - A link to view more details on the **Book Details Page** (`details.html`).
- Add a link to the **Borrow Book Page** (`borrow.html`).

### 2. Borrow Book Page (`borrow.html`)

- Create a simple **form** with the following fields:
  - **Name** (text input).
  - **Book Title** (dropdown with at least three options).
  - **Membership ID** (text input).
  - **Terms and Conditions** (checkbox to agree).
- Add a submit button to the form.

### 3. Book Details Page (`details.html`)

- Display details for one book, including:
  - **Title**
  - **Author**
  - **Genre**
  - A short **description** of the book.
- Add a link to navigate back to the **Homepage** (`index.html`).

---
