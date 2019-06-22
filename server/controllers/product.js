import Product from '../models/product'

export function getAllProducts(req, res) {
  Product.find()
    .select('_id name description photo price')
    .then((allProducts) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all causes',
        data: allProducts,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
}
