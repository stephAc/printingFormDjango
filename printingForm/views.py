from django.shortcuts import render
from .models import Building
from .models import Office
from .models import Format

def printing_form(request):
  buildings = Building.objects.all()
  office = Office.objects.all()
  formats = Format.objects.all()
  return render(request,'printing_form.html', {'buildings':buildings,'formats':formats})
