from django.shortcuts import render

# Create your views here.
def bodyhome(request, page=1, s=""):
    return render(request, 'shop/contenbody/home/bodyhome.html', {"page": page, "s": s})

def login(request):
    return render(request, 'account/login.html')

def logup(request):
    return render(request, 'account/lopup.html')

def phimdangchieu(request, s=""):
    return render(request, 'shop/contenbody/phimdangchieu/bodyhome_phimdangchieu.html', {"s": s})

def phimle(request, s=""):
    return render(request, 'shop/contenbody/phimle/bodyhome_phimle.html', {"s": s})

def gioithieu(request, s=""):
    return render(request, 'shop/contenbody/gioithieu/gioithieu.html', {"s": s})
