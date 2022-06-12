**David Romero i Gabriel Dueñas**
**Xarxa Social**

Executarem amb:
docker-compose build
docker-compose up
Es necessari tenir el programa DOCKER en funcionament.

-Explicacio Creació Docker;

En primer lloc, utilitzarem la comanda “npm init -y” per tal de auto generar les dependencies corresponents en un arxiu anomenat package.json . 
Una vegada generem les dependencias del projecte instalarem un modul per conectar-nos a la nostre base de dades de “MongoDB” anomentat mongoose amb la següent comanda; “npm i mongoose”.
El Dockerfile ens servirà per a crear la imatge del contenidor que utilitzarem, es a dir, es un fitcher que conte les instrucciones necessàries per a que Docker pugui generar una imatge.
•	FROM; serveix per indicar quina versió de node utilitzarem en aquest cas
•	WORKDIR; serveix per indicar el directori en el que s’emmagatzemarà el codi
•	COPY; Per copiar les dependències generades prèviament, en el nou contenidor.
•	RUN; Per instalar les dependències npm.
•	COPY . . ; Per copiar el directori actual dintre del contenidor nou
•	CMD; Realitza la comanda indicada, i en el nostre cas executarem una comanda start la qual estará indicada en el package.json.

A continuación utilitzarem el Docker-compose per tal d’implementar ambdos contenidos, es a dir, el node i la nostre base de dades, en aquest cas MongoDB.
El Docker-compose permet compondré diferents imatges a la vegada. En aquest arxiu amb extensio .yml s’indiquen els serveis que s’utilitzaran, en el nostre cas Node i Mongo, els ports que utilitzarem i, per ultim els volumes per a copiar fitxers de local al contenidor.  

-Explicació creació API REST-:

En primer lloc crearem un clúster en Mongo Atlas, una plataforma gratuïta que hem decidit utilitzar per tal de desenvolupar el nostre projecte.
En configuració de xarxa habilitarem l’accés a qualsevol ip, que es el mateix que posar la 0.0.0.0/0.
Inicialitzem les variables corresponents per poder treballar amb el mòdul express.
Instal·larem un mòdul anomenat nodemon que ens facilitarà la feina de desenvolupament permitint-nos reiniciar el server automàticament cada vegada que guardem el codi.
Per instal·lar-ho hem fet; “npm i nodemon -D” i, a més a més, afegirem en el Package.json iniciar amb el servei nodemon en comptes de node. 
Utilitzarem el mòdul MONGOOSE per establir la connexió amb la nostre BDD creada prèviament en el Mongo Atlas.
Per tal de connectar-nos requerirem de la PASS que proporciona MongoDB en format de codi i únicament haurem de modificar la paraula password amb la nostre PASS definida prèviament.
En MongoDB necessitarem “Schemas” per tal de poder introduir els usuaris a la BDD, es a dir, li hem de dir a MongoDB com seran els tipus de dades que li entrarem a la BDD.
En aquesta estructura de dades definirem el tipus de dada i si es requerit o no.
Un cop tenim el model de dades d’un usuari l’haurem d’exportar.
A continuació requerirem d’aquest model de dades en el nostre Index.js i el cridarem amb un require i indicarem la ruta corresponent.
Crearem un fitxer de REQUESTS per simular les requests i anar verificant el correcte funcionament de la nostre API. 
Per fer això instal·larem la extensió REST Client en el visual Studio code.
Utilitzarem el mètode save per guardar els usuaris en la BDD i despres el motde find per cercar-los.
Per actualitzar usuari utilitzarem el mètode UpdateOne i en el request http en comptes de POST utilitzarem PUT.
