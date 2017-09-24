window.onload = function () {
		var btnOrigin = document.querySelector("#btnOrigem");
		
		var flag = true;
		btnOrigin.onclick = function() {
			var contOrigin = document.querySelector("#idOrigem");
				if(flag){
					contOrigin.style.display = "none";
				}else{
					contOrigin.style.display = "inline";
					
				}
				flag =! flag;	
		}
		
		
		var btnOrigin2 = document.querySelector("#btnOrigem2");
		
		btnOrigin2.onclick = function() {
			var contOrigin2 = document.querySelector("#idOrigem2");
				if(flag){
					contOrigin2.style.display = "none";
				}else{
					contOrigin2.style.display = "inline";
					
				}
				flag =! flag;	
		}
		
		var btnOrigin3 = document.querySelector("#btnOrigem3");
		
		btnOrigin3.onclick = function() {
			var contOrigin3 = document.querySelector("#idOrigem3");
				if(flag){
					contOrigin3.style.display = "none";
				}else{
					contOrigin3.style.display = "inline";
					
				}
				flag =! flag;	
		}
	}	
	