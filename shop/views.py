from django.shortcuts import render

# Create your views here.
def bodyhome(request):
    return render(request, 'shop/bodyhome.html')
def login(request):
    return render(request, 'account/login.html')
def logup(request):
    return render(request, 'account/lopup.html')