# Cinemato - Mid Term Project

## Obiettivo

Riprodurre il sito fornito attraverso l'utilizzo di un progetto in Vue realizzato tramite il packet-manager Vite.

## Struttura del progetto

Divido il progetto in macro componenti, quali:

  - Header

  - Jumbotron

  - Main

  - Footer

ognuno di essi, all'occorrenza utilizzerà altri componenti parziali che saranno riutilizzabili in più aree del progetto.

## Tecnologie utilizzate

- HTML

- CSS

- SCSS

- Bootstrap

- JavaScript

- Vue

- Swiper

## Strutturazione del progetto

L'obiettivo è quello di riprodurre fedelmente il sito fornito, per ottenere ciò ho strutturato il lavoro in vare fasi e diviso in macro componenti il sito con all'interno piccoli componenti, cercando di renderli il più riutilizzabili possibili, come ad esempio il componente `Parallax.vue` che richiama al suo interno altri componenti che vengono visualizzati in base al titolo della section.

Quindi per prima cosa analizzo la pagina fornita e cerco di individuare i componenti principali, quali:

- Header

- Jumbotron

- Main

- Call To Action

- Footer

All'interno di questi macro componenti cerco anche dei parziali che possano essere riutilizzati, come ad esempio le `Section`, `Parallax`, `MenuItem`, `BlogPost` ed altri. Ho cercato sin da subito di realizzare ogni singolo pezzo in maniera dinamica e completando tutte le animazioni / features prima di passare al componente successivo.

## Features del sito

- Stampa a schermo dinamica dei menu e di altri componenti

- Dropdown menu e dropend menu funzionanti

- Pulsante di ricerca che apre un modale di ricerca a tutto schermo

- Swiper per le immagini o altri scopi

- Animazioni in hover su testo, immagini e link 

- Counter all'interno del primo parallasse, che viene inizializzato quando quest'ultimo diventa visibile in pagina, aumenta ogni "x"ms il numero stampato a schermo e si ferma ad un valore prestabilito

- Stilizzazione degli input

- Pulsante `"Back to top"` che appare allo scroll del sito, che al click riporta all'inizio della pagina e scompare quando si è raggiunto oppure quando non si è ancora mai scrollato

## Processo di realizzazione del sito

Dopo aver analizzato la pagina passo quindi alla realizzazione dell'Header, servendomi di un file, chiamato `menus.js` creo un database che contiene le informazioni da stampare dianmicamente all'interno della `nav bar`, faccio quindi ciclare il componente `MenuItem` che conterrà lo stile base del menù e grazie all'uso delle props verrà passato dinamicamente il dato contenuto nel database, questa operazione verrà ripetuta più volte all'interno del progetto.

Uno dei pulsanti dell'header aveva anche la funzione di aprire un `Modal`, che ho realizzato come componente. Esso viene visualizzato al di sopra di tutta la pagina e può essere chiuso sia tramite l'apposito pulsante di chiusura che cliccando su qualsiasi punto dello schermo, tranne che sull'input.

Nel caso del `Jumbotron` e di altri componenti è stato utilizzaro `Swiper`, customizzando poi alcune impostazioni o proprietà, come ad esempio lo stile dei pulsanti next e prev, oppure la grandezza delle card o il colore dei bullet.

All'interno del `Main` ho importato esclusivamente le `Section` e gli altri elementi che lo compongono come ad esempio i `Parallax`, che a loro volta importano degli altri componenti, come ad esempio le `Card`. Al'interno delle section e dei parallax i componenti vengono visualizzati in base ad alcune condizioni, sono quindi tutti importati ma alcuni vengono visualizzati ed altri no.

In fine nel `Footer` è importato il `FooterTop`, un componente che a sua volta importa `FooterCol` che stilizza la singola colonna che poi, una volta ciclata, darà come risultato una navbar completa di link, che possono avere l'effetto hover o meno a seconda del fatto che nel database abbiano la flag `isLink = true`.