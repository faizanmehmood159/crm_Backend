
const Products = require('../../../models/product');
const path = require('path');
require('dotenv').config();

const addProduct = async (req, res) => {
  try {
    const { productName, appStore, playStore, keypoints, description } = req.body;

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    const newProduct = new Products({
      productName,
      appStore,
      playStore,
      keypoints,
      description,
      image: imagePath,
    });

    await newProduct.save();
    console.log('Product Added: ', newProduct)
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ error: 'Failed to create product' });
  }
};

module.exports = {addProduct};
