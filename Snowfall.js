/**
 * Creates a snowfall effect
 *
 * @param color string (optional) #000000
 * @constructor
 */
function Snowfall(color) {
    color = color || '#000000';

    setInterval(createFlake, 3000);
    //createFlake();

    function createFlake() {
        var random  = Math.floor(Math.random() * 50) + 1;
        var size = random - (random % 2);
        var minX = -size;
        var maxX = document.body.clientWidth + size;

        var flake = document.createElement('canvas');
        flake.width  = size;
        flake.height = size;
        flake.style.position = 'absolute';
        flake.style.left = Math.floor((Math.random() * maxX) + minX) +'px';
        flake.style.top  = -size +'px';

        var ctx = flake.getContext('2d');
        ctx.beginPath();
        ctx.arc(size/2, size/2, size/2, 0, (2 * Math.PI));
        ctx.fillStyle = color;
        ctx.fill();

        document.body.appendChild(flake);

        moveFlake(flake);

        function moveFlake(flake) {
            var move = setInterval(function(){
                var left = flake.style.left;
                var top = flake.style.top;

                left = left.substring(0, left.indexOf('px'));
                top = top.substring(0, top.indexOf('px'));

                flake.style.left = (Number(left) + 10) +'px';
                flake.style.top  = (Number(top) + 10) +'px';

                if(left > maxX) {
                    console.log('remove');
                    flake.remove();
                    clearInterval(move);
                }
            }, 1000);
        }
    }
}
