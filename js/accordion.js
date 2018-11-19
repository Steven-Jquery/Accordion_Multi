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
		var dataParent = $(self).data('parent');
		var parent = $(self).closest(dataParent);
		var content = $(self).next();
		var $list = $('[data-dropdown= "'+ target +'"]');

		$list.each(function(index, el) {
			var siblings = $(self).parent().siblings().find(target);			
			var child = $(self).parent().find(target);

			if(el !== self){
				parent.find($(el)).removeClass('active');
				siblings.slideUp();
				if(!$(self).hasClass('active')){
					child.slideUp();
				}
			}else{
				$(self).toggleClass('active');
				content.slideToggle('fast');
			}
		});

	});
});
