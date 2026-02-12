import { getProductById, getProducts, searchProducts } from "./fetch-helpers";
import { renderProductDetails, renderProducts } from "./dom-helpers";
const errorMessage = document.querySelector('#error-message')


getProducts().then(result => {
    if (result.error) {
        errorMessage.textContent = result.error.message
    } else {
        errorMessage.textContent = ''
        renderProducts(result);
    }
})
const productsList = document.querySelector('#products-list')
productsList.addEventListener('click', (event) => {
    const li = event.target.closest('li')
    if (!li) return;

    getProductById(li.dataset.productId).then((obj) => {
        if (obj.data === null) {
            errorMessage.textContent = obj.error
        } else {
            errorMessage.textContent = ''
            renderProductDetails(obj.data)
        }
    })
})

const form = document.querySelector('#search-form')
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchTerm = form.elements.query.value
    const { data, error } = await searchProducts(searchTerm)
    if (error) {
        errorMessage.textContent = `Failed to find recipes. Try again later. Error: ${error.message}`
    } else if (data.length === 0) {
        errorMessage.textContent = 'Could not find recipes matching that search term.'
    } else {
        errorMessage.textContent = ''
        renderProducts(data)
        form.reset();
    }
})
