$(function() {

  $(".panel-body").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    elementThatWasClicked.parent().remove()

    // remove the element
  })

})
