$(document).ready(main);


// Fonction principale
function main(){
var tentatives = 5;
var alnum = Math.random()*10;
alnum = Math.round(alnum);
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
function startGame(){
	tentatives=5;
	alnum=Math.random()*10;
	alnum = Math.round(alnum);
	$('#mylab').text(tentatives);
}
function clickValider(){
		var mynum=$('#mytext').val();
			if (tentatives>0){
				if(mynum==alnum){
					alert('partie gagnée');
					startGame();
				}else if(mynum<alnum){
					alert('perdu, chiffre trop petit');
					tentatives--;
				}else{
					alert('perdu, chiffre trop grand');
					tentatives--;
				}

			}else{
				alert('partie perdue');
				startGame();
			}
			$('#mylab').text(tentatives);
		}
		
	

//}
	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'

		// Récupérer le contenu de mon input

		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
			*/

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit

			// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 */
			
	// /Fin == Fonction clickValider == 


	$('#mybtn').on('click',function(){
		clickValider();
	})
	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
	*/
}