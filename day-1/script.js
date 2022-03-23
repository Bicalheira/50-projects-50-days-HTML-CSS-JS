const panels = document.querySelectorAll(".js-panel");

panels.forEach((panel) => {
	panel.onclick = () => {
        removeActiveClasses();

		panel.classList.add("is-active");
	};
});

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("is-active");
    })
}