$(document).ready(function() {
					
					//Opdracht 1
					$("#code").click(function() {
						let date = new Date();
						let year = date.getFullYear();
						let month = date.getMonth()+1;
						let day = date.getDate();
						
						if(day <10) {
							day = '0'+day;
						}
						if(month <10) {
							month = '0'+month;
						}
						alert (year+'-'+month+'-'+day);
					})

					//Opdracht 2
					$("a").click(function() {
						const page = $(this).text();
						return confirm("Weet u zeker dat u naar "+page+" wilt gaan?");
					})
					
					//Opdracht 3
					document.getElementById("voornaam1").innerHTML = persons[0].firstname;
					document.getElementById("voornaam2").innerHTML = persons[1].firstname;
					document.getElementById("voornaam3").innerHTML = persons[2].firstname;
					document.getElementById("voornaam4").innerHTML = persons[3].firstname;
					document.getElementById("voornaam5").innerHTML = persons[4].firstname;
					document.getElementById("voornaam6").innerHTML = persons[5].firstname;
					document.getElementById("achternaam1").innerHTML = persons[0].lastname;
					document.getElementById("achternaam2").innerHTML = persons[1].lastname;
					document.getElementById("achternaam3").innerHTML = persons[2].lastname;
					document.getElementById("achternaam4").innerHTML = persons[3].lastname;
					document.getElementById("achternaam5").innerHTML = persons[4].lastname;
					document.getElementById("achternaam6").innerHTML = persons[5].lastname;
					document.getElementById("leeftijd1").innerHTML = persons[0].age;
					document.getElementById("leeftijd2").innerHTML = persons[1].age;
					document.getElementById("leeftijd3").innerHTML = persons[2].age;
					document.getElementById("leeftijd4").innerHTML = persons[3].age;
					document.getElementById("leeftijd5").innerHTML = persons[4].age;
					document.getElementById("leeftijd6").innerHTML = persons[5].age;
					document.getElementById("woonplaats1").innerHTML = persons[0].location;
					document.getElementById("woonplaats2").innerHTML = persons[1].location;
					document.getElementById("woonplaats3").innerHTML = persons[2].location;
					document.getElementById("woonplaats4").innerHTML = persons[3].location;
					document.getElementById("woonplaats5").innerHTML = persons[4].location;
					document.getElementById("woonplaats6").innerHTML = persons[5].location;
					
					//Opdracht 4
					$("td").click(function() {
						let celWaardeNieuw = prompt("Geef nieuwe waarde op: ", "");
						if (celWaardeNieuw == null || celWaardeNieuw == "") {
							return;
						} else {
							$(this).replaceWith("<td>"+celWaardeNieuw+"</td>");
						}
					})
					
					//Opdracht 5
					$("#knopvoorborder").click(function() {
						$("#mainframe").css("border", "solid 5px orange");
					})
					
					//Opdracht 6
					$(".blok").dblclick(function() {
						let color = ["yellow", "grey", "purple", "tomato", "violet"]
						i = Math.floor(Math.random() * 5);
						$(this).css("backgroundColor", color[i]);
					})
					
					//Opdracht 7
					$("#url").keyup(function() {
						let url = $("input").val();
						$("iframe").attr("src", url);	
					})
					
					//Opdracht 8
					$(".blok2").click(function() {
						$(this).css("opacity", 0.5);
					})
					
					//Opdracht 9
					//$("h3").before("<section>");
					//$("p").appendTo("<section>");
					
					
					$("h3 + p").hide();
					$("h3").click(function() {
						$(this).next().toggle(2500);
					})
					
					//Opdracht 10
					$(".mooi").click(function() {
						$(this).animate({left:'+=50px'});	
					})
					
					//Opdracht 11
					$("button").click(function() {
						let nieuwePlaats = $("#nieuwe_plaats").val();
						$("ol").append('<li>'+nieuwePlaats+'</li>');
					})
					
					//Opdracht 12
					$('#slides').slidesjs({
						width: 940,
						height: 528,
						play: { // instellingen voor play knop
							active: true, // aan of uit
							auto: false, // begin direct met spelen
							interval: 3000 // aantal ms voor de volgende
						},
						navigation: { // instellingen voor navigatieknoppen
							active: true, // aan of uit
							effect: 'slide' // 'slide' of 'fade' effect
						},
						pagination: { // instellingen voor pagina links onder
							active: true, // aan of uit
							effect: 'fade' // 'slide' of 'fade' effect
						}
					});
					
				})