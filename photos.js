window.CA_IMG = window.CA_IMG || {};
(function () {
  const files = ['photos-1.js', 'photos-2.js', 'photos-3.js', 'photos-4.js', 'photos-5.js', 'photos-6.js', 'photos-7.js', 'photos-8.js', 'photos-9.js', 'photos-10.js', 'photos-11.js', 'photos-12.js', 'photos-13.js', 'photos-14.js'];
  let left = files.length;
  files.forEach((src) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => { left -= 1; if (left === 0) window.dispatchEvent(new Event("ca-photos")); };
    s.onerror = () => { left -= 1; if (left === 0) window.dispatchEvent(new Event("ca-photos")); };
    document.head.appendChild(s);
  });
})();
