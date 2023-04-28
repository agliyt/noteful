$(document).ready(function() {

    function changeProgressBar() {
        $(".streak-in-circle-text").text("5 days");
        var i = 0;
        if (i == 0) {
            i = 1;
            var deg = 18;
            var id = setInterval(frame, deg);

            function frame() {
                if (deg >= 90) {
                    clearInterval(id);
                    i = 0;
                } else {
                    deg++;
                    $(".streak-circle-progress-bar").css("background-image", "linear-gradient(90deg, transparent 50%, #E5A162 50%), linear-gradient(" + deg + "deg, #E5A162 50%, transparent 50%)");
                }
            }
        }
    }

    function twinkle() {
        var image = 1
        setInterval(function () {
            $(".star").remove();
            if (image == 0) {
                $(".phone2").append(`
                    <svg class="star star-1" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_45_143)">
                        <path d="M32.3279 5.23608C33.4413 3.05433 36.5587 3.05433 37.6721 5.23608L44.7982 19.1997C45.2341 20.0538 46.0521 20.6481 46.9992 20.7988L62.4814 23.2611C64.9005 23.6458 65.8638 26.6107 64.1329 28.3438L53.0548 39.4361C52.3772 40.1146 52.0647 41.0762 52.2141 42.0235L54.6566 57.5089C55.0382 59.9284 52.5162 61.7608 50.333 60.6502L36.3603 53.542C35.5055 53.1072 34.4945 53.1072 33.6397 53.542L19.667 60.6502C17.4838 61.7608 14.9618 59.9284 15.3434 57.5089L17.7859 42.0235C17.9353 41.0762 17.6228 40.1146 16.9452 39.4361L5.86709 28.3438C4.13619 26.6107 5.09953 23.6458 7.51857 23.2611L23.0008 20.7988C23.9479 20.6481 24.7659 20.0538 25.2018 19.1997L32.3279 5.23608Z" fill="#EED583"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_45_143" x="1.98657" y="2.59976" width="68.0269" height="65.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="1" dy="3"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.944 0 0 0 0 0.7375 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_143"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_143" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                    <svg class="star star-2" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_45_143)">
                        <path d="M32.3279 5.23608C33.4413 3.05433 36.5587 3.05433 37.6721 5.23608L44.7982 19.1997C45.2341 20.0538 46.0521 20.6481 46.9992 20.7988L62.4814 23.2611C64.9005 23.6458 65.8638 26.6107 64.1329 28.3438L53.0548 39.4361C52.3772 40.1146 52.0647 41.0762 52.2141 42.0235L54.6566 57.5089C55.0382 59.9284 52.5162 61.7608 50.333 60.6502L36.3603 53.542C35.5055 53.1072 34.4945 53.1072 33.6397 53.542L19.667 60.6502C17.4838 61.7608 14.9618 59.9284 15.3434 57.5089L17.7859 42.0235C17.9353 41.0762 17.6228 40.1146 16.9452 39.4361L5.86709 28.3438C4.13619 26.6107 5.09953 23.6458 7.51857 23.2611L23.0008 20.7988C23.9479 20.6481 24.7659 20.0538 25.2018 19.1997L32.3279 5.23608Z" fill="#EED583"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_45_143" x="1.98657" y="2.59976" width="68.0269" height="65.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="1" dy="3"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.944 0 0 0 0 0.7375 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_143"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_143" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                    <svg class="star star-3" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_45_143)">
                        <path d="M32.3279 5.23608C33.4413 3.05433 36.5587 3.05433 37.6721 5.23608L44.7982 19.1997C45.2341 20.0538 46.0521 20.6481 46.9992 20.7988L62.4814 23.2611C64.9005 23.6458 65.8638 26.6107 64.1329 28.3438L53.0548 39.4361C52.3772 40.1146 52.0647 41.0762 52.2141 42.0235L54.6566 57.5089C55.0382 59.9284 52.5162 61.7608 50.333 60.6502L36.3603 53.542C35.5055 53.1072 34.4945 53.1072 33.6397 53.542L19.667 60.6502C17.4838 61.7608 14.9618 59.9284 15.3434 57.5089L17.7859 42.0235C17.9353 41.0762 17.6228 40.1146 16.9452 39.4361L5.86709 28.3438C4.13619 26.6107 5.09953 23.6458 7.51857 23.2611L23.0008 20.7988C23.9479 20.6481 24.7659 20.0538 25.2018 19.1997L32.3279 5.23608Z" fill="#EED583"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_45_143" x="1.98657" y="2.59976" width="68.0269" height="65.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="1" dy="3"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.944 0 0 0 0 0.7375 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_143"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_143" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                    <svg class="star star-4" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_45_143)">
                        <path d="M32.3279 5.23608C33.4413 3.05433 36.5587 3.05433 37.6721 5.23608L44.7982 19.1997C45.2341 20.0538 46.0521 20.6481 46.9992 20.7988L62.4814 23.2611C64.9005 23.6458 65.8638 26.6107 64.1329 28.3438L53.0548 39.4361C52.3772 40.1146 52.0647 41.0762 52.2141 42.0235L54.6566 57.5089C55.0382 59.9284 52.5162 61.7608 50.333 60.6502L36.3603 53.542C35.5055 53.1072 34.4945 53.1072 33.6397 53.542L19.667 60.6502C17.4838 61.7608 14.9618 59.9284 15.3434 57.5089L17.7859 42.0235C17.9353 41.0762 17.6228 40.1146 16.9452 39.4361L5.86709 28.3438C4.13619 26.6107 5.09953 23.6458 7.51857 23.2611L23.0008 20.7988C23.9479 20.6481 24.7659 20.0538 25.2018 19.1997L32.3279 5.23608Z" fill="#EED583"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_45_143" x="1.98657" y="2.59976" width="68.0269" height="65.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="1" dy="3"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.944 0 0 0 0 0.7375 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_143"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_143" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                    <svg class="star star-5" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_45_143)">
                        <path d="M32.3279 5.23608C33.4413 3.05433 36.5587 3.05433 37.6721 5.23608L44.7982 19.1997C45.2341 20.0538 46.0521 20.6481 46.9992 20.7988L62.4814 23.2611C64.9005 23.6458 65.8638 26.6107 64.1329 28.3438L53.0548 39.4361C52.3772 40.1146 52.0647 41.0762 52.2141 42.0235L54.6566 57.5089C55.0382 59.9284 52.5162 61.7608 50.333 60.6502L36.3603 53.542C35.5055 53.1072 34.4945 53.1072 33.6397 53.542L19.667 60.6502C17.4838 61.7608 14.9618 59.9284 15.3434 57.5089L17.7859 42.0235C17.9353 41.0762 17.6228 40.1146 16.9452 39.4361L5.86709 28.3438C4.13619 26.6107 5.09953 23.6458 7.51857 23.2611L23.0008 20.7988C23.9479 20.6481 24.7659 20.0538 25.2018 19.1997L32.3279 5.23608Z" fill="#EED583"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_45_143" x="1.98657" y="2.59976" width="68.0269" height="65.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="1" dy="3"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.944 0 0 0 0 0.7375 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_143"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_143" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                `);
                image = 1
            } else {
                $(".phone2").append(`
                <svg class="star star-1" width="78" height="74" viewBox="0 0 78 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_45_145)">
                    <path d="M35.3279 5.23608C36.4413 3.05433 39.5587 3.05433 40.6721 5.23608L47.7982 19.1997C48.2341 20.0538 49.0521 20.6481 49.9992 20.7988L65.4814 23.2611C67.9005 23.6458 68.8638 26.6107 67.1329 28.3438L56.0548 39.4361C55.3772 40.1146 55.0647 41.0762 55.2141 42.0235L57.6566 57.5089C58.0382 59.9284 55.5162 61.7608 53.333 60.6502L39.3603 53.542C38.5055 53.1072 37.4945 53.1072 36.6397 53.542L22.667 60.6502C20.4838 61.7608 17.9618 59.9284 18.3434 57.5089L20.7859 42.0235C20.9353 41.0762 20.6228 40.1146 19.9452 39.4361L8.86709 28.3438C7.13619 26.6107 8.09953 23.6458 10.5186 23.2611L26.0008 20.7988C26.9479 20.6481 27.7659 20.0538 28.2018 19.1997L35.3279 5.23608Z" fill="#F3DE9A"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_45_145" x="0.986572" y="0.599762" width="76.0269" height="73.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="1" dy="5"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.972 0 0 0 0 0.825 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_145"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_145" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                <svg class="star star-2" width="78" height="74" viewBox="0 0 78 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_45_145)">
                    <path d="M35.3279 5.23608C36.4413 3.05433 39.5587 3.05433 40.6721 5.23608L47.7982 19.1997C48.2341 20.0538 49.0521 20.6481 49.9992 20.7988L65.4814 23.2611C67.9005 23.6458 68.8638 26.6107 67.1329 28.3438L56.0548 39.4361C55.3772 40.1146 55.0647 41.0762 55.2141 42.0235L57.6566 57.5089C58.0382 59.9284 55.5162 61.7608 53.333 60.6502L39.3603 53.542C38.5055 53.1072 37.4945 53.1072 36.6397 53.542L22.667 60.6502C20.4838 61.7608 17.9618 59.9284 18.3434 57.5089L20.7859 42.0235C20.9353 41.0762 20.6228 40.1146 19.9452 39.4361L8.86709 28.3438C7.13619 26.6107 8.09953 23.6458 10.5186 23.2611L26.0008 20.7988C26.9479 20.6481 27.7659 20.0538 28.2018 19.1997L35.3279 5.23608Z" fill="#F3DE9A"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_45_145" x="0.986572" y="0.599762" width="76.0269" height="73.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="1" dy="5"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.972 0 0 0 0 0.825 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_145"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_145" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                <svg class="star star-3" width="78" height="74" viewBox="0 0 78 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_45_145)">
                    <path d="M35.3279 5.23608C36.4413 3.05433 39.5587 3.05433 40.6721 5.23608L47.7982 19.1997C48.2341 20.0538 49.0521 20.6481 49.9992 20.7988L65.4814 23.2611C67.9005 23.6458 68.8638 26.6107 67.1329 28.3438L56.0548 39.4361C55.3772 40.1146 55.0647 41.0762 55.2141 42.0235L57.6566 57.5089C58.0382 59.9284 55.5162 61.7608 53.333 60.6502L39.3603 53.542C38.5055 53.1072 37.4945 53.1072 36.6397 53.542L22.667 60.6502C20.4838 61.7608 17.9618 59.9284 18.3434 57.5089L20.7859 42.0235C20.9353 41.0762 20.6228 40.1146 19.9452 39.4361L8.86709 28.3438C7.13619 26.6107 8.09953 23.6458 10.5186 23.2611L26.0008 20.7988C26.9479 20.6481 27.7659 20.0538 28.2018 19.1997L35.3279 5.23608Z" fill="#F3DE9A"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_45_145" x="0.986572" y="0.599762" width="76.0269" height="73.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="1" dy="5"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.972 0 0 0 0 0.825 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_145"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_145" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                <svg class="star star-4" width="78" height="74" viewBox="0 0 78 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_45_145)">
                    <path d="M35.3279 5.23608C36.4413 3.05433 39.5587 3.05433 40.6721 5.23608L47.7982 19.1997C48.2341 20.0538 49.0521 20.6481 49.9992 20.7988L65.4814 23.2611C67.9005 23.6458 68.8638 26.6107 67.1329 28.3438L56.0548 39.4361C55.3772 40.1146 55.0647 41.0762 55.2141 42.0235L57.6566 57.5089C58.0382 59.9284 55.5162 61.7608 53.333 60.6502L39.3603 53.542C38.5055 53.1072 37.4945 53.1072 36.6397 53.542L22.667 60.6502C20.4838 61.7608 17.9618 59.9284 18.3434 57.5089L20.7859 42.0235C20.9353 41.0762 20.6228 40.1146 19.9452 39.4361L8.86709 28.3438C7.13619 26.6107 8.09953 23.6458 10.5186 23.2611L26.0008 20.7988C26.9479 20.6481 27.7659 20.0538 28.2018 19.1997L35.3279 5.23608Z" fill="#F3DE9A"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_45_145" x="0.986572" y="0.599762" width="76.0269" height="73.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="1" dy="5"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.972 0 0 0 0 0.825 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_145"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_145" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                <svg class="star star-5" width="78" height="74" viewBox="0 0 78 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_45_145)">
                    <path d="M35.3279 5.23608C36.4413 3.05433 39.5587 3.05433 40.6721 5.23608L47.7982 19.1997C48.2341 20.0538 49.0521 20.6481 49.9992 20.7988L65.4814 23.2611C67.9005 23.6458 68.8638 26.6107 67.1329 28.3438L56.0548 39.4361C55.3772 40.1146 55.0647 41.0762 55.2141 42.0235L57.6566 57.5089C58.0382 59.9284 55.5162 61.7608 53.333 60.6502L39.3603 53.542C38.5055 53.1072 37.4945 53.1072 36.6397 53.542L22.667 60.6502C20.4838 61.7608 17.9618 59.9284 18.3434 57.5089L20.7859 42.0235C20.9353 41.0762 20.6228 40.1146 19.9452 39.4361L8.86709 28.3438C7.13619 26.6107 8.09953 23.6458 10.5186 23.2611L26.0008 20.7988C26.9479 20.6481 27.7659 20.0538 28.2018 19.1997L35.3279 5.23608Z" fill="#F3DE9A"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_45_145" x="0.986572" y="0.599762" width="76.0269" height="73.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="1" dy="5"/>
                    <feGaussianBlur stdDeviation="4"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.972 0 0 0 0 0.825 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_145"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_145" result="shape"/>
                    </filter>
                    </defs>
                </svg>                
                `);
                image = 0
            }
        }, 500);
    }

    function changeStreakCircleHeight() {
        var i = 0;
        if (i == 0) {
            i = 1;
            var top = 119;
            var id = setInterval(frame, top);

            function frame() {
                if (top >= 159) {
                    clearInterval(id);
                    i = 0;
                    $(".phone2").append('<h1 class="streak-message">You reached a 5 day streak!</h1>');
                    $(".phone2").append(`
                        <svg class="star star-1" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_45_143)">
                            <path d="M32.3279 5.23608C33.4413 3.05433 36.5587 3.05433 37.6721 5.23608L44.7982 19.1997C45.2341 20.0538 46.0521 20.6481 46.9992 20.7988L62.4814 23.2611C64.9005 23.6458 65.8638 26.6107 64.1329 28.3438L53.0548 39.4361C52.3772 40.1146 52.0647 41.0762 52.2141 42.0235L54.6566 57.5089C55.0382 59.9284 52.5162 61.7608 50.333 60.6502L36.3603 53.542C35.5055 53.1072 34.4945 53.1072 33.6397 53.542L19.667 60.6502C17.4838 61.7608 14.9618 59.9284 15.3434 57.5089L17.7859 42.0235C17.9353 41.0762 17.6228 40.1146 16.9452 39.4361L5.86709 28.3438C4.13619 26.6107 5.09953 23.6458 7.51857 23.2611L23.0008 20.7988C23.9479 20.6481 24.7659 20.0538 25.2018 19.1997L32.3279 5.23608Z" fill="#EED583"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_45_143" x="1.98657" y="2.59976" width="68.0269" height="65.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="1" dy="3"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.944 0 0 0 0 0.7375 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_143"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_143" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                        <svg class="star star-2" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_45_143)">
                            <path d="M32.3279 5.23608C33.4413 3.05433 36.5587 3.05433 37.6721 5.23608L44.7982 19.1997C45.2341 20.0538 46.0521 20.6481 46.9992 20.7988L62.4814 23.2611C64.9005 23.6458 65.8638 26.6107 64.1329 28.3438L53.0548 39.4361C52.3772 40.1146 52.0647 41.0762 52.2141 42.0235L54.6566 57.5089C55.0382 59.9284 52.5162 61.7608 50.333 60.6502L36.3603 53.542C35.5055 53.1072 34.4945 53.1072 33.6397 53.542L19.667 60.6502C17.4838 61.7608 14.9618 59.9284 15.3434 57.5089L17.7859 42.0235C17.9353 41.0762 17.6228 40.1146 16.9452 39.4361L5.86709 28.3438C4.13619 26.6107 5.09953 23.6458 7.51857 23.2611L23.0008 20.7988C23.9479 20.6481 24.7659 20.0538 25.2018 19.1997L32.3279 5.23608Z" fill="#EED583"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_45_143" x="1.98657" y="2.59976" width="68.0269" height="65.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="1" dy="3"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.944 0 0 0 0 0.7375 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_143"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_143" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                        <svg class="star star-3" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_45_143)">
                            <path d="M32.3279 5.23608C33.4413 3.05433 36.5587 3.05433 37.6721 5.23608L44.7982 19.1997C45.2341 20.0538 46.0521 20.6481 46.9992 20.7988L62.4814 23.2611C64.9005 23.6458 65.8638 26.6107 64.1329 28.3438L53.0548 39.4361C52.3772 40.1146 52.0647 41.0762 52.2141 42.0235L54.6566 57.5089C55.0382 59.9284 52.5162 61.7608 50.333 60.6502L36.3603 53.542C35.5055 53.1072 34.4945 53.1072 33.6397 53.542L19.667 60.6502C17.4838 61.7608 14.9618 59.9284 15.3434 57.5089L17.7859 42.0235C17.9353 41.0762 17.6228 40.1146 16.9452 39.4361L5.86709 28.3438C4.13619 26.6107 5.09953 23.6458 7.51857 23.2611L23.0008 20.7988C23.9479 20.6481 24.7659 20.0538 25.2018 19.1997L32.3279 5.23608Z" fill="#EED583"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_45_143" x="1.98657" y="2.59976" width="68.0269" height="65.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="1" dy="3"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.944 0 0 0 0 0.7375 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_143"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_143" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                        <svg class="star star-4" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_45_143)">
                            <path d="M32.3279 5.23608C33.4413 3.05433 36.5587 3.05433 37.6721 5.23608L44.7982 19.1997C45.2341 20.0538 46.0521 20.6481 46.9992 20.7988L62.4814 23.2611C64.9005 23.6458 65.8638 26.6107 64.1329 28.3438L53.0548 39.4361C52.3772 40.1146 52.0647 41.0762 52.2141 42.0235L54.6566 57.5089C55.0382 59.9284 52.5162 61.7608 50.333 60.6502L36.3603 53.542C35.5055 53.1072 34.4945 53.1072 33.6397 53.542L19.667 60.6502C17.4838 61.7608 14.9618 59.9284 15.3434 57.5089L17.7859 42.0235C17.9353 41.0762 17.6228 40.1146 16.9452 39.4361L5.86709 28.3438C4.13619 26.6107 5.09953 23.6458 7.51857 23.2611L23.0008 20.7988C23.9479 20.6481 24.7659 20.0538 25.2018 19.1997L32.3279 5.23608Z" fill="#EED583"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_45_143" x="1.98657" y="2.59976" width="68.0269" height="65.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="1" dy="3"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.944 0 0 0 0 0.7375 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_143"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_143" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                        <svg class="star star-5" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_45_143)">
                            <path d="M32.3279 5.23608C33.4413 3.05433 36.5587 3.05433 37.6721 5.23608L44.7982 19.1997C45.2341 20.0538 46.0521 20.6481 46.9992 20.7988L62.4814 23.2611C64.9005 23.6458 65.8638 26.6107 64.1329 28.3438L53.0548 39.4361C52.3772 40.1146 52.0647 41.0762 52.2141 42.0235L54.6566 57.5089C55.0382 59.9284 52.5162 61.7608 50.333 60.6502L36.3603 53.542C35.5055 53.1072 34.4945 53.1072 33.6397 53.542L19.667 60.6502C17.4838 61.7608 14.9618 59.9284 15.3434 57.5089L17.7859 42.0235C17.9353 41.0762 17.6228 40.1146 16.9452 39.4361L5.86709 28.3438C4.13619 26.6107 5.09953 23.6458 7.51857 23.2611L23.0008 20.7988C23.9479 20.6481 24.7659 20.0538 25.2018 19.1997L32.3279 5.23608Z" fill="#EED583"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_45_143" x="1.98657" y="2.59976" width="68.0269" height="65.3827" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="1" dy="3"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.944 0 0 0 0 0.7375 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_143"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_143" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    `);
                    twinkle();
                } else {
                    top += 2;
                    $(".streak-circle-1").css("top", top + "px");
                }
            }
        }
    }

    function showNext() {
        $(".phone2").append(`
            <div class="next-button">
                <h1 class="next-text">Next</h1>
            </div>
        `);
        $(".next-button").click(function() {
            location.href = 'after-lesson-3.html';
        });
    }

    setTimeout(changeStreakCircleHeight, 200);
    setTimeout(changeProgressBar, 1000);
    setTimeout(showNext, 3500);
});
