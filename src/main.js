const shape = document.getElementById('shape');
const code = document.getElementById('code');
const radius_top = document.getElementById('radius_top');
const radius_right = document.getElementById('radius_right');
const radius_bottom = document.getElementById('radius_bottom');
const radius_left = document.getElementById('radius_left');
const radius_top_vertical = document.getElementById('radius_top_vertical');
const radius_right_vertical = document.getElementById('radius_right_vertical');
const radius_bottom_vertical = document.getElementById('radius_bottom_vertical');
const radius_left_vertical = document.getElementById('radius_left_vertical');
const initial_value = 50;

const radius_values = {
    radius_top: 50,
    radius_right: 50,
    radius_bottom: 50,
    radius_left: 50,
    radius_top_vertical: 50,
    radius_right_vertical: 50,
    radius_bottom_vertical: 50,
    radius_left_vertical: 50,
}

// Inital value

const all_inputs = document.getElementsByTagName('input');
for(let i = 0; i < all_inputs.length; i++) {
    if(all_inputs[i].type === 'range') {
        all_inputs[i].value = initial_value;
    }
}
const values = document.getElementsByTagName('span');
for(let i = 0; i < values.length; i++) {
    values[i].innerHTML = values[i].previousElementSibling.value + " %";
}

function changeBorderRadius() {
    [tph, rgh, bth, lfh, tpv, rgv, btv, lfv] = Object.values(radius_values);
    shape.style.borderRadius = `${tph}% ${rgh}% ${bth}% ${lfh}% / ${tpv}% ${rgv}% ${btv}% ${lfv}%`;
}

// Change values from each 
function update(event) {
    const target = event.target;
    if(target.tagName.toLowerCase() === 'input') {
        target.nextElementSibling.innerHTML = target.value + "%";
        radius_values[target.name] = Number(target.value);
        changeBorderRadius();
        document.getElementById('code').value = 'border-radius: ' + getComputedStyle(shape).borderRadius;
    }
}

addEventListener('input', update, false);


