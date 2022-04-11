$(function() {
  loadRec();
  $("#recipes").on("click",".btn-danger",handleDelete);
  $("#recipes").on("click",".btn-warning",handleUpdate);
  console.log("1");

  // $(".addBtn").click(addProduct);
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
          $("#updateModal").modal("hide ");
        }
    });
  });
});

function handleUpdate() {

  var btn = $(this);
  var parentDiv = btn.closest(".recipesJSClass");
  var id = parentDiv.attr("data-id");
  
 $.get("https://usman-recipes.herokuapp.com/api/products/"+id,function(response) {
  $("#updateId").val(response._id);
  $("#updateTitle").val(response.name);
  $("#updateBody").val(response.price);
  $("#updateModal").modal("show");
  });
}

function handleDelete() {
  console.log("2");
  var btn = $(this);
  var parentDiv = btn.closest(".recipesJSClass");
  var id = parentDiv.attr("data-id");
  console.log("id is "+id);
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/products/"+id,
    method:"DELETE",
    success: function() {
      console.log("3");
      loadRec();
    }
  });
  console.log("4");
}
function loadRec() {
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/products/",
    method:"GET",
    success: function(response) {
        
        var result = $("#recipes");
        result.empty();
        for(var i=0; i<response.length; i++)
        {
          var rec = response[i];
          result.append( `<div class="recipesJSClass" data-id="${rec._id}"
          <h4>${rec.name}
          <button class="btn btn-danger delete float-right">Delete</button>
          <button class="btn btn-warning info float-right">Edit</button>
          </h4>
          <p>${rec.price}</p>
          </div>
          `)
        }
    }
  });
}
function addProduct() {
  var name = $("#name").val();
  var price = $("#price").val();
  
console.log("going to product");
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/products/",
    method:"POST",
    data:{name:name,price:price},
    success:function(response)
    {
      console.log(response);
      console.log("going to product 2");
      loadRec();
    }
  });
  console.log("done to product");
}






























//recent 9/4 115 pm

// $(function() {
//   loadRec();
//   $("#recipes").on("click",".btn-danger",handleDelete);
//   $("#recipes").on("click",".btn-warning",handleDelete);

// });
// function handleUpdate() {
//   $("#updateModal").modal("show");
// }
// function addRecipe()
// {
//   var name = $("#name").val();
//   var price = $("#price").val();
//   $.ajax({
//     url: "https://usman-recipes.herokuapp.com/api/products/",
//     method:"POST",
//     data:{name:name,price:price},
//     success:function(response)
//     {
//       console.log(response);
//       loadRec();
//     }
//   })

// }
// function handleDelete() {
//  var btn = $(this);
//  var parentDiv = btn.closest(".recipes");
//  let id = parentDiv.attr("data-id");
//  console.log("id is"+id);
//  console.log("deleted");
//  $.ajax({
//     url: "https://usman-recipes.herokuapp.com/api/products/"+id,
//     method:"DELETE",
//     success: function(response)
//     {
//       loadRec();
//     }
//  });
//  console.log("dleete");
// }



// function loadRec() {
//   $.ajax({
//     url: "https://usman-recipes.herokuapp.com/api/products",
//     method:"GET",
//     success: function(response){
//       var result = $("#recipes");
//       result.empty();
//       for(var i=0;i<response.length;i++)
//       {
        
//         var rec = response[i];
//         result.append(`<div class="recipes" data-id="${rec._id}">
//         <h3>
//         ${rec.name}
//         </h3>
//         <p>
//         <button class="btn btn-danger float-right">Delete</button>
//         <button class="btn btn-info float-right">Edit</button>
//         ${rec.price}
//         </p>
//         </div>`)
//       }
//     }
//   })
// }

 

