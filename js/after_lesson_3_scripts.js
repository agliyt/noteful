$(document).ready(function() {

    $(".gus").click(function() {
        $(".gus-text").remove();
        $(".gus").append(`
            <svg class="gus-arrow" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7327 7.57277C18.1343 8.32807 18.1343 10.3388 16.7327 11.0941L7.94874 15.8274C6.61627 16.5454 5 15.5803 5 14.0667V4.60011C5 3.08648 6.61627 2.12144 7.94875 2.83946L16.7327 7.57277Z" fill="#F0821C"/>
            </svg>
            <h1 class="gus-text-selected">Gus</h1>
        `);
        $(".phone2").append(`
            <div class="confirm-button">
                <h1 class="confirm-text">Confirm</h1>
            </div>
        `);
        $(".confirm-button").click(function() {
            location.href = 'after-lesson-4.html';
        });
    });

});