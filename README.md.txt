# CRUD API

A simple CRUD API built with Express.js using an in-memory store.

## How to Run

### 1. Clone and install dependencies:
```
npm install
```

### 2. Create a `.env` file:
```
PORT=3000
```

### 3. Run the server:
```
npm run dev
```

---

## API Endpoints

### GET /
Returns:
```
"Hello World!"
```

---

### GET /items
Returns all items.

---

### GET /items/:id
Returns item by ID.

Error:
```
{ "error": "Item not found" }
```

---

### POST /items
Creates a new item.

**Body:**
```
{
  "name": "Item Name",
  "description": "Item Description"
}
```

Error:
```
{ "error": "Name and description are required" }
```

---

### PUT /items/:id
Updates an item by ID.

**Body:**
```
{
  "name": "Updated Name",
  "description": "Updated Description"
}
```

---

### DELETE /items/:id
Deletes an item.

---

## Example using curl
```
curl -X POST http://localhost:3000/items ^
-H "Content-Type: application/json" ^
-d "{\"name\": \"Book\", \"description\": \"A good read\"}"
```