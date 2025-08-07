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

### Body של הבקשה (`POST /complaint/submit`)

ניתן לשלוח מידע דרך טופס HTML או כ־JSON (אם תתווסף תמיכה בעתיד). בפורמט הבא:

```json
{
  "category": "Food",
  "message": "האוכל לא היה טרי"
}
```