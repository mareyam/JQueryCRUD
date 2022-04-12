

$(function() {
  loadRec();
  $("#products").on("click",".btn-danger",deleteRec);
  $("#products").on("click",".btn-warning",updateProduct);
  
  $("#addBtn").click(addProduct);
  $("#updateSave").click(function() {
         var id = $("#updateId").val();
         var name = $("#updateName").val();
         var price = $("#updatePrice").val();
         $.ajax({
             url:"https://usman-recipes.herokuapp.com/api/products/"+id,
             data:{name, price},
             method: "PUT",
             success: function(response)
             {
               console.log(response);
               loadRec();
               $("#updateModal").modal("show");
             }
         });
});
});

function loadRec() {
  console.log("hello");
  $.ajax({
    url:"https://usman-recipes.herokuapp.com/api/products/",
    method: "GET",
    success: function(response) {
      console.log("loaded");
      var productID = $("#products");
      productID.empty();

      for(var i=0; i<response.length;i++)
      {
        var responseResult = response[i];
        productID.append(
             `<div class="productsJSClass" data-id="${responseResult._id}"
                     <h4>${responseResult.name}
                     <button class="btn btn-danger delete float-right">Delete</button>
                     <button class="btn btn-warning info float-right">Edit</button>
                     </h4>
                     <p>${responseResult.price}</p>
                     </div>`
        )
      }
    }
  })
}
function deleteRec() {
  var btn = $(this);
  var parentDiv = btn.closest(".productsJSClass");
  var id = parentDiv.attr("data-id");
  console.log(id);

  $.ajax({
    url:"https://usman-recipes.herokuapp.com/api/products/"+id,
    method: "DELETE",
    success: function(response) {
      console.log("deleted");
      loadRec();
    }
  })
}
function addProduct() {
  var name = $("#name").val();
  var price = $("#price").val();
  
  $.ajax({
    url:"https://usman-recipes.herokuapp.com/api/products/",
    method: "POST",
    data:{name:name, price:price},
    success: function(response) {
      console.log("added");
      console.log(response);
      loadRec();
    }
  })
}
function updateProduct() {
  console.log("in update");
  var btn = $(this);
  var parentDiv = btn.closest(".productsJSClass");
  var id = parentDiv.attr("data-id");
  console.log(id);
  $.get("https://usman-recipes.herokuapp.com/api/products/"+id,function(response) {
  $("#updateId").val(response._id);
  $("#updateName").val(response.name);
  $("#updatePrice").val(response.price);
  $("#updateModal").modal("show");
  loadRec();
  });

}
































//working 11.04 10 15pm
// $(function() {
//   loadRec();
//   $("#recipes").on("click",".btn-danger",handleDelete);
//   $("#recipes").on("click",".btn-warning",handleUpdate);
//   console.log("1");

//   $(".addBtn").click(addProduct);
//   $("#updateSave").click(function() {
//     var id = $("#updateId").val();
//     var name = $("#updateName").val();
//     var price = $("#updatePrice").val();
//     $.ajax({
//         url:"https://usman-recipes.herokuapp.com/api/products/"+id,
//         data:{name, price},
//         method: "PUT",
//         success: function(response)
//         {
//           console.log(response);
//           loadRec();
//           $("#updateModal").modal("show");
//         }
//     });
//   });
// });

// function loadRec() {
//   $.ajax({
//     url: "https://usman-recipes.herokuapp.com/api/products/",
//     method:"GET",
//     success: function(response) {
        
//         var result = $("#recipes");
//         result.empty();
//         for(var i=0; i<response.length; i++)
//         {
//           var rec = response[i];
//           result.append( `<div class="recipesJSClass" data-id="${rec._id}"
//           <h4>${rec.name}
//           <button class="btn btn-danger delete float-right">Delete</button>
//           <button class="btn btn-warning info float-right">Edit</button>
//           </h4>
//           <p>${rec.price}</p>
//           </div>
//           `)
//         }
//     }
//   });
// }

// function handleDelete() {
//   console.log("2");
//   var btn = $(this);
//   var parentDiv = btn.closest(".recipesJSClass");
//   var id = parentDiv.attr("data-id");
//   console.log("id is "+id);
//   $.ajax({
//     url: "https://usman-recipes.herokuapp.com/api/products/"+id,
//     method:"DELETE",
//     success: function() {
//       console.log("3");
//       loadRec();
//     }
//   });
//   console.log("4");
// }


// function handleUpdate() {

//   var btn = $(this);
//   var parentDiv = btn.closest(".recipesJSClass");
//   var id = parentDiv.attr("data-id");
  
//  $.get("https://usman-recipes.herokuapp.com/api/products/"+id,function(response) {
//   $("#updateId").val(response._id);
//   $("#updateName").val(response.name);
//   $("#updatePrice").val(response.price);
//   $("#updateModal").modal("show");
//   });
// }


// function addProduct() {
//   var name = $("#name").val();
//   var price = $("#price").val();
  
// console.log("going to product");
//   $.ajax({
//     url: "https://usman-recipes.herokuapp.com/api/products/",
//     method:"POST",
//     data:{name:name,price:price},
//     success:function(response)
//     {
//       console.log(response);
//       console.log("going to product 2");
//       loadRec();
//     }
//   });
//   console.log("done to product");
// }



























