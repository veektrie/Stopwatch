checkSpeed(130);


function checkSpeed(speed) {
    const speedLimit= 70;
    const kmPerPoint = 5;

    if ( speed < speedLimit + kmPerPoint )
    console.log('Ok');

    else {
        points = Math.floor ( ( speed - speedLimit) / kmPerPoint); points++;
       if ( points >= 12)
       console.log('License suspended'); 
       else
       console.log ('Points',points);
 }
}