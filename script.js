//fetching products
const products = []
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(response=>products.push(...response))

function createProduct(name, price, image, description) {
    //get container
    var containers = document.getElementsByClassName('wrapper bg-white')
    var container = containers[0]
    //create new product
    var newProduct = document.createElement('div')
    newProduct.className = "product"

    //create new productName
    var productName = document.createElement('div')
    var productNameText = document.createElement('h2')
    productNameText.innerHTML = name;
    productName.className = "productName"
    productName.appendChild(productNameText)
    newProduct.appendChild(productName)

    //create new description block
    var descriptionBlock = document.createElement('div')
    descriptionBlock.className = "description"
    var productImageBlock = document.createElement('div')
    productImageBlock.className = "productImage"
    var productImageImage = document.createElement('img')
    productImageImage.src = image
    productImageBlock.appendChild(productImageImage)
    descriptionBlock.appendChild(productImageBlock)
    var informationBlock = document.createElement('div')
    informationBlock.className = "information"
    var productDescriptionBlock = document.createElement('div')
    productDescriptionBlock.className = "productDescription"
    productDescriptionBlock.appendChild(document.createTextNode(description))
    var priceTagBlock = document.createElement('div')
    priceTagBlock.className = "priceTag"
    var priceTextBlock = document.createElement('div')
    priceTextBlock.className = "priceText"
    priceTextBlock.innerHTML = price + ' $'
    priceTagBlock.appendChild(priceTextBlock)
    
    

    //create basket button block
    var button = document.createElement('button')
    button.className= 'basketButtonBlock'
    button.type = 'button'
    button.appendChild(document.createTextNode('Add'))

    informationBlock.appendChild(productDescriptionBlock)
    informationBlock.appendChild(priceTagBlock)
    informationBlock.appendChild(button)

    descriptionBlock.appendChild(informationBlock)
    newProduct.appendChild(descriptionBlock)

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

if(document.readyState == 'complete')
{
    console.log(99999)
    render()
}