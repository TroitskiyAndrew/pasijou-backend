const apiService = require('../services/api-service')

const getMenu = async (req, res) => {
    try {
        const categoriesResponse = await apiService.get(`menu.getCategories`);
        const categories = (categoriesResponse ?? []).filter(({ category_hidden }) => category_hidden === '0');
        const productsResponse = await apiService.get(`menu.getProducts`);
        const products = (productsResponse ?? []).filter(({ hidden }) => hidden === '0');
        categories.forEach(category => {
            category.products = products.filter(product => product.menu_category_id === category.category_id)
        });
        res.status(200).send(categories.filter(category => category.products.length));
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports.getMenu = getMenu;