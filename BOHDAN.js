const url = "https://my-json-server.typicode.com/HowdyWayd/NewRepos"

var basketlist= [];


// $.ajax(url + "/products", {
//     dataType: 'json',
//     success: (result) => {
//         $.each(result, (index, element) => {
//             $(".container").append(
//                 `${element.name}`
//             )
//         })

//     },
//     error: (error) => {
//         console.log(error.statusText);
//     }
// })


$.ajax(url + "/products", {
    dataType: 'json',
    success: (result) => {

var products = result;

        $.each(result, (index, element) => {
            $(".container").append(`
              <div class= "product">
              <img src= "${element.photo_url}">
              <div class="detail">
              ${element.name}
              <div class="des">
               ${element.description}
                </div>
              </div>
              <div class="price">
              ${element.price}
              </div>
              <button class="buy" onClick="${() => {addProductToBasket(element.id)}}">
              Buy
              </button>
              </div>
                
`
            )
        })

    },
    error: (error) => {
        console.log(error.statusText);
    }
})

function addProductToBasket(id) {
    basketlist.push(
        products.find((product) => {
            return product.id == id;
        })
    )

    console.log(basketlist)
}