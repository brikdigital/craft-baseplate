export default function skipToContent() {
  const el = document.querySelector('#skipToContent')! as HTMLElement;
  const els = Array.from(document.querySelectorAll("[role='heading'], h1, h2, h3")).filter(
    elementFilter,
  );

  el.addEventListener('click', () => {
    if (els[0]) (els[0] as HTMLElement).focus();
  });
}

function elementFilter(e: Element): boolean {
  if (e && e.getBoundingClientRect().width > 0 && e.getBoundingClientRect().height > 0) {
    let style = window.getComputedStyle(e);
    return style.display !== 'none' && style.visibility !== 'hidden' && style.clip === 'auto';
  } else {
    return false;
  }
}
