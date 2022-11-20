function changeProfile() {//functia main
	// call all functions to change profile
	NameToJob();//apelarea functiei de schimbare a numelui in job
	educationToAchievements();//apelarea functiei care schimba tabelul de cursuri cu achievement-uri 
	oldToNewImage();//apelarea functiei care schimba poza de profil
	changeBodyBackgroundColor();//schimbarea culorii si a fontului site-ului
}

function NameToJob() {
	document.getElementById("NumePrenume").innerHTML = "Software Engineering - Ubisoft";//schimbarea Prezentari cu numele job-ului dorit
}

function educationToAchievements() {
	// schimbare primul rand tabel
	var r1 = document.getElementById("realizare_r1");//localizarea elementelor de pe prima coloana lina 1
	var p1 = document.getElementById("perioada_r1");//localizarea elementelor de pe a doua coloana lina 1
	var l1 = document.getElementById("link_r1");//localizarea elementelor de pe a treia coloana lina 1
	r1.innerHTML = "Internship";
	p1.innerHTML = "01.06.2024-24.09.2024";
	l1.innerHTML = "https://www.ubisoft.com/en-us/company/careers";

	// schimbare al doilea rand tabel
	var r2 = document.getElementById("realizare_r2");//localizarea elementelor de pe prima coloana lina 2
	var p2 = document.getElementById("perioada_r2");//localizarea elementelor de pe a doua coloana lina 2
	var l2 = document.getElementById("link_r2");//localizarea elementelor de pe a treia coloana lina 2
	r2.innerHTML = "Cea mai buna lucrare de licenta";
	p2.innerHTML = "26.06.2026";
	l2.innerHTML = "https://etti.utcluj.ro/finalizare-studii.html";

	// schimbare al treilea rand tabel
	var r3 = document.getElementById("realizare_r3");
	var p3 = document.getElementById("perioada_r3");
	var img_mob = document.getElementById("mobitech");
	r3.innerHTML = "Lansarea aplicatiei Mobitech";
	p3.innerHTML = "26.05.2024";
	img_mob.src="./mobitech.jpeg";
	
}

function oldToNewImage() {
	var img = document.getElementById("pozaprofil");
	//img.src = "./Poza profil.png";
	img.style.opacity = 0.95;
	img.style.borderWidth = '5px';
    img.style.borderStyle = 'solid';
    img.style.borderColor = 'gray';
	img.style.right='100px'
	
	
	
}

function changeBodyBackgroundColor() {
	var body = document.getElementById("body_");//localizarea intr-o variabila 
	body.style.backgroundColor  = "#b9d6d9";//schimbarea background-ului cu ajutorul variabile definite
	body.style.fontFamily="Verdana";//schimbarea fontului cu ajutorul variabilei definite
	
}