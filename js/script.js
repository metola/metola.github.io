$(document).ready(function () {
    var isMobile = false; //initiate as false
// device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    } else {
            generateStars();
    }
    $("#send_button").click(function () {
        validaVacio($("#exampleInputEmail1"));
    });
});

    function generateStars() {

    var random = Math.floor((Math.random() * 50) + 10);
    var random2= Math.floor((Math.random() * 3) + 1);
    var top, left, depth, size;
    var all_layout = document.getElementById('all_layout');
    for (var i = 0; i < random; i++) {
        depth = (Math.random() * 1);
        $('#scene').append($('<div  class="scene_' + i + '" data-depth="' + depth + '"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"  height="30" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m477.58 11a305.394 305.394 0 0 1 -7.91 69.22l-.34-.08a130.141 130.141 0 0 1 -61.07-60.8l-.15-.31a303.245 303.245 0 0 1 69.47-8.03z" fill="#ed6337" data-original="#ed6337" class=""></path><path xmlns="http://www.w3.org/2000/svg" d="m208.03 261.78-25.13-25.13q2.22-8.235 4.91-16.29a304.131 304.131 0 0 1 46.93-88.67h.01a306.813 306.813 0 0 1 173.36-112.66l.15.31a130.141 130.141 0 0 0 61.07 60.8l.34.08a303.176 303.176 0 0 1 -56.36 117.82 305.378 305.378 0 0 1 -56.52 55.69 303.2 303.2 0 0 1 -87.88 46.2q-8.64 2.865-17.52 5.21l-23.08-23.08z" fill="#e5f5fd" data-original="#e5f5fd" class=""></path><path xmlns="http://www.w3.org/2000/svg" d="m430.52 348.45a39.189 39.189 0 0 0 15.41 9.55 39.464 39.464 0 0 0 -24.93 25 39.464 39.464 0 0 0 -24.93-25 39.464 39.464 0 0 0 24.93-25 39.5 39.5 0 0 0 9.52 15.45z" fill="#3090fc" data-original="#3090fc"></path><path xmlns="http://www.w3.org/2000/svg" d="m361.52 298.56a35.767 35.767 0 0 1 0 50.59l-58.56 59.42-33.96-34.38a52.907 52.907 0 0 1 -.09-74.26 303.2 303.2 0 0 0 87.88-46.2l.03.04a35.78 35.78 0 0 0 4.7 44.79z" fill="#475673" data-original="#475673" class=""></path><path xmlns="http://www.w3.org/2000/svg" d="m228.31 282.06-12.77 51.65-60.66-60.67 53.15-11.26z" fill="#ed6337" data-original="#ed6337" class=""></path><path xmlns="http://www.w3.org/2000/svg" d="m189.96 127a35.751 35.751 0 0 0 44.78 4.69 304.131 304.131 0 0 0 -46.93 88.67 52.9 52.9 0 0 1 -73.48-.84l-34.39-33.96 59.43-58.56a35.767 35.767 0 0 1 50.59 0z" fill="#475673" data-original="#475673" class=""></path><path xmlns="http://www.w3.org/2000/svg" d="m183.74 327.11a21.793 21.793 0 0 1 -19.15 21.66l-27.79 3.45 3.44-27.8a21.833 21.833 0 0 1 43.5 2.69z" fill="#fadf4a" data-original="#fadf4a"></path><path xmlns="http://www.w3.org/2000/svg" d="m58.52 107.45a39.189 39.189 0 0 0 15.41 9.55 39.464 39.464 0 0 0 -24.93 25 39.464 39.464 0 0 0 -24.93-25 39.189 39.189 0 0 0 15.41-9.55 39.5 39.5 0 0 0 9.52-15.45 39.5 39.5 0 0 0 9.52 15.45z" fill="#3090fc" data-original="#3090fc"></path><circle xmlns="http://www.w3.org/2000/svg" cx="336.745" cy="151.84" fill="#50a6ea" r="37.867" data-original="#50a6ea"></circle><path xmlns="http://www.w3.org/2000/svg" d="m408.26 19.34-.15-.31a306.813 306.813 0 0 0 -173.36 112.66h-.01a304.131 304.131 0 0 0 -46.93 88.67q-2.685 8.055-4.91 16.29l20 20q2.22-8.235 4.91-16.29a304.131 304.131 0 0 1 46.93-88.67h.01a306.985 306.985 0 0 1 166.55-110.974 130.115 130.115 0 0 1 -13.04-21.376z" fill="#a6b7d0" data-original="#a6b7d0" class=""></path><g xmlns="http://www.w3.org/2000/svg" fill="#284268"><path d="m361.377 257.848a310.625 310.625 0 0 0 122.205-246.848 6 6 0 0 0 -6-6 309.721 309.721 0 0 0 -190.6 65.542 314.15 314.15 0 0 0 -56.1 56.478 29.879 29.879 0 0 1 -36.679-4.266 41.771 41.771 0 0 0 -59.042-.03l-59.429 58.559a6 6 0 0 0 0 8.542l34.384 33.96a59.1 59.1 0 0 0 67.062 11.081c-.02.074-.042.146-.062.219a6 6 0 0 0 1.55 5.807l17.305 17.308-42.338 8.973a6 6 0 0 0 -3 10.112l21.3 21.3a53.242 53.242 0 0 0 -15.5-6.221c-1.738-.393-3.48-.7-5.163-.91a53.414 53.414 0 0 0 -6.349-.425 52.678 52.678 0 0 0 -37.821 15.55 53.923 53.923 0 0 0 -16.112 38.515 6 6 0 0 0 5.848 6l4.525.115a57.377 57.377 0 0 0 -10.251 41.979 5.984 5.984 0 0 0 5.89 4.812h16.392a6 6 0 0 0 0-12h-10.93c-.17-8 1.586-23.158 16.115-35.979a5.991 5.991 0 0 0 -3.817-10.483l-11.36-.286a42.066 42.066 0 0 1 12.157-24.152 40.9 40.9 0 0 1 28.964-12.071h.313c.955.006 1.913.057 2.87.13a27.672 27.672 0 0 0 -13.422 20.526l-3.441 27.8a6 6 0 0 0 5.954 6.737 6.1 6.1 0 0 0 .737-.045l27.8-3.442a27.771 27.771 0 0 0 20.532-13.466c.086 1.081.145 2.171.147 3.269a41.251 41.251 0 0 1 -12.157 29.351 6 6 0 1 0 8.484 8.485 53.447 53.447 0 0 0 15.254-44.474c-.2-1.673-.492-3.374-.866-5.058a53.284 53.284 0 0 0 -6.273-15.739l20.847 20.845a6 6 0 0 0 10.066-2.8l10.222-41.331 15.562 15.563a6.006 6.006 0 0 0 5.778 1.558c.359-.1.714-.2 1.073-.3a59.088 59.088 0 0 0 10.735 67.766l33.957 34.596a6.222 6.222 0 0 0 4.269 2 6.217 6.217 0 0 0 4.27-2l58.53-59.5a41.884 41.884 0 0 0 0-59.126 29.953 29.953 0 0 1 -4.385-36.526zm110.144-240.787a298.168 298.168 0 0 1 -6.094 54.3 124.694 124.694 0 0 1 -48.365-48.161 297.374 297.374 0 0 1 54.459-6.139zm-352.976 198.186-30.058-29.686 55.123-54.321a29.771 29.771 0 0 1 42.1 0 41.911 41.911 0 0 0 33.476 12.006 311.053 311.053 0 0 0 -36.56 73.713 47.03 47.03 0 0 1 -64.081-1.712zm58.6 116.177a15.809 15.809 0 0 1 -13.292 11.4l-20.158 2.5 2.5-20.153a15.951 15.951 0 0 1 11.78-13.4 15.85 15.85 0 0 1 19.175 19.659zm35.123-9.477-45.329-45.328 39.153-8.3 15.584 15.581zm40.909-23.511-63.557-63.557q1.6-5.66 3.433-11.248c.036-.036.073-.068.109-.1l-.057-.057a301.408 301.408 0 0 1 186.058-189.759q12.725-4.463 25.755-7.728a136.694 136.694 0 0 0 57.732 57.506c-25.666 102.418-104.582 185.892-209.473 214.943zm104.071 46.5-54.291 55.094-29.686-30.057a47.024 47.024 0 0 1 -1.032-64.83 308.378 308.378 0 0 0 73.032-35.806 41.922 41.922 0 0 0 12.007 33.469 29.813 29.813 0 0 1 -.03 42.132z" fill="#284268" data-original="#284268" class=""></path><path d="m154.21 384.878a41.7 41.7 0 0 1 -9.71 1.122h-9.452a6 6 0 0 0 0 12h9.452a53.678 53.678 0 0 0 12.5-1.452 6 6 0 0 0 -2.795-11.67z" fill="#284268" data-original="#284268" class=""></path><path d="m395.659 260.914a5.974 5.974 0 0 0 3.824-1.379c4.276-3.54 8.516-7.248 12.6-11.02a6 6 0 1 0 -8.137-8.819c-3.931 3.627-8.01 7.192-12.121 10.6a6 6 0 0 0 3.83 10.621z" fill="#284268" data-original="#284268" class=""></path><path d="m494.754 102.88a6 6 0 0 0 -7.48 4.007 297.025 297.025 0 0 1 -19.462 48.466c-2.876 5.663-5.979 11.313-9.221 16.792-3.985 6.731-8.29 13.392-12.8 19.8a300.531 300.531 0 0 1 -23.286 29.055 6 6 0 0 0 8.881 8.071 312.778 312.778 0 0 0 24.214-30.222c4.69-6.662 9.169-13.59 13.314-20.593 3.373-5.7 6.6-11.577 9.594-17.469a309.129 309.129 0 0 0 20.249-50.428 6 6 0 0 0 -4.003-7.479z" fill="#284268" data-original="#284268" class=""></path><path d="m20.991 250.51a5.982 5.982 0 0 0 4.242-1.757l4.595-4.595a6 6 0 0 0 -8.484-8.485l-4.6 4.595a6 6 0 0 0 4.242 10.242z" fill="#284268" data-original="#284268" class=""></path><path d="m42.862 231.124 20.531-20.53a6 6 0 1 0 -8.485-8.486l-20.53 20.53a6 6 0 1 0 8.484 8.486z" fill="#284268" data-original="#284268" class=""></path><path d="m25.787 271.18a6 6 0 0 0 8.485 0l24.133-24.134a6 6 0 0 0 -8.486-8.485l-24.133 24.133a6 6 0 0 0 .001 8.486z" fill="#284268" data-original="#284268" class=""></path><path d="m65.961 237a5.982 5.982 0 0 0 4.242-1.757l8.922-8.921a6 6 0 1 0 -8.484-8.486l-8.922 8.922a6 6 0 0 0 4.242 10.242z" fill="#284268" data-original="#284268" class=""></path><path d="m41.4 278.547-26.66 26.658a6 6 0 0 0 8.485 8.485l26.658-26.658a6 6 0 1 0 -8.485-8.485z" fill="#284268" data-original="#284268" class=""></path><path d="m94.856 233.573a6 6 0 0 0 -8.484 0l-31.231 31.227a6 6 0 1 0 8.484 8.486l31.231-31.232a6 6 0 0 0 0-8.481z" fill="#284268" data-original="#284268" class=""></path><path d="m212.9 427.226-4.6 4.594a6 6 0 0 0 8.486 8.485l4.594-4.6a6 6 0 0 0 -8.486-8.484z" fill="#284268" data-original="#284268" class=""></path><path d="m246.461 393.661-20.53 20.53a6 6 0 1 0 8.484 8.485l20.53-20.53a6 6 0 0 0 -8.484-8.485z" fill="#284268" data-original="#284268" class=""></path><path d="m217.338 462.732a6 6 0 0 0 8.485 0l24.134-24.132a6 6 0 1 0 -8.484-8.485l-24.134 24.133a6 6 0 0 0 -.001 8.484z" fill="#284268" data-original="#284268" class=""></path><path d="m253.271 426.8a6 6 0 0 0 8.486 0l8.921-8.922a6 6 0 0 0 -8.487-8.485l-8.92 8.921a6 6 0 0 0 0 8.486z" fill="#284268" data-original="#284268" class=""></path><path d="m232.951 470.1-26.658 26.657a6 6 0 1 0 8.484 8.486l26.659-26.658a6 6 0 1 0 -8.485-8.485z" fill="#284268" data-original="#284268" class=""></path><path d="m277.925 425.125-31.232 31.232a6 6 0 1 0 8.485 8.485l31.231-31.231a6 6 0 1 0 -8.484-8.486z" fill="#284268" data-original="#284268" class=""></path><path d="m447.828 352.31a33.632 33.632 0 0 1 -21.135-21.2 6 6 0 0 0 -11.386 0 33.632 33.632 0 0 1 -21.135 21.2 6 6 0 0 0 0 11.38 33.632 33.632 0 0 1 21.135 21.2 6 6 0 0 0 11.386 0 33.632 33.632 0 0 1 21.135-21.2 6 6 0 0 0 0-11.38zm-26.828 17.381a45.932 45.932 0 0 0 -11.668-11.691 45.932 45.932 0 0 0 11.668-11.691 45.932 45.932 0 0 0 11.668 11.691 45.932 45.932 0 0 0 -11.668 11.691z" fill="#284268" data-original="#284268" class=""></path><path d="m22.172 122.69a33.632 33.632 0 0 1 21.135 21.2 6 6 0 0 0 11.386 0 33.632 33.632 0 0 1 21.135-21.2 6 6 0 0 0 0-11.38 33.632 33.632 0 0 1 -21.135-21.2 6 6 0 0 0 -11.386 0 33.632 33.632 0 0 1 -21.135 21.2 6 6 0 0 0 0 11.38zm26.828-17.381a45.932 45.932 0 0 0 11.668 11.691 45.932 45.932 0 0 0 -11.668 11.691 45.932 45.932 0 0 0 -11.668-11.691 45.932 45.932 0 0 0 11.668-11.691z" fill="#284268" data-original="#284268" class=""></path><ellipse cx="127.038" cy="54" rx="10.985" ry="11" fill="#284268" data-original="#284268" class=""></ellipse><ellipse cx="402.038" cy="445" rx="10.985" ry="11" fill="#284268" data-original="#284268" class=""></ellipse><path d="m336.744 107.968a43.86 43.86 0 1 0 31.021 74.891 43.87 43.87 0 0 0 -31.022-74.891zm22.536 66.406a31.871 31.871 0 1 1 0-45.071 31.906 31.906 0 0 1 0 45.071z" fill="#284268" data-original="#284268" class=""></path></g></g></svg></div>'));

    }
    var scene = document.getElementById('scene');
    //var parallax = new Parallax(scene);
  
    for (var i = 0; i < random; i++) {
        depth = (Math.random() * 1);
        size = Math.floor((Math.random() * 20) + 3);
        top = Math.floor((Math.random() * all_layout.offsetHeight) + 20);
        left = Math.floor((Math.random() * scene.offsetWidth) + 20);
        $('<style type="text/css"> .scene_' + i + '{ top:' + top + 'px !important; left:' + left + 'px !important; font-size:' + size + 'px !important;} </style>').appendTo("head");

    }
    for (var i = 0; i < random2; i++) {
        size = Math.floor((Math.random() * 20) + 3);
        top = Math.floor((Math.random() * all_layout.offsetHeight) + 20);
        left = Math.floor((Math.random() * scene.offsetWidth) + 20);
        $('<style type="text/css"> .star_' + i + '{ top:' + top + 'px !important; left:' + left + 'px !important; font-size:' + size + 'px !important;} </style>').appendTo("head");

    }


        var top_img=($('#all_layout').height() - 574) / 2;
        var left_img=($('#all_layout').width() - 800) / 2;
     

        var parallax = new Parallax(scene);

    }

function ShowHide() {
    var hide = $('#showhide').data('hide');
    if (hide === 'no') {
        $('#showhide').html('<i class="far fa-eye-slash"></i> Ocultar');
        $('#showhide').data('hide', 'yes');
        $('#exampleInputPassword1').attr('type', 'text');
    } else {
        $('#showhide').html('<i class="far fa-eye"></i> Mostrar');
        $('#showhide').data('hide', 'no');
        $('#exampleInputPassword1').attr('type', 'password');
    }
}

function setError(input, txtErrror) {
    $('#mensajesError').removeClass('hide');
    $('#mensajesErrorText').html(txtErrror);
}

function validaVacio(input) {
    var ok = true;
    if (input.val() == '') {
        setError(input, 'Por favor, rellena todos los campos.');
        ok = false;
    }
    return ok;
}
