const dropDown = $('#drop-down');
$.get("https://dog.ceo/api/breeds/list/all", function (data) {
    let breeds = Object.keys(data.message);
    for (let breed of breeds) {
        const domElement = `<option value=${breed}>${breed}</option>`;
        dropDown.append(domElement);
    }
}, false);
// $.ajax({
//     'URL': 'https://dog.ceo/api/breeds/list/all',
//     'method': 'get',
//     'success': function (data) {
//         let breeds = Object.keys(data.message);
//         for (let breed of breeds) {
//             const domElement = `<option value=${breed}>${breed}</option>`;
//             dropDown.append(domElement);
//         }
//     }, 
//     'async': 'false'
// });

let currentBreed;
// if(currentBreed == undefined){
//     $('#next-img-btn').css({
//         'display': "none",
//     });
// }else{
    
// }
function updateBreed(event) {
    event.preventDefault();
    currentBreed = dropDown.val();
    $('#next-img-btn').css({
        'display': "block",
    });
};

function updateImage(event) {
    event.preventDefault();
    console.log(currentBreed);
    $.get(`https://dog.ceo/api/breed/${currentBreed}/images/random`, function (data) {
        console.log(data.message);
        $('#dog-image').attr('src', data.message);
    });
}

$('#get-image').click(updateBreed);
$('#next-img-btn').click(updateImage);