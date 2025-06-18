import express from 'express';
const router = express.Router();

let items = [];
let idCounter = 1;

// GET all items
router.get('/', (req, res) => {
  res.json(items);
});

// GET item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// CREATE new item
router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  const newItem = { id: idCounter++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// UPDATE item
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const itemIndex = items.findIndex(i => i.id === id);

  if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });
  if (!name || !description) return res.status(400).json({ error: 'Name and description are required' });

  items[itemIndex] = { id, name, description };
  res.json(items[itemIndex]);
});

// DELETE item
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  const deletedItem = items.splice(index, 1);
  res.json({ message: 'Item deleted', item: deletedItem[0] });
});

export default router;
