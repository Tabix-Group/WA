import express from 'express';
const router = express.Router();

// Endpoint GET para ver estado desde navegador
router.get('/', (req, res) => {
  res.status(200).send('Webhook activo y esperando mensajes POST.');
});

// Endpoint para recibir webhooks de Yoitzen
router.post('/', async (req, res) => {
  console.log('Webhook recibido:', req.body);
  // Aquí puedes procesar el mensaje/evento recibido
  res.status(200).json({ status: 'ok' });
});

export default router;
