$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

	$('#movedown').click(function() {
        $('#side_menu').slideToggle("slow");
    }); 

});

// -----------------------Index Page --------------------
// Text Changes and color change according to the words
var textArry = [".Passion", ".Joy", ".People", ".Design", ".Confidence"]
var texttt = document.getElementById("textChanged")
var index = 1

function textChange() {
	console.log(texttt)
	if (index > 4) {
		colorChange = texttt.innerText = textArry[0]
		index = 0
	} else if (index != 0) {
		colorChange = texttt.innerText = textArry[index]
		index = index + 1
	} else if (index == 0) {
		colorChange = texttt.innerText = textArry[1]
		index = 2
	}

	if (colorChange == ".Passion") {
		texttt.style.color = "red"
	} else if (colorChange == ".Joy") {
		texttt.style.color = "mediumpurple"
	} else if (colorChange == ".People") {
		texttt.style.color = "green"
	} else if (colorChange == ".Design") {
		texttt.style.color = "yellow" 
	} else if (colorChange == ".Confidence") {
		texttt.style.color = "blue"
	}
}
setInterval(textChange,3000)

// Modals  -----------Not working why!!!!!!!!!!! T_T

$(document).ready(function() {
	$(".anchor").click(function(event) {
		var imgUrl = $(event.target).data("imgurl")
		$("body").append("<div class='overlay'> <img src='"+ imgUrl +"'> </div>")
	}) 

	$("body").on("click", "img", function(event) {
		$(event.target).hide()
		$(event.target).closest(".overlay").hide()
	})
})

// }

