const firePixelsArray = [];
const fireWidth = 10;
const fireHeight = 10;

function start() {
    createFireDataStructure();
    renderFire();
}

function createFireDataStructure() {
    const numberOfPixels = fireWidth * fireHeight;

    for (let i = 0; i < numberOfPixels; i++) {
        firePixelsArray[i] = 0;
    }
}

function calculateFirePropagation() {

}

function renderFire() {
    let html = '<table cellpadding = 0 cellspacing = 0>';

    for (let row = 0; row < fireHeight; row++) {
        html += '<tr>'
        for (let colunm = 0; colunm < fireWidth; colunm++) {
            const pixelIndex = colunm + (fireWidth * row);
            html += '<td>'
            html += '<div class="pixel-index">' + pixelIndex + '</div>'
            html += '</td>'
        }
        html += '</tr>'
    }
    html += '</table>';

    document.querySelector('#fireCanvas').innerHTML = html;
}

start();