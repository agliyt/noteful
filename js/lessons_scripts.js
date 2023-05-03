$(document).ready(function() {

    if (sessionStorage.getItem("completed") == "true") {
        $(".streak-text").text("5");
    }

    $(".left-cloud").addClass("move-out");
    $(".right-cloud").addClass("move-out");
    setTimeout(() => {
        $(".left-cloud").removeClass("move-out");
        $(".left-cloud").css("left", "-554px");
        $(".right-cloud").removeClass("move-out");
        $(".right-cloud").css("left", "653px");
    }, 550);

    $("#lesson-button").click(function() {
        $(".phone").append(`
            <div class="lesson-overlay">
                <div class="box">
                    <svg class="x" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                    <h1 class="lesson-title">Staff Lines and Spaces</h1>
                    <div class="icon-box">
                        <img class="staff-icon" src="assets/staff-icon.png"/>
                        <img class="terms-icon" src="assets/terms-icon.png"/>
                    </div>
                    <div class="lesson-outline-bar">
                        <h1 class="lesson-outline-text-1">Lesson 1 of 3</h1>
                        <div class="lesson-outline-box">
                            <h1 class="lesson-outline-text-2">Lesson Outline</h1>
                            <svg class="book" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.4662 2.06012C21.7097 1.93665 20.9436 1.8731 20.176 1.87012C17.5568 1.86809 14.9922 2.57969 12.788 3.92012C10.5781 2.59729 8.01397 1.90315 5.40006 1.92012C4.63239 1.9231 3.86632 1.98665 3.10979 2.11012C2.86198 2.1506 2.63758 2.27358 2.47697 2.45691C2.31637 2.64025 2.23014 2.87189 2.23379 3.11012V15.1101C2.23153 15.2571 2.26348 15.4027 2.32735 15.5366C2.39123 15.6705 2.48547 15.7894 2.60337 15.8849C2.72127 15.9803 2.85993 16.05 3.00948 16.089C3.15903 16.1279 3.3158 16.1351 3.46863 16.1101C4.98107 15.862 6.53063 15.9032 8.02601 16.2312C9.5214 16.5592 10.9324 17.1675 12.1759 18.0201L12.3025 18.0901H12.4186C12.5357 18.1363 12.6612 18.1601 12.788 18.1601C12.9148 18.1601 13.0404 18.1363 13.1574 18.0901H13.2735L13.4002 18.0201C14.6349 17.1484 16.0419 16.5205 17.5376 16.1735C19.0332 15.8265 20.5872 15.7675 22.1074 16.0001C22.2602 16.0251 22.417 16.0179 22.5665 15.979C22.7161 15.94 22.8547 15.8703 22.9726 15.7749C23.0905 15.6794 23.1848 15.5605 23.2487 15.4266C23.3125 15.2927 23.3445 15.1471 23.3422 15.0001V3.00012C23.3312 2.77228 23.2384 2.55483 23.0791 2.38386C22.9197 2.21289 22.7035 2.09866 22.4662 2.06012ZM11.7326 15.3501C9.77993 14.3768 7.60643 13.8688 5.40006 13.8701C5.05177 13.8701 4.70348 13.8701 4.34463 13.8701V3.87012C4.69615 3.85093 5.04854 3.85093 5.40006 3.87012C7.65168 3.86776 9.85416 4.49381 11.7326 5.67012V15.3501ZM21.2314 13.9101C20.8725 13.9101 20.5242 13.9101 20.176 13.9101C17.9696 13.9088 15.7961 14.4168 13.8434 15.3901V5.67012C15.7219 4.49381 17.9243 3.86776 20.176 3.87012C20.5275 3.85093 20.8799 3.85093 21.2314 3.87012V13.9101ZM22.4662 18.0601C21.7097 17.9367 20.9436 17.8731 20.176 17.8701C17.5568 17.8681 14.9922 18.5797 12.788 19.9201C10.5838 18.5797 8.01923 17.8681 5.40006 17.8701C4.63239 17.8731 3.86632 17.9367 3.10979 18.0601C2.9724 18.0808 2.84068 18.127 2.7222 18.196C2.60372 18.2651 2.50081 18.3557 2.4194 18.4625C2.338 18.5694 2.27969 18.6905 2.24783 18.8188C2.21598 18.9471 2.21121 19.0801 2.23379 19.2101C2.28743 19.4698 2.4475 19.6988 2.67896 19.8468C2.91041 19.9949 3.19437 20.05 3.46863 20.0001C4.98107 19.752 6.53063 19.7932 8.02601 20.1212C9.5214 20.4492 10.9324 21.0575 12.1759 21.9101C12.3546 22.0307 12.5686 22.0955 12.788 22.0955C13.0074 22.0955 13.2214 22.0307 13.4002 21.9101C14.6436 21.0575 16.0546 20.4492 17.55 20.1212C19.0454 19.7932 20.5949 19.752 22.1074 20.0001C22.3816 20.05 22.6656 19.9949 22.8971 19.8468C23.1285 19.6988 23.2886 19.4698 23.3422 19.2101C23.3648 19.0801 23.36 18.9471 23.3282 18.8188C23.2963 18.6905 23.238 18.5694 23.1566 18.4625C23.0752 18.3557 22.9723 18.2651 22.8538 18.196C22.7353 18.127 22.6036 18.0808 22.4662 18.0601Z" fill="black"/>
                            </svg>
                            <svg class="right-arrow-1" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.89392 18L16.2265 12L9.89392 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="lesson-rewards">
                        <h1 class="lesson-rewards-text">Lesson Rewards:</h1>
                        <div class="lesson-diamond-circle">
                            <img class="lesson-diamond" src="assets/diamond.png"/>
                        </div>
                        <h1 class="lesson-diamond-text">X5</h1>
                    </div>
                    <div class="begin-lesson">
                        <h1 class="begin-lesson-text">Begin Lesson</h1>
                        <svg class="right-arrow-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="lesson-top">
                    <h1 class="lesson-top-text">Staff</h1>
                </div>
            </div>
        `);
        $(".x").click(function() {
            $(".lesson-overlay").remove();
        });
        $(".begin-lesson").click(function() {
            $(".lesson-overlay").remove();
            $(".left-sidebar").remove();
            $(".right-sidebar-lessons").remove();
            $(".left-cloud").addClass("move");
            $(".right-cloud").addClass("move");
            setTimeout(() => {
                location.href = 'lesson_placeholder.html';
            }, 600);
        });
    });

    $(".sidebar-band").click(function() {
        $(".sidebar-lessons").removeClass("selected");
        $(".sidebar-band").addClass("selected");
        $(".left-cloud").addClass("move");
        $(".right-cloud").addClass("move");
        setTimeout(() => {
            location.href = 'band.html';
        }, 600);
    });

});