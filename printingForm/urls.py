from django.urls import path
from . import views

app_name="printingForm"

urlpatterns=[
  path('',views.printing_form),
]