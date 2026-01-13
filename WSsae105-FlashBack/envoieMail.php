<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="author" content="Medina/Regis">
    <meta name="keywords" content="Flashback, musique, concert">
    <meta name="description" content="presentation des coulisses">
    <title>Formulaire de contact</title>
    
		<style>
			p.ok {
				color : #0c0 ;
			}

			p.ko {
				color : #c00 ;
			}
		</style>
    </head>
    
    <body>
  
<?php

	// Les lignes suivantes récupèrent les valeurs associés aux noms des champs et 
	// les stocke dans des variables PHP (commencent par un $).

	// Si les champs avaient été transmis en POST, il aurait juste fallu écrire $_POST à la place de $_GET dans le script lié.

	// Attention : lsur le serveur WEBETU, 'usage de la fonction php mail() est restreinte aux destinataires du domaine .univ-lorraine.fr
	// ça ne marchera donc pas si le destinataire est par exemple une adresse @gmail.com, @orange.fr ou autre...  
	
	$destinataire = $_GET ['dest'] ;
	$expediteur  = $_GET ['exped'] ;

	$sujet   = htmlspecialchars($_GET ['sujet']) ;
	$message = htmlspecialchars($_GET ['message']) ;
	
	// Ici on ne fait aucun contrôle, on espère que tous les champs sont bien remplis à la soumission du formulaire
	
	// Exemple d'appel  https://webetu.iutnc.univ-lorraine.fr/~husson7/sae105/formMail/envoieMail.php?dest=jean-luc.husson@univ-lorraine.fr&exped=jeanluc.husson@gmail.com&sujet=test&message=coucou

	$headers = 'From: ' . $expediteur ; 

	// On peut facilement ici construire le mail qui sera envoyé en concaténant des chaines et des variables...
	// Le \n provoque un retour à la ligne

	$messageEnvoye = "Message reçu de " . $expediteur . 
					 "\n pour " . $destinataire . " : " .
					 "\n-------------------------------\n" . 
					 $message . 
					 "\n-------------------------------" ;
	
	// Puis on appelle simplement la fonction mail() prédéfinie en php en lui transmettant les paramètres qu'elle attend
	// Le résultat de la fonction est 1 si l'envoi du mail s'est bien passé.

	$resultat = mail ( $destinataire , $sujet , $messageEnvoye , $headers ) ;
	
	// On teste le résultat pour afficher un message de succès ou d'erreur

	// echo ( nl2br($messageEnvoye) ) ;

	if ($resultat==1) {
		echo ( '<p class="ok">Votre message a bien été envoyé. Merci !</p>' ) ;
	}
	else {
		echo ( '<p class="ko">Un souci a eu lieu durant l\'envoi du message désolé.</p>' ) ;
	}


	// On génère quoi qu'il arrive un petit bouton de retour

	echo ( '<div><a href="javascript:history.back();">Retour à la page précédente</a></div>')

?>    
	
	</body>
	
</html>