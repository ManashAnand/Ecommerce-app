import express from 'express'
import { categoryController, CreateCaetgoryController, singleCategoryController, UpdateCaetgoryController ,deleteCategoryController } from '../controllers/CategoryController.js';
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
 

const router = express.Router();

router.post('/create-category',requireSignIn,isAdmin,CreateCaetgoryController);
router.put('/update-category/:id',requireSignIn,isAdmin,UpdateCaetgoryController);
router.get('/get-category',categoryController);
router.get('/single-category/:slug',singleCategoryController);
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController);


export default router;