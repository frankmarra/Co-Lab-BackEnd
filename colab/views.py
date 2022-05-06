from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer, AlbumSerializer, NeedSerializer, GenreSerializer, MetadataSerializer, TrackSerializer, CollabSerializer
from .models import User, Album, Need, Genre, Metadata, Track, Collab
# Create your views here.


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# class UserTrackList(generics.ListCreateAPIView):
#     queryset = Track.objects.filter(user_id=User)
#     serializer_class = TrackSerializer

class AlbumList(generics.ListCreateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer


class AlbumDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer


class NeedList(generics.ListCreateAPIView):
    queryset = Need.objects.all()
    serializer_class = NeedSerializer


class NeedDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Need.objects.all()
    serializer_class = NeedSerializer


class GenreList(generics.ListCreateAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class GenreDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class MetadataList(generics.ListCreateAPIView):
    queryset = Metadata.objects.all()
    serializer_class = MetadataSerializer


class MetadataDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Metadata.objects.all()
    serializer_class = MetadataSerializer


class TrackList(generics.ListCreateAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer


class TrackDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer


class CollabList(generics.ListCreateAPIView):
    queryset = Collab.objects.all()
    serializer_class = CollabSerializer


class CollabDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Collab.objects.all()
    serializer_class = CollabSerializer
