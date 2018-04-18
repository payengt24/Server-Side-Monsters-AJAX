console.log('JS works')

$(document).ready(onReady);

function onReady() {
    console.log('JQ works');
    $.ajax({
        type: 'GET',
        url: '/monster'
    })
        .then(function (response) {
            console.log('my response', response);
            let list = '<ul>'
            response.forEach(function (value) {
                console.log(value);
                list = list + '<li>' + value + '</li>';
            });

            list += '</ul>';

            $('#listOfMonsters').append(list);

        })
}