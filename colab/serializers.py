from rest_framework import serializers
from .models import User, Track, Album, Need, Genre, Metadata, Collab


class UserSerializer(serializers.HyperlinkedModelSerializer):
    tracks = serializers.HyperlinkedRelatedField(
        view_name='track_detail',
        many=True,
        read_only=True
    )
    albums = serializers.HyperlinkedRelatedField(
        view_name='album_detail',
        many=True,
        read_only=True
    )
    collabs = serializers.HyperlinkedRelatedField(
        view_name='collab_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = User
        fields = ('id', 'userName', 'userEmail', 'userPic',
                  'userAbout', 'userSpotPlay', 'tracks', 'albums', 'collabs')


class AlbumSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        read_only=True
    )
    tracks = serializers.HyperlinkedRelatedField(
        view_name='track_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Album
        fields = ('id', 'albumName', 'user', 'tracks')


class NeedSerializer(serializers.HyperlinkedModelSerializer):
    tracks = serializers.HyperlinkedRelatedField(
        view_name='track_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Need
        fields = ('id', 'needName', 'tracks')


class GenreSerializer(serializers.HyperlinkedModelSerializer):
    tracks = serializers.HyperlinkedRelatedField(
        view_name='track_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Genre
        fields = ('id', 'genreName', 'genreDescription', 'tracks')


class MetadataSerializer(serializers.HyperlinkedModelSerializer):
    tracks = serializers.HyperlinkedRelatedField(
        view_name='track_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Metadata
        fields = ('id', 'metadataName', 'metadataDescription', 'tracks')


class TrackSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        read_only=True
    )
    album = Serializers.HyperlinkedRelatedField(
        view_name='album_detail',
        read_only=True
    )
    genres = serializers.HyperlinkedRelatedField(
        view_name='genre_detail',
        many=True,
        read_only=True
    )
    needs = serializers.HyperlinkedRelatedField(
        view_name='need_detail',
        many=True,
        read_only=True
    )
    metadata = serializers.HyperlinkedRelatedField(
        view_name='metadata_detail',
        many=True,
        read_only=True
    )
    collabs = serializers.HyperlinkedRelatedField(
        view_name='collab_detail',
        many=True,
        read_only=True
    )


class CollabSerializer(serializers.HyperlinkedModelSerializer):
    users = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        many=True,
        read_only=True
    )
    track = serializers.HyperlinkedRelatedField(
        view_name='track_detail',
        read_only=True
    )
