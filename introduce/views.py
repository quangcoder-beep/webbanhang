from django.shortcuts import render
from django.http import Http404
from django.template.loader import get_template
from django.template import TemplateDoesNotExist

# Render an introduce page by its template name (without extension)
def demo(request, demo):
    return render(request, 'shop/contenbody/home/bodyhome.html', {'demo': demo, 'page': 1})




