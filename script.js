const meta = document.querySelector('meta[name="theme-color"]');
const input = document.querySelector('input');
const preview = document.querySelector('.preview');


const updateColor = () => {
    meta.setAttribute('content', input.value);
    preview.innerHTML = input.value;
    document.body.style.backgroundColor = input.value;
};
updateColor();
input.addEventListener("input", e => updateColor())