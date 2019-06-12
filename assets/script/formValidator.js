document.addEventListener('DOMContentLoaded', function() {
  var printingForm = document.getElementById('printingForm');
  var nom = document.getElementById('nomForm');
  var nomValide = false;
  var prenom = document.getElementById('prenomForm');
  var prenomValide = false;
  var email = document.getElementById('emailForm');
  var emailValide = false;
  var numero = document.getElementById('numForm');
  var numeroValide = false;
  var batiment = document.getElementById('batimentForm');
  var batimentValide = false;
  var bureau = document.getElementById('bureauForm');
  var bureauValide = false;
  var format = document.getElementById('formatSelect');
  var formatValide = false;
  var largeurDiv = document.getElementById('Largeur');
  var longueurDiv = document.getElementById('Longueur');
  var largeur = document.getElementById('largeurForm');
  var largeurValide = false;
  var longueur = document.getElementById('longueurForm');
  var longueurValide = false;
  var fichier = document.getElementById('fichierForm');
  var fichierValide = false;
  var fichierDiv = document.getElementById('fileInputDiv');
  var submit = document.getElementById('btnForm');
  var banner = document.getElementById('banner');

  nom.addEventListener('change', function() {
    var nomRegex = new RegExp('^[a-zA-Z]+$');
    if (nomRegex.test(nom.value)) {
      addClass(nom, true);
      nomValide = true;
    } else {
      addClass(nom, false);
      nomValide = false;
    }
  });
  prenom.addEventListener('change', function() {
    var prenomRegex = new RegExp('^[a-zA-Z]+$');
    if (prenomRegex.test(prenom.value)) {
      addClass(prenom, true);
      prenomValide = true;
    } else {
      addClass(prenom, false);
      prenomValide = false;
    }
  });

  numero.addEventListener('change', function() {
    var numRegex = new RegExp('^[0-9]{10}$');
    if (numRegex.test(numero.value)) {
      addClass(numero, true);
      numeroValide = true;
    } else {
      addClass(numero, false);
      numeroValide = false;
    }
  });

  email.addEventListener('change', function() {
    var emailRegex = new RegExp('.+@.+.(com|fr|co.uk)$');
    if (emailRegex.test(email.value)) {
      addClass(email, true);
      emailValide = true;
    } else {
      addClass(email, false);
      emailValide = false;
    }
  });

  longueur.addEventListener('change', function() {
    var numRegex = new RegExp('^[0-9]*$');
    if (numRegex.test(longueur.value)) {
      addClass(longueur, true);
      longueurValide = true;
    } else {
      addClass(longueur, false);
      longueurValide = false;
    }
  });
  largeur.addEventListener('change', function() {
    var numRegex = new RegExp('^[0-9]*$');
    if (numRegex.test(largeur.value)) {
      addClass(largeur, true);
      largeurValide = true;
    } else {
      addClass(largeur, false);
      largeurValide = false;
    }
  });
  format.addEventListener('change', function() {
    if (
      format.options[formatSelect.selectedIndex].innerText ===
      '(*) Selectionner un format'
    ) {
      format.classList.remove('correctInput');
      format.classList.add('incorrectInput');
      formatValide = false;
    } else {
      format.classList.remove('incorrectInput');
      format.classList.add('correctInput');
      formatValide = true;
    }
  });
  fichier.addEventListener('change', function() {
    if (fichier.files.length === 1) {
      fileInputDiv.classList.remove('incorrectInputFile');
      fileInputDiv.classList.add('correctInputFile');
      fichierValide = true;
    } else {
      fileInputDiv.classList.remove('correctInputFile');
      fileInputDiv.classList.add('incorrectInputFile');
      fichierValide = false;
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

  function checkSelectField() {
    if (bureau.options[bureau.selectedIndex].innerText === '') {
      bureauValide = false;
    } else {
      bureauValide = true;
    }

    if (batiment.options[batiment.selectedIndex].innerText === '') {
      batimentValide = false;
    } else {
      batimentValide = true;
    }

    if (
      format.options[formatSelect.selectedIndex].innerText ===
      '(*) Selectionner un format'
    ) {
      format.classList.remove('correctInput');
      format.classList.add('incorrectInput');
      formatValide = false;
    } else {
      format.classList.remove('incorrectInput');
      format.classList.add('correctInput');
      formatValide = true;
    }

    if (fichier.files.length === 0) {
      fileInputDiv.classList.add('incorrectInputFile');
      fichierValide = false;
    }
  }

  function showBanner() {
    banner.innerText = 'Veuillez remplir tous les champs';
    banner.classList.add('bannerIncorrect');
  }

  submit.addEventListener('click', function(event) {
    event.preventDefault();

    checkSelectField();

    if (
      nomValide &&
      prenomValide &&
      emailValide &&
      numeroValide &&
      batimentValide &&
      bureauValide &&
      fichierValide &&
      formatValide
    ) {
      if (format.options[formatSelect.selectedIndex].innerText === 'Autre') {
        if (largeurValide && longueurValide) {
          printingForm.submit();
        } else {
          showBanner();
        }
      } else {
        printingForm.submit();
      }
    } else {
      showBanner();
    }
  });
});
