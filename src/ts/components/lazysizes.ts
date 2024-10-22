export default async function lazysizes() {
  await import('lazysizes');
  attachEventListeners();
}

function attachEventListeners() {
  // Hide all the placeholder images when lazyload image is unveiled (also works with AJAX loaded content)
  document.addEventListener('lazyloaded', function (e) {
    const imageThatJustLoaded = e.target as HTMLElement;
    if (
      imageThatJustLoaded.previousElementSibling &&
      imageThatJustLoaded.previousElementSibling.classList.contains('placeholder')
    ) {
      imageThatJustLoaded.previousElementSibling.classList.add('opacity-0');
    }
  });
}
