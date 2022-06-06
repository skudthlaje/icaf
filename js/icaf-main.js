$(document).ready(function() {
    /*
    let videoElm = $('video')[0];
    videoElm.volume = 0.2;
    let $volumeDiv = $('#volumeControl');
    let $inputs = $('#volumeControl').find('input').first().hide().prevObject;
    $volumeDiv.click(_ => {
        $inputs.toggle();
        videoElm.muted = !videoElm.muted
    });



    let $carousel = $('#youngArtists').carousel({
        interval: 3000
    });
    $('#slidePrev > circle').click(_ => $carousel.carousel('prev'));
    $('#slideNext > circle').click(_ => $carousel.carousel('next'));

    // For debugging
    window.c = $carousel;

    setTimeout(_ => {
        $('body').append(`<div style="height:300px;text-align:center"><br><br> I am an unfinished &lt;div&gt;.</div>`);
        $(document).scrollTop($(document).height());
        setTimeout(_ => $carousel.carousel('pause'), 10);
    }, 50);
    */
});

/*  6/1/22 - Lets change the world */

	var timer = setInterval( 'toggleImage();',3000);
	function stop()
	{
		clearInterval(timer);
	}

	var imageDisplayed = 'us-mural';
	function toggleImage()
	{
	
	    
	    var image = document.getElementById("USmural");	   
	
	    if (imageDisplayed == 'us-mural')
		{
			image.src='resource/image/world-mural.png';
			imageDisplayed='world-mural';
		}
	    else
		{
			image.src='resource/image/us-mural.png';
			imageDisplayed='us-mural';
			
		}	   

	} //end function toggleImage

// end - Lets change the world