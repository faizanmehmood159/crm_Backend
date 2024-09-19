const Products = require('../../../models/product');

const getProduct = async (req, res) => {
  try {
    const products = await Products.findOne();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

module.exports = { getProduct };
