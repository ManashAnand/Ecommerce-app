import express from "express";
import {
  CreateProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  realedProductController,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  CreateProductController
);

router.get("/get-product", getProductController);

router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/delete-product/:pid", deleteProductController);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

router.post("/product-filters", productFiltersController);

router.get('/product-count',productCountController);

router.get('/product-list/:page',productListController)

router.get('/search/:keyword',searchProductController);

router.get('/related-product/:pid/:cid',realedProductController);

router.get('/product-category/:slug', productCategoryController);

// payment routes
// token
router.get('/braintree/token', braintreeTokenController);

// payment
router.post('/braintree/payment',requireSignIn, braintreePaymentController)
export default router;
