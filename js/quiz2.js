// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now ✅
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point ✅
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button ✅
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!) ✅ Remeber not to copy floppies

(function($){
	$(".links li a").on("click", function(e) {
		e.preventDefault()
		alert("you clicked a link, good for you")
	});

	console.log("this is a message for you!!!");
})(jQuery);

function fadeDoc() {
  document.getElementById('onDisconnet').innerHTML = "<p>Thanks for Visiting</p>";
}

$("#fadePage").submit(function(e) {
    e.preventDefault();
});

(function($){
	$("#secondarySection").on("click", function(e) {
		e.preventDefault()
		document.getElementById('secondarySection').innerHTML = "<img src=\"img/dctf.gif\" alt=\"Don't Copy that Floppy\">";
	});
})(jQuery);

var lists = document.getElementsByTagName("ol");
for (var i = 0; i < lists.length; i++) {
  var items = lists[i].getElementsByTagName("li");
  for (var j = 0; j < items.length; j++) {
    items[j].innerHTML = "<div class=\"jsOL\">Item: " + j + "</div";
  }
}
