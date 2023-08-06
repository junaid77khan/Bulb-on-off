const bulb1 = document.getElementById('bulb1');
const bulb2 = document.getElementById('bulb2');

const turnon = () => {
    bulb1.style.display = 'none';
    bulb2.style.display = 'block';
}

const turnoff = () => {
    bulb2.style.display = 'none';
    bulb1.style.display = 'block';
}