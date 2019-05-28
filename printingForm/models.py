from django.db import models

# class User(models.Model):
#   nom = models.CharField(max_length=50,null=False)
#   prenom = models.CharField(max_length=50,null=False)
#   email = models.CharField(max_length=100, null=False)
#   numero = models.CharField(max_length=50, null=False)

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
  dateFormRequest = models.DateTimeField(auto_now_add=True)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  office = models.ForeignKey(Office, on_delete=models.CASCADE)
  format = models.ForeignKey(Format, on_delete=models.CASCADE)
  building = models.ForeignKey(Building, on_delete=models.CASCADE)