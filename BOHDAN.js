const url = "https://my-json-server.typicode.com/HowdyWayd/NewRepos"

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
              </div>
                
`
            )
        })

    },
    error: (error) => {
        console.log(error.statusText);
    }
})