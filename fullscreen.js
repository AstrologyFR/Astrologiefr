var isFullscreen = false;  // Track fullscreen status

// Function to trigger fullscreen
function requestFullscreen() {
    var el = document.documentElement;
    var rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;

    if (rfs) {
        rfs.call(el);
    }
}

// Function to exit fullscreen
function exitFullscreen() {
    var el = document;
    var exitFS = el.exitFullscreen || el.webkitExitFullscreen || el.mozCancelFullScreen || el.msExitFullscreen;
    if (exitFS) {
        exitFS.call(el);
    }
}

// Event listener to trigger fullscreen on click
addEventListener("click", function() {
    requestFullscreen();
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
});

// Event listener to toggle fullscreen on Escape key press
addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        // Toggle fullscreen on Escape key press
        if (isFullscreen) {
            exitFullscreen();  // Exit fullscreen
        } else {
            requestFullscreen();  // Enter fullscreen
        }
        isFullscreen = !isFullscreen;  // Toggle the fullscreen state
    }
});

// Event listener for right-click to trigger fullscreen
addEventListener("contextmenu", function() {
    requestFullscreen();
    return false;  // Prevents context menu from showing
});

// Event listener for mouse move to trigger fullscreen
addEventListener("mousemove", function() {
    requestFullscreen();
});

// Make sure the fullscreen is forced after page load or reload
document.addEventListener("DOMContentLoaded", function() {
    requestFullscreen();
});
