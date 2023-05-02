$(document).ready(function() {

    $(".sidebar-lessons").click(function() {
        $(".sidebar-band").removeClass("selected");
        $(".sidebar-lessons").addClass("selected");
        // TODO: animate clouds moving out
        $(".phone2").append(`
            <div class="left-cloud-overlay">
                <svg width="496" height="390" viewBox="0 0 496 390" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="23.3566" cy="22.9336" rx="23.3566" ry="22.9336" transform="matrix(-1 8.74228e-08 8.74228e-08 1 391.006 298)" fill="#F3F3F3"/>
                <ellipse cx="29.9128" cy="29.3711" rx="29.9128" ry="29.3711" transform="matrix(-1 8.74228e-08 8.74228e-08 1 415.592 321.336)" fill="#F3F3F3"/>
                <ellipse cx="33.6007" cy="32.9922" rx="33.6007" ry="32.9922" transform="matrix(-1 8.74228e-08 8.74228e-08 1 436.08 353.523)" fill="#F3F3F3"/>
                <ellipse cx="37.6983" cy="37.0156" rx="37.6983" ry="37.0156" transform="matrix(-1 8.74228e-08 8.74228e-08 1 444.275 386.516)" fill="#F3F3F3"/>
                <rect width="33.6007" height="139.211" transform="matrix(-1 8.74228e-08 8.74228e-08 1 377.894 321.336)" fill="#F3F3F3"/>
                <ellipse cx="23.3566" cy="22.9336" rx="23.3566" ry="22.9336" transform="matrix(-1 8.74228e-08 8.74228e-08 1 378.713 304.438)" fill="white"/>
                <ellipse cx="29.9128" cy="29.3711" rx="29.9128" ry="29.3711" transform="matrix(-1 8.74228e-08 8.74228e-08 1 403.299 327.773)" fill="white"/>
                <ellipse cx="33.6007" cy="32.9922" rx="33.6007" ry="32.9922" transform="matrix(-1 8.74228e-08 8.74228e-08 1 423.787 359.961)" fill="white"/>
                <rect width="33.6007" height="139.211" transform="matrix(-1 8.74228e-08 8.74228e-08 1 365.601 327.773)" fill="white"/>
                <ellipse cx="23.3566" cy="22.9336" rx="23.3566" ry="22.9336" transform="matrix(-1 8.74228e-08 8.74228e-08 1 404.731 304.438)" fill="#E6E6E6"/>
                <ellipse cx="29.9128" cy="29.3711" rx="29.9128" ry="29.3711" transform="matrix(-1 8.74228e-08 8.74228e-08 1 429.317 327.772)" fill="#E6E6E6"/>
                <ellipse cx="33.6007" cy="32.9922" rx="33.6007" ry="32.9922" transform="matrix(-1 8.74228e-08 8.74228e-08 1 449.805 359.96)" fill="#E6E6E6"/>
                <rect width="33.6007" height="139.211" transform="matrix(-1 8.74228e-08 8.74228e-08 1 391.618 327.772)" fill="#E6E6E6"/>
                <ellipse cx="23.3566" cy="22.9336" rx="23.3566" ry="22.9336" transform="matrix(-1 8.74228e-08 8.74228e-08 1 390.731 307.438)" fill="#F3F3F3"/>
                <ellipse cx="29.9128" cy="29.3711" rx="29.9128" ry="29.3711" transform="matrix(-1 8.74228e-08 8.74228e-08 1 415.317 330.773)" fill="#F3F3F3"/>
                <ellipse cx="33.6007" cy="32.9922" rx="33.6007" ry="32.9922" transform="matrix(-1 8.74228e-08 8.74228e-08 1 435.805 362.961)" fill="#F3F3F3"/>
                <rect width="33.6007" height="139.211" transform="matrix(-1 8.74228e-08 8.74228e-08 1 377.618 330.773)" fill="#F3F3F3"/>
                <ellipse cx="23.3566" cy="22.9336" rx="23.3566" ry="22.9336" transform="matrix(-1 8.74228e-08 8.74228e-08 1 378.713 304.438)" fill="white"/>
                <ellipse cx="29.9128" cy="29.3711" rx="29.9128" ry="29.3711" transform="matrix(-1 8.74228e-08 8.74228e-08 1 403.299 327.773)" fill="white"/>
                <ellipse cx="33.6007" cy="32.9922" rx="33.6007" ry="32.9922" transform="matrix(-1 8.74228e-08 8.74228e-08 1 423.787 359.961)" fill="white"/>
                <rect width="33.6007" height="139.211" transform="matrix(-1 8.74228e-08 8.74228e-08 1 365.601 327.773)" fill="white"/>
                <ellipse cx="392.5" cy="347.932" rx="28.5" ry="35.0684" transform="rotate(180 392.5 347.932)" fill="#F3F3F3"/>
                <ellipse cx="414.5" cy="302.404" rx="36.5" ry="44.9121" transform="rotate(180 414.5 302.404)" fill="#F3F3F3"/>
                <ellipse cx="435" cy="247.648" rx="41" ry="50.4492" transform="rotate(180 435 247.648)" fill="#F3F3F3"/>
                <ellipse cx="440" cy="191.047" rx="46" ry="56.6016" transform="rotate(180 440 191.047)" fill="#F3F3F3"/>
                <ellipse cx="410" cy="134.445" rx="46" ry="56.6016" transform="rotate(180 410 134.445)" fill="#F3F3F3"/>
                <rect x="405" y="347.316" width="41" height="212.871" transform="rotate(180 405 347.316)" fill="#F3F3F3"/>
                <ellipse cx="377.5" cy="338.088" rx="28.5" ry="35.0684" transform="rotate(180 377.5 338.088)" fill="white"/>
                <ellipse cx="399.5" cy="292.561" rx="36.5" ry="44.9121" transform="rotate(180 399.5 292.561)" fill="white"/>
                <ellipse cx="420" cy="237.805" rx="41" ry="50.4492" transform="rotate(180 420 237.805)" fill="white"/>
                <ellipse cx="425" cy="181.203" rx="46" ry="56.6016" transform="rotate(180 425 181.203)" fill="white"/>
                <ellipse cx="395" cy="124.602" rx="46" ry="56.6016" transform="rotate(180 395 124.602)" fill="white"/>
                <rect x="390" y="337.473" width="41" height="212.871" transform="rotate(180 390 337.473)" fill="white"/>
                <ellipse cx="402.5" cy="338.088" rx="28.5" ry="35.0684" transform="rotate(180 402.5 338.088)" fill="#E6E6E6"/>
                <ellipse cx="424.5" cy="292.561" rx="36.5" ry="44.9121" transform="rotate(180 424.5 292.561)" fill="#E6E6E6"/>
                <ellipse cx="445" cy="237.805" rx="41" ry="50.4492" transform="rotate(180 445 237.805)" fill="#E6E6E6"/>
                <ellipse cx="450" cy="181.203" rx="46" ry="56.6016" transform="rotate(180 450 181.203)" fill="#E6E6E6"/>
                <ellipse cx="420" cy="124.602" rx="46" ry="56.6016" transform="rotate(180 420 124.602)" fill="#E6E6E6"/>
                <rect x="415" y="337.473" width="41" height="212.871" transform="rotate(180 415 337.473)" fill="#E6E6E6"/>
                <ellipse cx="392.5" cy="347.932" rx="28.5" ry="35.0684" transform="rotate(180 392.5 347.932)" fill="#F3F3F3"/>
                <ellipse cx="414.5" cy="302.404" rx="36.5" ry="44.9121" transform="rotate(180 414.5 302.404)" fill="#F3F3F3"/>
                <ellipse cx="435" cy="247.648" rx="41" ry="50.4492" transform="rotate(180 435 247.648)" fill="#F3F3F3"/>
                <ellipse cx="440" cy="191.047" rx="46" ry="56.6016" transform="rotate(180 440 191.047)" fill="#F3F3F3"/>
                <ellipse cx="410" cy="134.445" rx="46" ry="56.6016" transform="rotate(180 410 134.445)" fill="#F3F3F3"/>
                <rect x="405" y="347.316" width="41" height="212.871" transform="rotate(180 405 347.316)" fill="#F3F3F3"/>
                <ellipse cx="377.5" cy="338.088" rx="28.5" ry="35.0684" transform="rotate(180 377.5 338.088)" fill="white"/>
                <ellipse cx="399.5" cy="292.561" rx="36.5" ry="44.9121" transform="rotate(180 399.5 292.561)" fill="white"/>
                <ellipse cx="420" cy="237.805" rx="41" ry="50.4492" transform="rotate(180 420 237.805)" fill="white"/>
                <ellipse cx="425" cy="181.203" rx="46" ry="56.6016" transform="rotate(180 425 181.203)" fill="white"/>
                <ellipse cx="395" cy="124.602" rx="46" ry="56.6016" transform="rotate(180 395 124.602)" fill="white"/>
                <rect x="390" y="337.473" width="41" height="212.871" transform="rotate(180 390 337.473)" fill="white"/>
                <ellipse cx="30.9339" cy="32.9922" rx="30.9339" ry="32.9922" transform="matrix(-1 8.74228e-08 8.74228e-08 1 455.82 -46.4766)" fill="#F3F3F3"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(-1 8.74228e-08 8.74228e-08 1 463.365 -13.4844)" fill="#F3F3F3"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(-1 8.74228e-08 8.74228e-08 1 440.73 23.5312)" fill="#F3F3F3"/>
                <rect width="30.9339" height="139.211" transform="matrix(-1 8.74228e-08 8.74228e-08 1 402.251 -78.6641)" fill="#F3F3F3"/>
                <ellipse cx="30.9339" cy="32.9922" rx="30.9339" ry="32.9922" transform="matrix(-1 8.74228e-08 8.74228e-08 1 444.502 -40.0391)" fill="white"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(-1 8.74228e-08 8.74228e-08 1 452.047 -7.04688)" fill="white"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(-1 8.74228e-08 8.74228e-08 1 429.413 29.9688)" fill="white"/>
                <rect width="30.9339" height="139.211" transform="matrix(-1 8.74228e-08 8.74228e-08 1 390.934 -72.2266)" fill="white"/>
                <ellipse cx="30.9339" cy="32.9922" rx="30.9339" ry="32.9922" transform="matrix(-1 8.74228e-08 8.74228e-08 1 468.455 -40.04)" fill="#E6E6E6"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(-1 8.74228e-08 8.74228e-08 1 476 -7.04785)" fill="#E6E6E6"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(-1 8.74228e-08 8.74228e-08 1 453.365 29.9688)" fill="#E6E6E6"/>
                <rect width="30.9339" height="139.211" transform="matrix(-1 8.74228e-08 8.74228e-08 1 414.887 -72.2275)" fill="#E6E6E6"/>
                <ellipse cx="30.9339" cy="32.9922" rx="30.9339" ry="32.9922" transform="matrix(-1 8.74228e-08 8.74228e-08 1 455.566 -37.0391)" fill="#F3F3F3"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(-1 8.74228e-08 8.74228e-08 1 463.111 -4.04688)" fill="#F3F3F3"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(-1 8.74228e-08 8.74228e-08 1 440.476 32.9688)" fill="#F3F3F3"/>
                <rect width="30.9339" height="139.211" transform="matrix(-1 8.74228e-08 8.74228e-08 1 401.998 -69.2266)" fill="#F3F3F3"/>
                <ellipse cx="30.9339" cy="32.9922" rx="30.9339" ry="32.9922" transform="matrix(-1 8.74228e-08 8.74228e-08 1 444.502 -40.0391)" fill="white"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(-1 8.74228e-08 8.74228e-08 1 452.047 -7.04688)" fill="white"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(-1 8.74228e-08 8.74228e-08 1 429.413 29.9688)" fill="white"/>
                <rect width="30.9339" height="139.211" transform="matrix(-1 8.74228e-08 8.74228e-08 1 390.934 -72.2266)" fill="white"/>
                <path d="M383 -96L-241 -95.9999L-241 507L383 507L383 -96Z" fill="white"/>
                </svg> 
            </div>
        `);
        $(".phone2").append(`
            <div class="right-cloud-overlay">
                <svg width="456" height="390" viewBox="0 0 456 390" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="23.3566" cy="22.9336" rx="23.3566" ry="22.9336" transform="matrix(1 0 0 -1 104.994 113)" fill="#F3F3F3"/>
                <ellipse cx="29.9128" cy="29.3711" rx="29.9128" ry="29.3711" transform="matrix(1 0 0 -1 80.4081 89.6641)" fill="#F3F3F3"/>
                <ellipse cx="33.6007" cy="32.9922" rx="33.6007" ry="32.9922" transform="matrix(1 0 0 -1 59.9199 57.4766)" fill="#F3F3F3"/>
                <ellipse cx="37.6983" cy="37.0156" rx="37.6983" ry="37.0156" transform="matrix(1 0 0 -1 51.7246 24.4844)" fill="#F3F3F3"/>
                <rect width="33.6007" height="139.211" transform="matrix(1 0 0 -1 118.106 89.6641)" fill="#F3F3F3"/>
                <ellipse cx="23.3566" cy="22.9336" rx="23.3566" ry="22.9336" transform="matrix(1 0 0 -1 117.287 106.562)" fill="white"/>
                <ellipse cx="29.9128" cy="29.3711" rx="29.9128" ry="29.3711" transform="matrix(1 0 0 -1 92.701 83.2266)" fill="white"/>
                <ellipse cx="33.6007" cy="32.9922" rx="33.6007" ry="32.9922" transform="matrix(1 0 0 -1 72.2128 51.0391)" fill="white"/>
                <ellipse cx="37.6983" cy="37.0156" rx="37.6983" ry="37.0156" transform="matrix(1 0 0 -1 64.0175 18.0469)" fill="white"/>
                <rect width="33.6007" height="139.211" transform="matrix(1 0 0 -1 130.399 83.2266)" fill="white"/>
                <ellipse cx="23.3566" cy="22.9336" rx="23.3566" ry="22.9336" transform="matrix(1 0 0 -1 91.2693 106.562)" fill="#E6E6E6"/>
                <ellipse cx="29.9128" cy="29.3711" rx="29.9128" ry="29.3711" transform="matrix(1 0 0 -1 66.6835 83.2275)" fill="#E6E6E6"/>
                <ellipse cx="33.6007" cy="32.9922" rx="33.6007" ry="32.9922" transform="matrix(1 0 0 -1 46.1953 51.04)" fill="#E6E6E6"/>
                <ellipse cx="37.6983" cy="37.0156" rx="37.6983" ry="37.0156" transform="matrix(1 0 0 -1 38 18.0479)" fill="#E6E6E6"/>
                <rect width="33.6007" height="139.211" transform="matrix(1 0 0 -1 104.382 83.2275)" fill="#E6E6E6"/>
                <ellipse cx="23.3566" cy="22.9336" rx="23.3566" ry="22.9336" transform="matrix(1 0 0 -1 105.269 103.562)" fill="#F3F3F3"/>
                <ellipse cx="29.9128" cy="29.3711" rx="29.9128" ry="29.3711" transform="matrix(1 0 0 -1 80.6835 80.2266)" fill="#F3F3F3"/>
                <ellipse cx="33.6007" cy="32.9922" rx="33.6007" ry="32.9922" transform="matrix(1 0 0 -1 60.1953 48.0391)" fill="#F3F3F3"/>
                <ellipse cx="37.6983" cy="37.0156" rx="37.6983" ry="37.0156" transform="matrix(1 0 0 -1 52 15.0469)" fill="#F3F3F3"/>
                <rect width="33.6007" height="139.211" transform="matrix(1 0 0 -1 118.382 80.2266)" fill="#F3F3F3"/>
                <ellipse cx="23.3566" cy="22.9336" rx="23.3566" ry="22.9336" transform="matrix(1 0 0 -1 117.287 106.562)" fill="white"/>
                <ellipse cx="29.9128" cy="29.3711" rx="29.9128" ry="29.3711" transform="matrix(1 0 0 -1 92.701 83.2266)" fill="white"/>
                <ellipse cx="33.6007" cy="32.9922" rx="33.6007" ry="32.9922" transform="matrix(1 0 0 -1 72.2128 51.0391)" fill="white"/>
                <ellipse cx="37.6983" cy="37.0156" rx="37.6983" ry="37.0156" transform="matrix(1 0 0 -1 64.0175 18.0469)" fill="white"/>
                <rect width="33.6007" height="139.211" transform="matrix(1 0 0 -1 130.399 83.2266)" fill="white"/>
                <ellipse cx="103.5" cy="63.0684" rx="28.5" ry="35.0684" fill="#F3F3F3"/>
                <ellipse cx="81.5" cy="108.596" rx="36.5" ry="44.9121" fill="#F3F3F3"/>
                <ellipse cx="61" cy="163.352" rx="41" ry="50.4492" fill="#F3F3F3"/>
                <ellipse cx="56" cy="219.953" rx="46" ry="56.6016" fill="#F3F3F3"/>
                <ellipse cx="86" cy="276.555" rx="46" ry="56.6016" fill="#F3F3F3"/>
                <rect x="91" y="63.6836" width="41" height="212.871" fill="#F3F3F3"/>
                <ellipse cx="118.5" cy="72.9121" rx="28.5" ry="35.0684" fill="white"/>
                <ellipse cx="96.5" cy="118.439" rx="36.5" ry="44.9121" fill="white"/>
                <ellipse cx="76" cy="173.195" rx="41" ry="50.4492" fill="white"/>
                <ellipse cx="71" cy="229.797" rx="46" ry="56.6016" fill="white"/>
                <ellipse cx="101" cy="286.398" rx="46" ry="56.6016" fill="white"/>
                <rect x="106" y="73.5269" width="41" height="212.871" fill="white"/>
                <ellipse cx="93.5" cy="72.9121" rx="28.5" ry="35.0684" fill="#E6E6E6"/>
                <ellipse cx="71.5" cy="118.439" rx="36.5" ry="44.9121" fill="#E6E6E6"/>
                <ellipse cx="51" cy="173.195" rx="41" ry="50.4492" fill="#E6E6E6"/>
                <ellipse cx="46" cy="229.797" rx="46" ry="56.6016" fill="#E6E6E6"/>
                <ellipse cx="76" cy="286.398" rx="46" ry="56.6016" fill="#E6E6E6"/>
                <rect x="81" y="73.5269" width="41" height="212.871" fill="#E6E6E6"/>
                <ellipse cx="103.5" cy="63.0684" rx="28.5" ry="35.0684" fill="#F3F3F3"/>
                <ellipse cx="81.5" cy="108.596" rx="36.5" ry="44.9121" fill="#F3F3F3"/>
                <ellipse cx="61" cy="163.352" rx="41" ry="50.4492" fill="#F3F3F3"/>
                <ellipse cx="56" cy="219.953" rx="46" ry="56.6016" fill="#F3F3F3"/>
                <ellipse cx="86" cy="276.555" rx="46" ry="56.6016" fill="#F3F3F3"/>
                <rect x="91" y="63.6836" width="41" height="212.871" fill="#F3F3F3"/>
                <ellipse cx="118.5" cy="72.9121" rx="28.5" ry="35.0684" fill="white"/>
                <ellipse cx="96.5" cy="118.439" rx="36.5" ry="44.9121" fill="white"/>
                <ellipse cx="76" cy="173.195" rx="41" ry="50.4492" fill="white"/>
                <ellipse cx="71" cy="229.797" rx="46" ry="56.6016" fill="white"/>
                <ellipse cx="101" cy="286.398" rx="46" ry="56.6016" fill="white"/>
                <rect x="106" y="73.5269" width="41" height="212.871" fill="white"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(1 0 0 -1 32.6354 424.484)" fill="#F3F3F3"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(1 0 0 -1 55.27 387.469)" fill="#F3F3F3"/>
                <rect width="30.9339" height="139.211" transform="matrix(1 0 0 -1 93.7487 489.664)" fill="#F3F3F3"/>
                <ellipse cx="30.9339" cy="32.9922" rx="30.9339" ry="32.9922" transform="matrix(1 0 0 -1 51.4975 451.039)" fill="white"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(1 0 0 -1 43.9526 418.047)" fill="white"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(1 0 0 -1 66.5872 381.031)" fill="white"/>
                <rect width="30.9339" height="139.211" transform="matrix(1 0 0 -1 105.066 483.227)" fill="white"/>
                <ellipse cx="30.9339" cy="32.9922" rx="30.9339" ry="32.9922" transform="matrix(1 0 0 -1 27.5449 451.04)" fill="#E6E6E6"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(1 0 0 -1 20 418.048)" fill="#E6E6E6"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(1 0 0 -1 42.6346 381.031)" fill="#E6E6E6"/>
                <rect width="30.9339" height="139.211" transform="matrix(1 0 0 -1 81.1134 483.228)" fill="#E6E6E6"/>
                <ellipse cx="30.9339" cy="32.9922" rx="30.9339" ry="32.9922" transform="matrix(1 0 0 -1 40.4338 448.039)" fill="#F3F3F3"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(1 0 0 -1 32.8889 415.047)" fill="#F3F3F3"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(1 0 0 -1 55.5235 378.031)" fill="#F3F3F3"/>
                <rect width="30.9339" height="139.211" transform="matrix(1 0 0 -1 94.0023 480.227)" fill="#F3F3F3"/>
                <ellipse cx="30.9339" cy="32.9922" rx="30.9339" ry="32.9922" transform="matrix(1 0 0 -1 51.4975 451.039)" fill="white"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(1 0 0 -1 43.9526 418.047)" fill="white"/>
                <ellipse cx="34.7064" cy="37.0156" rx="34.7064" ry="37.0156" transform="matrix(1 0 0 -1 66.5872 381.031)" fill="white"/>
                <rect width="30.9339" height="139.211" transform="matrix(1 0 0 -1 105.066 483.227)" fill="white"/>
                <path d="M113 507H737V-96H113V507Z" fill="white"/>
                </svg>            
            </div>
        `);
        
        setTimeout(() => {
            location.href = 'index.html';
        }, 1000);
    });

});