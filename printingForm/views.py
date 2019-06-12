from django.shortcuts import render
from .models import Building
from .models import Office
from .models import Format
from .form.formValidation import PrintingFormValidator
from django.core.mail import send_mail

def printing_form(request):

  buildings = Building.objects.all()
  offices = Office.objects.all()
  formats = Format.objects.all()

  if request.method == 'POST':
    form_validator = PrintingFormValidator(request.POST, request.FILES)
    if form_validator.is_valid():
      message = "Mesage automatique, \nDemandeur : " + request.POST['nom'] + " " + request.POST['prenom'] +"\nNuméro : "+request.POST['numero'] +"\nBâtiment : " +request.POST['building'] +"\nBureau : "+request.POST['officeName']+"\nFormat : " + request.POST['format']
      print("***********************************************valid")
      send_mail("Demande d'impression",message,"test.fake495@gmail.com",[request.POST['email']], fail_silently=False)
      form_validator.cleaned_data
      return render(request,'mail_send.html')

    else:
      print(request.POST)
      print("invalid ", form_validator.errors)

    print("passage")

  return render(request,'printing_form.html', {'buildings':buildings,'formats':formats, 'offices':offices})

def mail_send(request):
  return render(request,'mail_send.html')