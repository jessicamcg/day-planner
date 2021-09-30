var date = moment().format( 'dddd MMM Do, YYYYY' );
$('#currentDay').text(date);

for ( var i=9; i<=16; i++) {

    var indexTime = '#' + [i];

    if ( i == moment().format('H') ) {
        $('.col-8').addClass('present');
    } else if ( i > moment().format('H') ) {
        $('.col-8').addClass('future');
    } else if ( i < moment().format('H') ) {
        $('.col-8').addClass('past');
    };

};

function init() {



};

for ( var i=9; i<=16; i++) {

    var indexTime = '#' + [i];

    $(indexTime).on('click', event => {
        console.log(event.target);
      if (event.target.className == 'material-icons unsaved') {
        console.log('Click!');
        event.target.className = 'material-icons saved';
        // save textarea value content to localstorage
        var storedEvent = $('.description').val() ;
        localStorage["storedEvent"] = storedEvent ;
        localStorage.setItem("storedEvent", storedEvent) ;

      } else if (event.target.className == 'material-icons saved') {
        console.log('unclick');
        event.target.className = 'material-icons unsaved';
        // remove textarea value content from locastorage
      };
    });
};

init();