const labels = document.querySelectorAll('.form-control label');

// spliting each letter in array then maping it each to be a span and then making it back to be a string
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 70}ms">${letter}</span>`)
    .join('');
});
