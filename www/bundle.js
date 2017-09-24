document.addEventListener('deviceready', () => {
  if (navigator.getUserMedia) {
       console.log('getUserMedia supported.');
       navigator.getUserMedia (
          // constraints - only audio needed for this app
          {
             audio: true
          },

          // Success callback
          function(stream) {
            console.log(stream);
          },

          // Error callback
          function(err) {
             console.log('The following gUM error occured: ' + err);
          }
       );
    } else {
       console.log('getUserMedia not supported on your browser!');
    }
}, false);
