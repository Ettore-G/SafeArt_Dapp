import React, { Component } from 'react';


    // Set the date we're counting down to
    let countDownDate = new Date("Jan 20, 2022 21:00:00").getTime();

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
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "See the magic";
    }
    }, 1000);


class ComingSoon extends Component {
    render() {
        return (
            <section id="heroComing" className="hero-section row align-items-center">
                <div className="container-fluid">
                    <div  id="home"className="row text-center">
                        <div className="col-12 custom-text-coming"><h1>SafeArt</h1><h1 className="custom-text-coming">Coming Soon</h1>
                        <h4 className="">Safeart.io is a new platform based on the release NFT collections inspired at the history of art and generative-art collection.</h4>
                        <h4 className="">First drop.</h4>
                        </div>
                        <div className="col-12"><p id="demo" className="custom-text-coming" ></p></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ComingSoon;