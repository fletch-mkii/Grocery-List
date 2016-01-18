$(document).ready(function() {
  $('ul').on('click', 'button', function(event) {
    event.preventDefault();

    var button_id = this["id"];
    button_id.addEventListener("click", deleteGroceryViaAjax(button_id), false);
  })

  $('form').submit(function(event) {
    event.preventDefault();
    var grocery = $("#grocery_name").val();

    if (grocery){
      submitGroceryViaAjax(grocery);
    } else {
      alert("Enter an item name, please.")
    }
  });
});

var submitGroceryViaAjax = function(grocery) {
  var request = $.ajax({
    method: "POST",
    url: "/groceries",
    data: {name: grocery}
  });

  request.done(function() {
    $("ul").append("<li class='item' id=" + grocery + "_list" + ">" + grocery + ' <button class="delete_item" id=' + grocery + '>Delete</button>' + "</li>")
  });
}

var deleteGroceryViaAjax = function(grocery_id) {
  var request = $.ajax({
    method: "DELETE",
    url: "/groceries",
    data: {id: grocery_id}
  });

  request.done(function() {
    debugger;
    $( "li" ).remove("#" + grocery_id + "_list");
    // $( "#" + grocery_id ).remove();
  });
}
