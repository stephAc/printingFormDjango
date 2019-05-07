from django.contrib import admin
from .models import Building
from .models import Office
from .models import Format

class BuildingAdmin(admin.ModelAdmin):
  list_display = ('building',)
class OfficeAdmin(admin.ModelAdmin):
  list_display = ('officeName',)
class FormatAdmin(admin.ModelAdmin):
  list_display = ('format',)

admin.site.register(Building, BuildingAdmin)
admin.site.register(Office, OfficeAdmin)
admin.site.register(Format, FormatAdmin)