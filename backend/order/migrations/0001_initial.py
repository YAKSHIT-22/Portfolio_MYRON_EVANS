# Generated by Django 5.0.2 on 2024-02-29 11:55

import django.db.models.deletion
import django.db.models.expressions
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('product', '__first__'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('method', models.CharField(max_length=200)),
                ('state', models.CharField(choices=[('', 'Select State'), ('PENDING', 'Pending'), ('SUCCESS', 'Success'), ('FAILED', 'Failed')], max_length=200)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('delivery_charges', models.DecimalField(decimal_places=2, max_digits=10)),
                ('taxes', models.DecimalField(decimal_places=2, max_digits=10)),
                ('total_amount', models.GeneratedField(db_persist=True, expression=django.db.models.expressions.CombinedExpression(django.db.models.expressions.CombinedExpression(models.F('delivery_charges'), '+', models.F('taxes')), '+', models.F('amount')), output_field=models.DecimalField(decimal_places=2, max_digits=10))),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('product', models.ManyToManyField(related_name='order_items_set', to='product.product')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_paid', models.BooleanField(default=False)),
                ('is_delivered', models.BooleanField(default=False)),
                ('delivered_at', models.DateTimeField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('order_item', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='order.orderitem')),
                ('payment', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='order.payment')),
            ],
        ),
    ]