from django.shortcuts import render

# Create your views here.
def bodyhome(request):
    return render(request, 'shop/bodyhome.html')
