from django.shortcuts import render

# Create your views here.
def bodyhome(request, page = 1):
    return render(request, 'shop/bodyhome.html', {"page": page})
def login(request):
    return render(request, 'account/login.html')
def logup(request):
    return render(request, 'account/lopup.html')