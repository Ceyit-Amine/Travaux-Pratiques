function demarrer() {
  const prenom = prompt("What is your First Name ?");

  if (prenom === null) {
    return;
  }

  const S_Age = prompt("How Old Are You ?");

  if (S_Age === null || S_Age.trim() === "") {
    alert("Veuillez saisir un âge.");
    return;
  }

  const age = Number(S_Age);

  if (!Number.isFinite(age)) {
    alert("Please Enter A Number!!.");
    return;
  }

  console.log("Prénom :", prenom, "| Type :", typeof prenom);
  console.log("Âge :", age, "| Type :", typeof age);

  alert(`Bonjour ${prenom}, vous aurez ${age + 1} ans l’année prochaine.`);

  const continuer = confirm("Souhaitez-vous continuer ?");
  console.log("Souhaite continuer :", continuer);
}


function sommeEntiers(n) {
  let somme = 0;

  for (let i = 1; i <= n; i++) {
    somme += i;
  }

  return somme;
}

function nombresPairs(n) {
  let nombres = [];
  let i = 0;

  while (i <= n) {
    nombres.push(i);
    i += 2;
  }

  return nombres.join(" ");
}

function lireNombre() {
  const champ = document.getElementById("nombreN");
  const resultat = document.getElementById("resultat");
  const saisie = champ.value.trim();
  const n = Number(saisie);

  if (saisie === "" || n < 1 || n > 100) {
    resultat.textContent = "Erreur : saisissez un entier entre 1 et 100.";
    return null;
  }

  return n;
}

document.getElementById("calculerSomme").addEventListener("click", function () {
  const n = lireNombre();

  if (n !== null) {
    document.getElementById("resultat").textContent =
      `Somme : ${sommeEntiers(n)}`;
  }
});

document.getElementById("afficherPairs").addEventListener("click", function () {
  const n = lireNombre();

  if (n !== null) {
    document.getElementById("resultat").textContent =
      `Nombres pairs : ${nombresPairs(n)}`;
  }
});

const titreCours = document.getElementById("titreCours");
const sectionCours = document.getElementById("cours");

const paragraphes = sectionCours.getElementsByTagName("p");
const chapitres = document.getElementsByClassName("chapitre");
const chapitreImportant = document.querySelector(".chapitre.important");
const chapitresSelectionnes = document.querySelectorAll(
  "#cours p.chapitre"
);

console.log("Paragraphes dans la section :", paragraphes.length);
console.log("Chapitres sélectionnés :", chapitresSelectionnes.length);

document.getElementById("modifier").addEventListener("click", function () {
  titreCours.textContent = "JavaScript : une page interactive";

  for (let i = 0; i < chapitres.length; i++) {
    chapitres[i].style.color = "blue";
  }

  chapitreImportant.style.fontWeight = "bold";
  this.textContent = "Présentation modifiée";
});

function mettreEnEvidence(champ) {
  champ.style.backgroundColor = "lightyellow";
}

function retablirStyle(champ) {
  champ.style.removeProperty("background-color");
}

function afficherSaisie(champ) {
  document.getElementById("apercu").textContent = champ.value;
}

function changerCouleur(element) {
  element.style.color = "red";
}

function retablirCouleur(element) {
  element.style.removeProperty("color");
}

document.getElementById("selectionner").addEventListener("click", function () {
  const champPrenom = document.getElementById("prenom");

  champPrenom.focus();
  champPrenom.select();
});

const formulaire = document.forms["inscription"];
const champNom = formulaire.elements["nom"];
const message = document.getElementById("message");
const recapitulatif = document.getElementById("recapitulatif");

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  const nom = champNom.value.trim();
  const profession = formulaire.elements["profession"].value;
  const sexe = formulaire.querySelector('input[name="sexe"]:checked');
  const langues = formulaire.querySelectorAll('input[name="langue"]');

  message.textContent = "";
  recapitulatif.textContent = "";

  if (nom.length < 3) {
    message.textContent = "Erreur : le nom doit contenir au moins trois caractères.";
    champNom.focus();
    return;
  }

  if (profession === "") {
    message.textContent = "Erreur : choisissez une profession.";
    return;
  }

  if (sexe === null) {
    message.textContent = "Erreur : sélectionnez un sexe.";
    return;
  }

  const languesSelectionnees = [];
  for (let i = 0; i < langues.length; i++) {
    if (langues[i].checked) {
      languesSelectionnees.push(langues[i].value);
    }
  }

  if (languesSelectionnees.length === 0) {
    message.textContent = "Erreur : sélectionnez au moins une langue.";
    return;
  }

  const inscription = {
    nom,
    profession,
    sexe: sexe.value,
    langues: languesSelectionnees.join(", "),
    presenter() {
      return `Nom : ${this.nom}
Profession : ${this.profession}
Sexe : ${this.sexe}
Langues : ${this.langues}`;
    }
  };

  recapitulatif.textContent = inscription.presenter();
});

formulaire.addEventListener("reset", function () {
  message.textContent = "";
  recapitulatif.textContent = "";
});

// Question : Que représente this dans onfocus="mettreEnEvidence(this)" ?
// Solution : Dans un gestionnaire inline, this désigne l'élément qui déclenche l'événement.

// Question : Que représente this dans la méthode presenter() ?
// Solution : Dans inscription.presenter(), this désigne l'objet inscription qui appelle la méthode.
