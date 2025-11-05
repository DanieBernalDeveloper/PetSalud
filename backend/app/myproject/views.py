from django.http import JsonResponse
from myproject.models import Product

def respuesta_exitosa(request):
    return HttpResponse("Carechimba")

def get_products(request):
    if request.method == 'GET':
        all_entries = list(Product.objects.values())
        return JsonResponse({'products': all_entries}, status=200)


