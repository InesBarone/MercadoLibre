import express from 'express';
const Router = express.Router();

async function apiRequest(url, method) {
    const request = await fetch(url, {method: method});
    const response = await request.json();

    return response;
}

async function fetchGetItems(query) {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;
    const response = await apiRequest(url, "GET");

    return response;
}

async function fetchGetItem(id) {
    const url = `https://api.mercadolibre.com/items/${id}`
    const response = await apiRequest(url, "GET");

    return response;
}

async function fetchGetItemDescription(id) {
    const url = `https://api.mercadolibre.com/items/${id}/description`;
    const response = await apiRequest(url, "GET");

    return response;
}

function getCategories(response) {
    let categories = [];

    // Find the category with more results:
    let results = 0;

    if (response.available_filters && response.available_filters.filter((filter) => filter.id === 'category').length > 0) {
        let allCategories = response.available_filters.filter((filter) => filter.id === 'category');
        allCategories[0].values.forEach((category) => {
            if (category.results > results) {
                categories = [category.name];
                results = category.results;
            }
        })
    }

    return categories;
}

function getItems(response) {
    let items = [];
    
    response.results.forEach(item => {
        let price = item.price.toString();
        let newItem = {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: price.split('.')[0],
                decimals: price.split('.')[1],
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping
        }
        items.push(newItem);
    });
    return items;
}

Router.get('/', async (req, res) => {
    const query = req.query.search;
    const meliItems = await fetchGetItems(query);

    const categories = getCategories(meliItems);
    const items = getItems(meliItems);
    
    const response = {
        author: {
            name: "María Inés",
            lastname: "Barone"
        },
        categories: categories,
        items: items
    }

    res.status(200).json({data: response});
})

Router.get('/:id', async(req, res) => {
    const id_params = req.params.id;
    const meliItem = await fetchGetItem(id_params);
    const meliItemDescription = await fetchGetItemDescription(id_params);

    const result = {
        author: {
            name: "María Inés",
            lastname: "Barone"
        },
        item: {
            id: meliItem.id,
            title: meliItem.title,
            price: {
                currency: meliItem.currency_id,
                amount: meliItem.price.toString().split('.')[0],
                decimals: meliItem.price.toString().split('.')[1],
            },
            picture: meliItem.thumbnail,
            condition: meliItem.condition,
            free_shipping: meliItem.shipping.free_shipping,
            sold_quantity: meliItem.inital_quantity,
            description: meliItemDescription.plain_text,
        }
    }
    
    res.status(200).json({data: result});
})

export default Router;