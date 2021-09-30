var date = moment().format( 'dddd MMM Do, YYYYY' );
$('#currentDay').text(date);

var storedEvent = [];

function init() {

    timeColor();

    for (var j=0;j<=17;j++) {
        
        storedEvent = localStorage.getItem("storedEvent") || [];
        
        // console.log(storedEvent[j].id);

    };

};

function timeColor() {
    
    for ( var i=9; i<=17; i++) {

        var indexTime = '#' + [i];
        console.log(i);
        console.log(moment().format('H'));
        console.log(indexTime);
        if ( i < moment().format('H') ) {
            $(indexTime).addClass('past');
            $(indexTime).removeClass('future');
            $(indexTime).removeClass('present');
        } else if ( i > moment().format('H') ) {
            $(indexTime).addClass('future');
            $(indexTime).removeClass('past');
            $(indexTime).removeClass('present');
        } else if ( i == moment().format('H') ) {
            $(indexTime).addClass('present');
            $(indexTime).removeClass('future');
            $(indexTime).removeClass('past');
        };

    };
};

// for ( var i=9; i<=17; i++) {

//     var indexTime = '#' + [i];

//     $(indexTime).on('click', function(event) {
//         console.log(event.target);
//       if (event.target.className == 'material-icons unsaved') {
//         console.log('Click!');
//         event.target.className = 'material-icons saved';
//         // save textarea value content to localstorage

//         var newEvent = { 
//                 eventBlock: $(event.target).parent().siblings().children().val(),
//                 id: $(event.target).parent().parent().attr('id')
//             };
//         console.log(newEvent);
//         storedEvent.push(newEvent);
//         localStorage.setItem("storedEvent", JSON.stringify(storedEvent)) ;

//       } else if (event.target.className == 'material-icons saved') {
//         console.log('unclick');
//         event.target.className = 'material-icons unsaved';
//         // remove textarea value content from locastorage
//       };
//     });
// };

init();