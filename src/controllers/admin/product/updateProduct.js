const Products = require('../../../models/product');
require('dotenv').config();

const updateProduct = async (req, res) => {
  try {
    const { productName, appStore, playStore, keypoints, description } = req.body;

    let product = await Products.findOne();

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    if (productName) {
      product.productName = productName;
    }
    if (appStore) {
      product.appStore = appStore;
    }
    if (playStore) {
      product.playStore = playStore;
    }
    if (keypoints) {
      product.keypoints = keypoints;
    }
    if (description) {
      product.description = description;
    }
    if (imagePath) {
      product.image = imagePath;
    }

    await product.save();

    console.log('Product Updated:', product);

    res.status(200).json({
      message: 'Product updated successfully',
      product,
    });
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({
      error: 'Failed to update product',
    });
  }
};

module.exports = { updateProduct };
