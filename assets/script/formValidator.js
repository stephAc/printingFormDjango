document.addEventListener('DOMContentLoaded', function() {
  var nom = document.getElementById('nomForm');
  var prenom = document.getElementById('prenomForm');
  var email = document.getElementById('emailForm');
  var numero = document.getElementById('numForm');
  var batiment = document.getElementById('batimentForm');
  var bureau = document.getElementById('bureauForm');
  var format = document.getElementById('formatSelect');
  var largeurDiv = document.getElementById('Largeur');
  var longueurDiv = document.getElementById('Longueur');
  var largeur = document.getElementById('largeurForm');
  var longueur = document.getElementById('longueurForm');
  var fichier = document.getElementById('fichierForm');
  var submit = document.getElementById('btnForm');

  nom.addEventListener('change', function() {
    var nomRegex = new RegExp('^[a-zA-Z]+$');
    if (nomRegex.test(nom.value)) {
      addClass(nom, true);
    } else {
      addClass(nom, false);
    }
  });
  prenom.addEventListener('change', function() {
    var prenomRegex = new RegExp('^[a-zA-Z]+$');
    if (prenomRegex.test(prenom.value)) {
      addClass(prenom, true);
    } else {
      addClass(prenom, false);
    }
  });

  numero.addEventListener('change', function() {
    var numRegex = new RegExp('^[0-9]{10}$');
    if (numRegex.test(numero.value)) {
      addClass(numero, true);
    } else {
      addClass(numero, false);
    }
  });

  email.addEventListener('change', function() {
    console.log(email.value);
    var emailRegex = new RegExp('.+@.+.(com|fr|co.uk)$');
    if (emailRegex.test(email.value)) {
      addClass(email, true);
    } else {
      addClass(email, false);
    }
  });

  function addClass(element, bool) {
    if (bool) {
      element.classList.remove('incorrectInput');
      element.classList.add('correctInput');
    } else {
      element.classList.remove('correctInput');
      element.classList.add('incorrectInput');
    }
  }

  submit.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(format.options[formatSelect.selectedIndex].innerText);

    if (
      (format.options[formatSelect.selectedIndex].innerText =
        'Select your option')
    ) {
      console.log(format.value);
    }

    console.log('sub');
  });
});
