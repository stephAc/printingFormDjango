from django.contrib import admin
from .models import Building
from .models import Office
from .models import Format
# from .models import Formular


class BuildingAdmin(admin.ModelAdmin):
  list_display = ('building',)
class OfficeAdmin(admin.ModelAdmin):
  list_display = ('officeName',)
class FormatAdmin(admin.ModelAdmin):
  list_display = ('format',)
# class FormularAdmin(admin.ModelAdmin):
#   list_display = ('formular')

admin.site.register(Building, BuildingAdmin)
admin.site.register(Office, OfficeAdmin)
admin.site.register(Format, FormatAdmin)
# admin.site.register(Formular, FormularAdmin)