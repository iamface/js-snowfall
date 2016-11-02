function Snowfall(c) {
    var color = c;

    //setInterval(createFlake, 3000);
    createFlake();

    function createFlake() {
        var random  = Math.floor(Math.random() * 50) + 1;
        var size = random - (random % 2);
        //console.log(size);

        var flake = document.createElement('canvas');
        flake.width  = size;
        flake.height = size;
        flake.style.position = 'absolute';
        flake.style.left = 0;
        flake.style.top  = 0;

        var ctx = flake.getContext('2d');
        ctx.beginPath();
        ctx.arc(size/2, size/2, size/2, 0, (2 * Math.PI));
        ctx.fillStyle = color;
        ctx.fill();

        document.body.appendChild(flake);

        moveFlake(flake);

        function moveFlake(flake) {
            var move = setInterval(function(){
                //console.log('moving..');
                var left = flake.style.left;
                var top = flake.style.top;

                left = left.substring(0, left.indexOf('px'));
                top = top.substring(0, top.indexOf('px'));

                flake.style.left = (Number(left) + 10) +'px';
                flake.style.top  = (Number(top) + 10) +'px';

                if(left > 30) {
                    console.log('remove');
                    flake.remove();
                    clearInterval(move);
                }
            }, 1000);
        }
    }
}
