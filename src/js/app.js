@vendor_include('jquery/dist/jquery.min.js')
@vendor_include('node-vibrant/dist/vibrant.min.js')
@include('luma.js')

var body = $("body");
var url = 'http://i.imgur.com/xIPgZNM.jpg';
var player_image_container = $('.JS-player-image');
var player_image = player_image_container.css("background-image").split("\"")[1];
var name_contain = $('.JS-name-contain')
var text_color = $('.JS-text-bound').css("color").split("(")[1].split(")")[0].split(",");
var text_luma = luma(text_color[0], text_color[1], text_color[2], 1)


Vibrant.from(player_image).getPalette(function(err, palette) {
	var image_luma = 0.2126 * palette.DarkMuted._rgb[0] + 0.7152 * palette.DarkMuted._rgb[1] + 0.0722 * palette.DarkMuted._rgb[2]; // per ITU-R BT.709
	console.log(image_luma, (text_luma - 20))
	if ((image_luma + 20) > text_luma) {
	    body.addClass("lighten");
	}
});



var contain_width = 540;

$(".JS-text-bound").each(function(){
	var element = $(this);
	var broken = true;
	var i = 0;
	while(broken){
		broken = check_width(element);
	}

});

function check_width(element){
	if( element.width() > contain_width ){
		adjust_size(element);
		return true;
	}
	return false;
}
function adjust_size(element){
	var text_size = parseInt(element.css("font-size").split("p")[0]);
	var line_height = parseInt(element.css("line-height").split("p")[0]);
	element.css({
		"font-size": text_size - 2 + "px",
		"line-height": line_height - 2 + "px"
	});
}
