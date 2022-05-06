from django.db import models

# Create your models here.


class User(models.Model):
    userName = models.CharField(max_length=100)
    userEmail = models.EmailField()
    userPic = models.TextField(blank=True)
    userAbout = models.TextField(blank=True)
    userSpotPlay = models.TextField(blank=True)

    class Meta:
        ordering = ['userName']

    def __str__(self):
        return self.userName


class Album(models.Model):
    albumName = models.CharField(max_length=100)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='albums')

    class Meta:
        ordering = ['albumName']

    def __str__(self):
        return self.albumName


class Need(models.Model):
    needName = models.CharField(max_length=100)

    class Meta:
        ordering = ['needName']

    def __str__(self):
        return self.needName


class Genre(models.Model):
    genreName = models.CharField(max_length=100)
    genreDescription = models.TextField(blank=True)

    class Meta:
        ordering = ['genreName']

    def __str__(self):
        return self.genreName


class Metadata(models.Model):
    metadataName = models.CharField(max_length=100)
    metadataDescription = models.TextField(blank=True)

    class Meta:
        ordering = ['metadataName']

    def __str__(self):
        return self.metadataName


class Track(models.Model):
    trackName = models.CharField(max_length=100)
    trackDescription = models.TextField(blank=True)
    trackAudio = models.TextField()
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='tracks')
    genres = models.ManyToManyField(Genre, related_name='genres')
    needs = models.ManyToManyField(Need, related_name='needs')
    metadata = models.ManyToManyField(Metadata, related_name='metadata')
    album = models.ForeignKey(
        Album, on_delete=models.CASCADE, related_name='tracks', blank=True, null=True)

    class Meta:
        ordering = ['trackName']

    def __str__(self):
        return self.trackName


class Collab(models.Model):
    users = models.ManyToManyField(User, related_name='collabs')
    tracks = models.ManyToManyField(Track, related_name='collabs')
