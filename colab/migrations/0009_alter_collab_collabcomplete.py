# Generated by Django 4.0.4 on 2022-05-06 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('colab', '0008_collab_collabcomplete_user_usercollabcount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collab',
            name='collabComplete',
            field=models.BooleanField(default=False),
        ),
    ]
