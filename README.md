# complaints-box

Anonymous Complaint Box Management System for a Military Base.

## Folder Structure

```

complaints-box/
├── public/
│   ├──index.html
│   ├──complaint.html
│   └──style.css
├── db/
│   └──connect.db.js
├── models/
│   └──complaint.model.js
├── routes/
│   └──complaint.route.js
├── controllers/
│   └──complaint.controller.js
├── app.js
└── READMME.md

```

## Server and API

The application is built with Express and listens for HTTP requests.

### Endpoints

All API routes are grouped under `/complaint`.

| Method | Path                 | Description                                |
|--------|----------------------|--------------------------------------------|
| `POST` | `/complaint/submit`  | Submit a new complaint (form or JSON)      |
| `GET`  | `/complaint/getAll`  | Retrieve all existing complaints from the database |

Request Body (POST /complaint/submit)  
Data can be sent via an HTML form or as JSON (if support is added in the future) in the following format:

```json
{
  "category": "Food",
  "message": "The food was not fresh"
}
```
