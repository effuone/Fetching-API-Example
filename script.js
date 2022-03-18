//fetching products
const products = []
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(response=>products.push(...response))

function createProduct(name, price, image, description) {
    //get container
    var container = document.getElementById('main-container')

    //create new product
    var newProduct = document.createElement('div')
    newProduct.className = "product"

    //create new productName
    var productName = document.createElement('div')
    productName.className = "productName"
    productName.appendChild(document.createTextNode(name))
    newProduct.appendChild(productName)

    //create new imageClass
    var imageClass = document.createElement('div')
    imageClass.className = "productImage"
    var imagesrc = document.createElement('img')
    imagesrc.src = image;
    imageClass.appendChild(imagesrc)
    newProduct.appendChild(imageClass)

    //create new priceTag 
    var priceTag = document.createElement('div')
    priceTag.className = 'priceTag'
    priceTag.appendChild(document.createTextNode(price))
    newProduct.appendChild(priceTag)

    //create new description 
    var productDescription = document.createElement('div')
    productDescription.className = 'productDescription'
    productDescription.appendChild(document.createTextNode(description))
    newProduct.appendChild(productDescription)

    //create basket button block
    var button = document.createElement('button')
    button.className= 'basketButtonBlock'
    button.type = 'button'
    button.appendChild(document.createTextNode('Add'))
    newProduct.appendChild(button)

    container.appendChild(newProduct);
}

function render()
{
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        createProduct(
            element.title, 
            element.price,
            element.image,
            element.description
        )
    }
}
