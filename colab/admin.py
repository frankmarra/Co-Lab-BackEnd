from django.contrib import admin
from .models import User, Track, Album, Need, Genre, Metadata, Collab

# Register your models here.
admin.site.register(User)
admin.site.register(Track)
admin.site.register(Album)
admin.site.register(Need)
admin.site.register(Genre)
admin.site.register(Metadata)
admin.site.register(Collab)
