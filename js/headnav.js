window.addEventListener("scroll", function () {
	var menuBox = document.querySelector(".menu-box");
	var triggerHeight = 30;
	if (window.scrollY > triggerHeight) {
		menuBox.classList.add("scrolled");
	} else {
		menuBox.classList.remove("scrolled");
	}
	if (window.innerWidth <= 768) {
		var mobileMenuBox = document.querySelector(".mobilemenubox");
		if (window.scrollY > triggerHeight) {
			mobileMenuBox.classList.add("scrolled");
		} else {
			mobileMenuBox.classList.remove("scrolled");
		}
	}
});
document.addEventListener("DOMContentLoaded", () => {
	const submenuToggle = document.querySelector(".submenu-toggle");
	const submenuContent = document.querySelector(".submenu-content");

	submenuToggle.addEventListener("click", () => {
		const isExpanded = submenuToggle.getAttribute("aria-expanded") === "true";
		submenuToggle.setAttribute("aria-expanded", !isExpanded);
		submenuContent.style.display = isExpanded ? "none" : "block";
	});
});
function openNav() {
	document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("sidenav").style.width = "0";
}
