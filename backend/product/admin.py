from django.contrib import admin
from .models import Product, ProductImage


# Register your models here.
@admin.register(ProductImage)
class PoductImageAdmin(admin.ModelAdmin):
	list_display = ['product', 'image']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
	list_display = ['name', 'type', 'size', 'price', 'description', 'count', 'provider']
