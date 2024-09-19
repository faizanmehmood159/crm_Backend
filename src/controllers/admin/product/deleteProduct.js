const Products = require('../../../models/product');

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Products.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

module.exports = {deleteProduct};
