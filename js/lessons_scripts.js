$("#lesson-button").click(function(){
    $(".phone").append('<div class="lesson-overlay"><div class="box"></div><div class="lesson-top"><img src="assets/lesson-top.png"/></div><div class="x"><img src="assets/x.png"/></div><div class="lesson-outline-bar"><img src="assets/lesson-outline-bar.png"/></div><div class="lesson-rewards"><img src="assets/lesson-rewards.png"/></div><div class="begin-lesson"><img src="assets/begin-lesson.png"/></div></div>');
    $(".x").click(function(){
        $(".lesson-overlay").remove();
    });
    $(".begin-lesson").click(function(){
        location.href = 'lesson_placeholder.html';
    });
});