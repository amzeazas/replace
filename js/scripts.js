$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    var text = $("textarea#text").val();

    $(".output").empty();
    $(".output").text(text)

    $("#replace_form").show();
    $("#result").show();

    $("form#replace").submit(function(event) {
      var old = $("input#old").val();
      var replacement = $("input#replacement").val();
      var newText = $(".output").text();
      var re = new RegExp(old, "g")
      var result = newText.replace(re, replacement);

      $(".output").text(result)

      $("#result").show();
      event.preventDefault();
    });

    event.preventDefault();
  });
});
