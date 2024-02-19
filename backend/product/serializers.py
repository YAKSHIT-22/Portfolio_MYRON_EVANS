from rest_framework import serializers
from .models import Product
from provider.serializers import ProviderSerializer


class ProductSerializer(serializers.ModelSerializer):
	provider = serializers.SerializerMethodField()

	@staticmethod
	def get_provider(instance):
		return ProviderSerializer(instance.provider).data

	class Meta:
		model = Product
		fields = '__all__'
