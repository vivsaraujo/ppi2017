var clique = 1;
		window.onload = function() {
			var ins = document.querySelector("#instrucao");
			ins.style.background = "lightgray";
			ins.style.display = "inline";
		}

		function altereTexto(){
			var i = document.querySelector("#instrucao");
			i.innerHTML = "Clique aqui!("+clique+")";
			clique++;
		}
		
		function mouseOver() {
			var mouse = document.querySelector("#mudandoback");
			mouse.style.background = "blue";
		}

		function mouseOut() {
			var mouse = document.querySelector("#mudandoback");
			mouse.style.background = "green";
		}