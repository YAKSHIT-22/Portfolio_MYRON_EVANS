from django.db import models

from provider.models import Provider


# Create your models here.
class Product(models.Model):
	SIZE_CHOICES = {
		"": "Select Size",
		"S": "Small",
		"M": "Medium",
		"L": "Large",
		"XL": "Extra Large",
		"XXL": "Extra Extra Large",
	}

	name = models.CharField(max_length=200)
	type = models.CharField(max_length=200)
	size = models.CharField(choices=SIZE_CHOICES)
	price = models.FloatField()
	description = models.TextField()
	count = models.IntegerField()

	provider = models.ForeignKey(Provider, on_delete=models.CASCADE, null=True, blank=True)
	
	def __str__(self):
		return self.name


def set_image_path(instance, filename):
	image_count = ProductImage.objects.filter(product=instance.product).count()

	file_type = filename.split(".")[-1]
	refactored_filename = f'{image_count + 1}.{file_type}'
	print(refactored_filename)
	return f"product_images/{instance.product.id}/{instance.product.name}/{refactored_filename}"


class ProductImage(models.Model):
	product = models.ForeignKey(Product, on_delete=models.CASCADE)
	image = models.ImageField(upload_to=set_image_path)

	def __str__(self):
		return self.image.name
