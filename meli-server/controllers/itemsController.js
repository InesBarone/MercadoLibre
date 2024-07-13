// Main fetch function --------------------------------
async function apiRequest(url, method) {
    const request = await fetch(url, {method: method});
    const response = await request.json();

    return {status: request.status, response: response}
}

// Fetch functions ------------------------------------
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

async function fetchGetItemCategory(id) {
    const url = `https://api.mercadolibre.com/categories/${id}`;
    const response = await apiRequest(url, "GET");

    return response;
}

async function fetchSellerData(seller_id) {
    const url = `https://api.mercadolibre.com/users/${seller_id}`;
    const response = await apiRequest(url, "GET");

    return response;
}

// Auxiliar functions ----------------------------------
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

    if (categories.length === 0 && response.filters.length > 0 && response.filters[0].id === "category" ) {
        categories = [response.filters[0].values[0].name];
    }



    return categories;
}

async function getAddress(seller_id) {
    try {
        const response = await fetchSellerData(seller_id);
        if (response.status != 200) {
            return null;
        }
        return response;
    } catch (error) {
        return null;
    }

}

async function getItemsInformation(response) {
    let items = [];
    
    if (response.results) {
    
        // Utilizamos un bucle for clásico para manejar la asincronía
        for (let i = 0; i < response.results.length; i++) {
            const item = response.results[i];
    
            // Obtenemos la dirección de forma asíncrona
            const address = await getAddress(item.seller.id);
            
            let price = item.price.toString();
            
            let newItem = {
                id: item.id,
                title: item.title,
                address: address.response.address.city,
                price: {
                    currency: item.currency_id,
                    amount: price.split('.')[0],
                    decimals: price.split('.')[1],
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping
            };
    
            items.push(newItem);
        }
    }
    
    return items;
}


// Principal -------------------------------------------
export const getItems = async(req, res, next) => {
    const query = req.query.search;
    let response;

    try {
        response = await fetchGetItems(query);
        if(response.status === 404) {
            return res.status(404).json({ error: 'Error getting data' });
        }
        if(response.status != 200) {
            return res.status(400).json({ error: 'Bad request' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error getting API data' });
    }

    const categories = getCategories(response.response);
    const items = await getItemsInformation(response.response);
    
    const result = {
        author: {
            name: "María Inés",
            lastname: "Barone"
        },
        categories: categories,
        items: items
    }

    res.status(200).json({data: result});
}

export const getItem = async(req, res, next) => {
    const id_params = req.params.id;

    let responseItem;
    let responseDescription;
    let responseCategory;
    let categories;

    try {
        responseItem = await fetchGetItem(id_params);
        if(responseItem.status != 200) {
            return res.status(400).json({ error: 'Bad request' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error getting API data' });
    }

    try {
        responseDescription = await fetchGetItemDescription(id_params);
        if(responseDescription.status === 404) {
            return res.status(404).json({ error: 'Invalid product id' });
        }
        if(responseDescription.status != 200) {
            return res.status(400).json({ error: 'Bad request' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error getting API data' });
    }

    try {
        responseCategory = await fetchGetItemCategory(responseItem.response.category_id);
        if(responseCategory.status != 200) {
            return res.status(400).json({ error: 'Bad request' });
        }
    } catch (error) {
        return res.status(500).json({error: 'Error getting API data'})
    }

    categories = [responseCategory.response.name];
    for (let i = 0; i < responseCategory.response.path_from_root.length; i++) {
        categories.push(responseCategory.response.path_from_root[i].name);
    }

    const result = {
        author: {
            name: "María Inés",
            lastname: "Barone"
        },
        item: {
            id: responseItem.response.id,
            title: responseItem.response.title,
            category: categories,
            price: {
                currency: responseItem.response.currency_id,
                amount: responseItem.response.price.toString().split('.')[0],
                decimals: responseItem.response.price.toString().split('.')[1],
            },
            picture: responseItem.response.thumbnail,
            condition: responseItem.response.condition,
            free_shipping: responseItem.response.shipping.free_shipping,
            initial_quantity: responseItem.response.initial_quantity.toString(),
            description: responseDescription.response.plain_text,
        }
    }
    
    res.status(200).json({data: result});
}