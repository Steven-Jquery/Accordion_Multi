//cach 1

/*var $ = jQuery.noConflict();
$(document).ready(function(){
	$('.list-accordion .item .title').click(function(){
		var $this = $(this);
		$this.parent().siblings('li').find('.sub-list').slideUp(350);//close when click siblings item
		$this.toggleClass('active');
		$this.parent().siblings('li').find('.active').removeClass('active');
		$this.next().slideToggle(350);
	});
});*/

//cách 2
$(document).ready(function(e){
	$('[data-dropdown]').click(function(){
		var self = this;
		var target = $(self).data('dropdown');
		var $other = $('[data-dropdown= "'+target+'"]');
		if(target){
			$other.each(function(index, el) {
				if(el !== self){
					$(el).removeClass('active');
					// $(el).parent()..slideUp();
				}else{
					$(self).toggleClass('active');
					$(self).next().slideToggle('fast');
				}
			});
		}
	});
});
