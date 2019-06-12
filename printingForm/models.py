from django.db import models

class Building(models.Model):
  building = models.CharField(max_length=50, null=False)

class Office(models.Model):
  officeName = models.CharField(max_length=50, null=False)

class Format(models.Model):
  format = models.CharField(max_length=50, null=False)

class Formular(models.Model):
  nom = models.CharField(max_length=50,null=False)
  prenom = models.CharField(max_length=50,null=False)
  email = models.EmailField()
  numero = models.CharField(max_length=50, null=False)
  file = models.FileField(null=False)
  largeurInput =  models.CharField(max_length=50, null=True)
  longueurInput =  models.CharField(max_length=50, null=True )
  officeName = models.ForeignKey(Office, on_delete=models.CASCADE)
  format = models.ForeignKey(Format, on_delete=models.CASCADE)
  building = models.ForeignKey(Building, on_delete=models.CASCADE)