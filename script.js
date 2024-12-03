function highlight() {
    // Get all <strong> elements
    var boldWords = document.getElementsByTagName('strong');
    // Change the color of each <strong> element to green
    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = 'green';
    }
}

function return_normal() {
    // Get all <strong> elements
    var boldWords = document.getElementsByTagName('strong');
    // Change the color of each <strong> element back to black
    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = 'black';
    }
}
