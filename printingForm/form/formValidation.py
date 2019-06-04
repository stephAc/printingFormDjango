from django import forms
from ..models import Building, Format, Office
from django.core.validators import validate_email

class PrintingFormValidator(forms.Form):
  nom = forms.CharField(max_length=50)
  prenom = forms.CharField(max_length=50)
  email = forms.EmailField()
  numero = forms.CharField(max_length=50)
  file = forms.FileField(required=False)
  format = forms.ModelChoiceField(queryset=Format.objects.all())
  officeName = forms.ModelChoiceField(queryset=Office.objects.all())
  building = forms.ModelChoiceField(queryset=Building.objects.all())