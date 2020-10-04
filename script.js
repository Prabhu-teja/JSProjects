const search_box = document.getElementById("search-box");

search_box.addEventListener("keyup", () => {
	search();
});
const projects = document.getElementsByClassName("projects")[0];
var a = projects.getElementsByClassName("project");
function search() {
	const input = search_box.value;
	for (var i = 0; i < a.length; i++) {
		if (a[i].innerText.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
			a[i].style.display = "";
		} else {
			a[i].style.display = "none";
		}
	}
}
function display(cmd) {
	if (cmd === "all") {
		for (i = 0; i < a.length; i++) {
			a[i].style.display = "";
		}
	}
	if (cmd === "cs") {
		for (i = 0; i < a.length; i++) {
			if (a[i].id === "css") {
				a[i].style.display = "";
			} else {
				a[i].style.display = "none";
			}
		}
	}
	if (cmd === "js") {
		for (i = 0; i < a.length; i++) {
			if (a[i].id === "js") {
				a[i].style.display = "";
			} else {
				a[i].style.display = "none";
			}
		}
	}
}
options = document.getElementsByClassName("option");
const opt = options[0].getElementsByClassName("fas");
options[0].addEventListener("mouseover", () => {
	opt[0].classList.replace("fa-arrow-down", "fa-arrow-up");
});
options[0].addEventListener("mouseout", () => {
	opt[0].classList.replace("fa-arrow-up", "fa-arrow-down");
});
options[0].addEventListener("click", () => {
	display("all");
});
options[1].addEventListener("click", () => {
	display("cs");
});
options[2].addEventListener("click", () => {
	display("js");
});
