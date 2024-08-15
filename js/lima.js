

document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll(".accordion button");
  
    accordionButtons.forEach(button => {
      button.addEventListener("click", function() {
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        const content = this.nextElementSibling;
        if (!expanded) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  });
  