// Get access to the user's camera and microphone
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(function (stream) {
        // Display the local video stream
        const localVideo = document.getElementById('local-video-stream');
        localVideo.srcObject = stream;

        // Create a peer connection object
        const peerConnection = new RTCPeerConnection();

        // Add the local stream to the peer connection
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

        // Handle incoming remote video streams
        peerConnection.ontrack = function (event) {
            const remoteVideo = document.createElement('video');
            remoteVideo.srcObject = event.streams[0];
            remoteVideo.autoplay = true;
            document.getElementById('remote-videos').appendChild(remoteVideo);
        };

        // Create an offer and set it as the local description
        peerConnection.createOffer()
            .then(function (offer) {
                return peerConnection.setLocalDescription(offer);
            })
            .then(function () {
                // Send the offer to the other peer (you'll need a signaling server for this)
            })
            .catch(function (error) {
                console.error('Error creating offer:', error);
            });
    })
    .catch(function (error) {
        console.error('Error accessing user media:', error);
    });
