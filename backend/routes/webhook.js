import express from 'express';
const router = express.Router();

// Endpoint para recibir webhooks de Yoitzen
router.post('/', async (req, res) => {
  console.log('Webhook recibido:', req.body);
  // Aquí puedes procesar el mensaje/evento recibido
  res.status(200).json({ status: 'ok' });
});

export default router;
