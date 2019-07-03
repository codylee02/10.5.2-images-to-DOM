function getDogImages(imageCount) {
    //console.log(`getDogImages ran imageCount is ${imageCount}`);
    
    fetch(`https://dog.ceo/api/breeds/image/random/${imageCount}`)
        .then(response => response.json())
        .then(responseJson => 
            consoleLogImages(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function makeImageString(responseJson) {
    let imageString = ``;
    for (let i = 0; i < responseJson.message.length; i++) {
        imageString += `<img src="${responseJson.message[i]}">`;
    };
    displayImages(imageString);
}

function consoleLogImages(responseJson) {
    //loop through the images and console log each one
    for (let i = 0; i < responseJson.message.length; i++) {
        console.log(responseJson.message[i]);
    };
    makeImageString(responseJson);
}

function displayImages(imageString) {
    console.log('displayImagesRan');
    $('.results').html(imageString);
}

function watchForm() {
    let imageCount = 3;
    $("form").submit (event => {
        event.preventDefault();

        //update image count with what the user submitted
        imageCount = $('#image-quantity').val();
        console.log(imageCount);
        getDogImages(imageCount);
    });
}

$(function() {
    console.log("App loaded, waiting for user to submit form");
    watchForm();
})