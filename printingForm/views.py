from django.shortcuts import render
from .models import Building
from .models import Office
from .models import Format
from .form.formValidation import PrintingFormValidator

def printing_form(request):

  buildings = Building.objects.all()
  offices = Office.objects.all()
  formats = Format.objects.all()

  if request.method == 'POST':
    form_validator = PrintingFormValidator(request.POST, request.FILES)
    if form_validator.is_valid():
      print("valid")
      form_validator.cleaned_data
    else:
      print(request.POST)
      print("invalid ", form_validator.errors)

  return render(request,'printing_form.html', {'buildings':buildings,'formats':formats, 'offices':offices})
