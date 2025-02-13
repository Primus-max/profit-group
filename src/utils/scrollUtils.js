export function scrollToAnchor(anchorId, offset = 100) {
    const anchor = document.getElementById(anchorId);
    if (anchor) {
        const top = anchor.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
} 