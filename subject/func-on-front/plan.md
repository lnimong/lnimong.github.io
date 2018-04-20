
# le fonctionnel sur le front

## developpement front ? de quoi on parle
* du code qui décrit l'interface
* du code qui gère les intéractions entre l'utilisateur et l'appli
### =>conclusion : le code de l'UI (js notamment)


## la programmation fonctionnelle ? de quoi on parle
* un paradigme [input => programme fonctionnel => output] ou [output = programme fonctionnel (input)]
* une manière de coder avec ses propres bonnes pratiques (map, filter, immutablejs, linq, lambda expr, arrow func)
### =>conclusion : on en fait tous de plus en plus


## le dev front : très rapide historique
* 1993 premier navigateur NCSA Mosaic
* 1995 Javascript sur nescape (breindan eich)
* 2000 XMLhttpRequest par MS (OWA) qui va évoluer à
* 2006 Jquery 
* 2006-2009 l'iphone, les réseaux sociaux et la nécessité d'organiser son code (et la multiplication des librairies)
* 2013 reactJs
### =>conclusion : on a une tonne de manières différentes de coder 

## la guerre des styles 
* angular VS react ?
* l'introduction du pattern flux avec redux (et donc un peu de fonctionctionnel)
* angular VS react+Redux (objet VS fonctionnel)
* react+redux : simplifie le code front, on a 0 intelligence, juste des fonction de transfo
* angular : on a des factory et des services, concepts (SOLID) généralement utilisés pour encapsuler de l'intelligence => mal adapté
* pourquoi react c'est mieux (nouveaumodele = fonction (modele, interction) et vue = fonction (modele)) => début de la mode "reactive programming"
### =>conclusion react a gagné

## pourquoi react a gagné ? le style FRP
* la mode de la reactive programming sur le front (rxjs, baconjs, reactjs, cyclejs)
* *voir lequel est le premier et se renseigner sur les origines*
* objectif du truc voir son appli comme un programme de traitement d'intéractions/évènements (ce qui est le cas et le réel objectif de toute application web moderne)
* les streams/flux sont au centre lorsqu'on parle de reactive programming et généralement ce sont des flux d'interactions/evenement
```
Apps nowadays have an abundancy of real-time events of every kind that enable a highly interactive experience to the user. We need tools for properly dealing with that, and Reactive Programming is an answer
```
* en input on a un flux d'évènements en output on va avoir un autre flux (de commandes à faire)


* traiter ça avec des factory, des services semble un peu complexe
* le F de FRP : la prog fonctionnelle bien adaptée
* partir du concept de RP, y ajouter les bases de prog fonctionnelle (map, reduce, pure fonction, immutabilité)
* et voir son appli de la sorte :
```
let update accState event = ... state

let stateToView state = ...view

let myApp =  eventsStream |> (fold update initState) |> statetoView
```

```
//en français
déroulement de mon appli :
    etat = etatInitial
    monApp = vue (etat)
    pour chaque evenement de monFluxDevenement
        etat = update (etat)
        app = vue (etat)
```
* on a donc une appli qui va travailler avec un flux d'action...
* marche très bien pour de l'UI
* c'est ce que font toutes les applis react
### => tous ceux qui font du react ont déjà un pied ds la PF


## les langages fonctionnels au front c'est pas nouveau
* la source d'inspiration de redux : ELM
    *  https://redux.js.org/
    * https://twitter.com/dan_abramov/status/645547278078451712?lang=fr
* elm c'est un langage inspiré des langages de la famille [ML](https://fr.wikipedia.org/wiki/ML_(langage)) 

* exemple de code
### =>conclusion: les petites différences sont pas mal quand même

on 
## l'alternative fable
* comment ça marche
* avantages de elmish (branché à react)
* F# vs elm
* exemple
### => conclusion: pas mal de solutions en fait

## facebook dans le turfu ? reasonml
* qu'est ce que c'est ?
* au vu du succès de react quelles conséquences ?
* 

