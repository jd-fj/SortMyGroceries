$(document).ready(function () {
  $("#form1").submit(function (event) {
    event.preventDefault();

    let item1 = $("#item1").val();
    let item2 = $("#item2").val();
    let item3 = $("#item3").val();
    let inputtedItems = [item1, item2, item3];
    let alphaList = inputtedItems.slice();
    alphaList.sort();
    console.log(alphaList);
    // $("#form1").hide();


    alphaList.forEach(function (item) {
      $("ul.finalList").prepend("<li>" + item + "</li>");

    });
  });

});