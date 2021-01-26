const data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio."


function getCounts(data) {
    const hitungData = {};
    
    for(let i = 0; i < data.length; i++) {
        const banyak = data[i];
        hitungData[banyak] = (hitungData[banyak] || 0) + 1
        }
        return hitungData;
    
}


console.log(getCounts(data));

function geserHuruf (data) {
    return data.replace(/[a-zA-Z]/g, function(x) {
        return String.fromCharCode(x.charCodeAt(0)+1);
    });
}
console.log(geserHuruf(data));