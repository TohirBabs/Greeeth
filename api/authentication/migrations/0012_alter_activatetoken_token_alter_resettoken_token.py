# Generated by Django 4.0.4 on 2022-04-28 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0011_alter_activatetoken_token_alter_resettoken_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activatetoken',
            name='token',
            field=models.PositiveIntegerField(default=502989),
        ),
        migrations.AlterField(
            model_name='resettoken',
            name='token',
            field=models.PositiveIntegerField(default=581583),
        ),
    ]
