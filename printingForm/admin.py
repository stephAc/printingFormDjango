from django.contrib import admin
from .models import Building
from .models import Office
from .models import Format

class BuildingAdmin(admin.ModelAdmin):
  list_display = ('building',)

admin.site.register(Building, BuildingAdmin)
admin.site.register(Office)
admin.site.register(Format)