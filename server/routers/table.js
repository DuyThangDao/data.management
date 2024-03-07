import express from 'express';
import { getData,createData, deleteData,editData } from '../controllers/table.js';

const router = express.Router();

router.get('/',getData);
router.post('/',createData);
router.delete('/:tableRowId',deleteData);
router.post('/edit',editData);

export default router;