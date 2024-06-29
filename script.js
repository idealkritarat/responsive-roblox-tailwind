const min = (a,b) => {
    return ( a < b ? a : b );
}
const max = (a,b) => {
    return ( a > b ? a : b );
}

$(".scroll-right").click( function(dir){
    const games = $(this).siblings(".scroll-game");
    const currX = parseInt($(games).css('translate'));
    const games_width = parseInt($(games).css('width'));
    const To = (currX - 1200 > -games_width+200 ? currX - 1200 : currX);
    $(games).css('translate', To + 'px');
    console.log(To);
});

$(".scroll-left").click( function(dir){
    const games = $(this).siblings(".scroll-game");
    const currX = parseInt($(games).css('translate'));
    const To = min(currX + 1200, 27);
    $(games).css('translate', To + 'px');
    console.log(To);
});

for(let i=0;i<30;i++) {
    const clone = $("#roblox-game").clone();
    $(".scroll-game").append(clone);
}