from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
  path('users/', views.UserList.as_view(), name='user_list'),
  path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
  path('albums/', views.AlbumList.as_view(), name='album_list'),
  path('albums/<int:pk>', views.AlbumDetail.as_view(), name='album_detail'),
  path('needs/', views.NeedList.as_view(), name='need_list'),
  path('needs/<int:pk>', views.NeedDetail.as_view(), name='need_detail'),
  path('genres/', views.GenreList.as_view(), name='genre_list'),
  path('genres/<int:pk>', views.GenreDetail.as_view(), name='genre_detail'),
  path('tracks/', views.TrackList.as_view(), name='track_list'),
  path('tracks/<int:pk>', views.TrackDetail.as_view(), name='track_detail'),
  path('metadata/', views.MetadataList.as_view(), name='metadata_list'),
  path('metadata/<int:pk>', views.MetadataDetail.as_view(), name='metadata_detail'),
  path('collabs/', views.CollabList.as_view(), name='collab_list'),
  path('collabs/<int:pk>', views.CollabDetail.as_view(), name='collab_detail')
]
