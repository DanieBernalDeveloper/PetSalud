from django.db import models

class Product(models.Model):
    product_name = models.CharField(max_length=50)
    product_price = models.PositiveIntegerField()
    product_description = models.CharField(max_length=200)
    
    # def __str__(self):
    #     retrun  self.product_name