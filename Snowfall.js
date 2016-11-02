/**
 * Creates a snowfall effect
 *
 * @param color string (optional) #000000
 * @constructor
 */
function Snowfall(color) {
    color = color || '#000000';

    setInterval(createFlake, 100);

    function createFlake() {
        var random  = Math.floor(Math.random() * 10) + 1;
        var size = random - (random % 2);
        var minXpos = -size;
        var maxXpos = document.body.clientWidth + size;

        var flake = document.createElement('canvas');
        flake.width  = size;
        flake.height = size;
        flake.style.position = 'absolute';
        flake.style.left = Math.floor((Math.random() * maxXpos) + minXpos) +'px';
        flake.style.top  = -size +'px';

        var ctx = flake.getContext('2d');
        ctx.beginPath();
        ctx.arc(size/2, size/2, size/2, 0, (2 * Math.PI));
        ctx.fillStyle = color;
        ctx.fill();

        document.body.appendChild(flake);

        moveFlake(flake);

        function moveFlake(flake) {
            var drift = (Math.floor((Math.random() * -2)) + Math.ceil((Math.random() * 2))) + 1;
            var fall  = Math.floor((Math.random() * 2) + 1);

            var move = setInterval(function(){
                var left = flake.style.left;
                var top = flake.style.top;

                left = left.substring(0, left.indexOf('px'));
                top = top.substring(0, top.indexOf('px'));

                flake.style.left = (Number(left) + drift) +'px';
                flake.style.top  = (Number(top) + fall) +'px';

                if(left > maxXpos || top > window.innerHeight + size) {
                    console.log('remove');
                    flake.remove();
                    clearInterval(move);
                }
            }, 10);
        }
    }
}
