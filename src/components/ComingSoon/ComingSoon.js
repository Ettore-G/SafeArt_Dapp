import React, { Component } from 'react';


    // Set the date we're counting down to
    var countDownDate = new Date("Jan 30, 2022 12:00:00").getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);


class ComingSoon extends Component {
    render() {
        return (
            <section id="hero" className="hero-section row align-items-center">
                <div className="container-fluid">
                    <div  id="home"className="row text-center">
                        <div className="col-12"><h1>SafeArt</h1><h1 className="custom-text-coming">Coming Soon</h1>
                        </div>
                        <div className="col-12"><p className="custom-text-coming" id="demo"></p></div>
                    
                    </div>
                </div>
            </section>
        );
    }
}

export default ComingSoon;