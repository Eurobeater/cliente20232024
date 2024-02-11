(function(){
	//CONSTANTES Y VARIABLES GLOBALES
    let levels = ['beginner','intermediate','expert']

	//RESTO DEL CÓDIGO
	let selectLevel = document.querySelector("#level")
	let buttonJugar = document.querySelector("#jugar")
	let divTablero = document.querySelector("#tablero")
	let tbodyDivRecords = document.querySelector("#records tbody")
	console.log(tbodyDivRecords)
	

	levels.forEach( (level, i) => {
		let newOption = document.createElement("option")
		newOption.textContent = levels[i]
		newOption.id = levels[i]
		selectLevel.append(newOption)
	})

	selectLevel.addEventListener("change", () => {
		let dificultad = selectLevel.value
		
		if (selectLevel.value != "") {
			buttonJugar.disabled = false
		}else {
			buttonJugar.disabled = true
		}

		if (selectLevel.value == "") {
			divTablero.innerHTML = "<img src=''>"
		}else if (selectLevel.value == "beginner" ) {
			divTablero.innerHTML = "<img src='images/minesweeper_beginner.png'>"
		}else if (selectLevel.value == "intermediate") {
			divTablero.innerHTML = "<img src='images/minesweeper_intermediate.png'>"
		}else {
			divTablero.innerHTML = "<img src='images/minesweeper_expert.png'>"
		}

		let params = new URLSearchParams("modo="+dificultad)
		let opciones = {                
			method: "POST",             
			body: params                
		}

		fetch("server/loadRecords.php", +opciones)
        .then( resp => resp.json() )
        .then(json => tablaRecords(json, tbodyDivRecords))

	})

})()

	function tablaRecords(json, tbodyDivRecords) {
		console.log(json)
    	json.forEach(resp => {
        	let newTr = document.createElement("tr")
			tbodyDivRecords.append(newTr)
        	let celda1 = document.createElement("td")
			celda1.textContent = resp.modo
			newTr.append(celda1)
        	let celda2 = document.createElement("td")
			celda2.textContent = resp.nick
			newTr.append(celda2)
        	let celda3 = document.createElement("td")
			celda3.textContent = resp.tiempo
			newTr.append(celda3)
    });
	}