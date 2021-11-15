import React, { Component } from 'react';


    // Set the date we're counting down to
    let countDownDate = new Date("Jan 30, 2022 12:00:00").getTime();

    // Update the count down every 1 second
    let countdownfunction = setInterval(function() {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
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
                        <div className="col-12"><p id="demo" className="custom-text-coming" ></p></div>
                        
                    
                    </div>
                </div>
            </section>
        );
    }
}

export default ComingSoon;