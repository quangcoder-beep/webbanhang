from django.shortcuts import render

# Create your views here.
def bodyhome(request, page=1):
    return render(request, 'shop/contenbody/home/bodyhome.html', {"page": page})

def login(request):
    return render(request, 'account/login.html')

def logup(request):
    return render(request, 'account/lopup.html')

def phimdangchieu(request):
    return render(request, 'shop/contenbody/phimdangchieu/bodyhome_phimdangchieu.html')

def phimle(request):
    return render(request, 'shop/contenbody/phimle/bodyhome_phimle.html')

def gioithieu(request):
    return render(request, 'shop/contenbody/gioithieu/gioithieu.html')
