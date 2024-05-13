import express from 'express';
import s3Router from './api/s3.upload';

const router = express.Router();

router.use('/api/s3Upload', s3Router);

export default router;
