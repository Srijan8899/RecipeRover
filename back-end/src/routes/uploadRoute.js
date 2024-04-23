import express from 'express';
import {upload}  from '../middleware/multer';
import  cloudinary from '../utils/cloudinary';

const router = express.Router();
import fs from 'fs';

router.post('/upload', upload.single('image'), function (req, res) {
    try{
    const result = cloudinary.uploader.upload(req.file.path);
  
    fs.unlinkSync(req.file.path);
    res.json({ imageUrl: result.url });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: 'Something went wrong' });
  }
  });
  
  export default router;