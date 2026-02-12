const productsList = document.querySelector('#products-list')
const productsCount = document.querySelector('#product-count')
const productDetails = document.querySelector('#product-details')

export const renderProducts = (obj) => {
    productsList.innerHTML = '';
    
    if (!obj.data) { // checks for data key, if not its the obj from the search query  
        productsCount.textContent = obj.length;
        obj.forEach(product => {
            const li = document.createElement('li')
        li.dataset.productId = product.id
        // img 
        const img = document.createElement('img')
        img.src = product.thumbnail
        img.alt = product.title
        // h3
        const h3 = document.createElement('h3')
        h3.textContent = product.title
        //  p
        const p = document.createElement('p')
        p.textContent = `$${product.price}`
        // append
        li.append(img, h3, p)
        productsList.append(li)
        })
    } else { // if data key exists, its the base render with no query
        productsCount.textContent = obj.data.products.length;
        obj.data.products.forEach(product => {
        const li = document.createElement('li')
        li.dataset.productId = product.id
        // img 
        const img = document.createElement('img')
        img.src = product.thumbnail
        img.alt = product.title
        // h3
        const h3 = document.createElement('h3')
        h3.textContent = product.title
        //  p
        const p = document.createElement('p')
        p.textContent = `$${product.price}`
        // append
        li.append(img, h3, p)
        productsList.append(li)
    });
    }
    
};


export const renderProductDetails = (product) => {
    productDetails.innerHTML = ''
    productDetails.classList.remove('hidden')
    //  h2
    const h2 = document.createElement('h2')
    h2.textContent = product.title
    // img
    const img = document.createElement('img')
    img.src = product.thumbnail
    img.alt = product.title
    // price
    const p = document.createElement('p')
    p.textContent = `Price: $${product.price}`
    //  description
    const desc = document.createElement('p')
    desc.textContent = `${product.description}`
    // rating 
    const rating = document.createElement('p')
    rating.textContent = `Rating: ${product.rating}/5`

    productDetails.append(h2, img, p, desc, rating)
};
