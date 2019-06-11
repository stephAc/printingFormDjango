# Generated by Django 2.1.7 on 2019-06-11 11:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('printingForm', '0002_auto_20190507_1633'),
    ]

    operations = [
        migrations.RenameField(
            model_name='formular',
            old_name='office',
            new_name='officeName',
        ),
        migrations.RemoveField(
            model_name='formular',
            name='user',
        ),
        migrations.AddField(
            model_name='formular',
            name='email',
            field=models.EmailField(default=datetime.date(2019, 6, 11), max_length=254),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='formular',
            name='nom',
            field=models.CharField(default=datetime.date(2019, 6, 11), max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='formular',
            name='numero',
            field=models.CharField(default=datetime.date(2019, 6, 11), max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='formular',
            name='prenom',
            field=models.CharField(default=datetime.date(2019, 6, 11), max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='formular',
            name='file',
            field=models.FileField(null=True, upload_to=''),
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
