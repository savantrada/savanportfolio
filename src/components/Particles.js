import Particles from "react-particles-js";
import React from "react";

export default function Particlescanvas() {

	const divStyle = {
		position: 'absolute',
		backgroundcolor: "black"
	  };

  return (
    <Particles
	style={divStyle}
	className="is-fullhight"
	params={{
	    "particles": {
	        "number": {
	            "value": 250,
	            "density": {
	                "enable": false
				}
			},
			"color": {
				"value": "#001B40"
			},
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
				"enable": false,
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "right",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
					"mode": "bubble",
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
					"opacity": 0,
					"color": "#3CA9D1"
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
  );
}
