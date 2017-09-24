 $(document).ready(function(){

    $("td[id|='out']").css("border","1.5px dashed blue" );


	$("li[id]").mouseover(function() {

        $("td#" +this.id).css({"color":"blue","border":"2px dashed red"});

        $("#" +this.id+" + ol").css("color","red");
    });
	
	
	$("li[id]").mouseout(function() {

        $("td#" +this.id).css({"color":"black","border":"2px dashed blue"});

        $("#" +this.id+" + ol").css("color","black");
    });

});
