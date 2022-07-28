let gameArea;
let ga_width, ga_height;

let tyrion;

let tywin;
let tywin_width, tywin_height;

let attack_birth, coll_check;
let attack_src;


$(document).ready(function () {
    gameArea = $("#gameArea");
    ga_width = parseInt(gameArea.css('width'));
    ga_height = parseInt(gameArea.css('height'));

    init()

    attack_src = $('<img src="../static/img/beer.png" class="attack">')

    $(window).on('keydown', move_tywin);
});


function init() {
    add_tyrion();
    add_tywin();

    attack_birth = setInterval(add_attack, 700)
    coll_check = setInterval(check, 1)
}


function add_tyrion() {
    tyrion = $('<img src="../static/img/tyrion.png" id="tyrion" />');
    gameArea.append(tyrion);
}


function add_tywin() {
    tywin = $('<img src="../static/img/tywin.png" id="tywin">');
    gameArea.append(tywin);
    tywin.on('load', function () {
        tywin_width = parseInt(tywin.css('width'));
        tywin_height = parseInt(tywin.css('height'));
        tywin.css({
            left: 100,
            top: ga_height - tywin_height
        });

    });
}


function move_tywin(ev) {
    var key = ev.key;
    if (key === "ArrowRight" && parseInt(tywin.css('left')) + tywin_width < ga_width) {
        tywin.css({
            left: "+=20",
        });
    } else if (key === "ArrowLeft" && parseInt(tywin.css('left')) > 0) {
        tywin.css({
            left: "-=20",
        });
    }
}


function add_attack() {
    let attack = attack_src.clone();
    let coord = Math.random() * 1600 - 80;

    attack.css({
        position: 'absolute',
        top:430,
        left:1250,
        height:80,
    });

    gameArea.append(attack);
    attack.addClass("attack");

    attack.animate({
        top: ga_height-80,
        left: coord
    }, 1800, function () {
        attack.remove()
    });
}

/**
 * It goes through all the elements that are in the 'attack' class and saves their left/right values in variables. These values are also recorded in the case of the tywin variable.
 * It calls the check function.
 * The values returned by the check function fall below the threshold, then the intervals are stopped and the following text is written in the gameArea area 'Unfortunately, Tywin is dead.'.
 **/
function check() {
    $('.attack').each(function () {
        let attack_x = $(this).position().left;
        let attack_y = $(this).position().top;

        let tywin_x = tywin.position().left;
        let tywin_y = tywin.position().top;


        let dis = distance({x: attack_x, y: attack_y}, {x: tywin_x, y: tywin_y})
        console.log(dis)
        if (dis <= 120) {
            clearInterval(attack_birth);
            clearInterval(coll_check);
            gameArea.append('<div id="lose">Unfortunately, Tywin is dead.</div>');
        }
    });
}


/**
 *    Defines the distance between two objects.
 *    @param  a   this is one element of the comparison
 *    @param  b   this is another element of the comparison
 *    @return Returns the distance between the objects in the parameter.
 **/
function distance(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy)
}