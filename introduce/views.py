from django.shortcuts import render
from django.http import Http404
from django.template.loader import get_template
from django.template import TemplateDoesNotExist

# Render an introduce page by its template name (without extension)
def read_page(request, page):
    template_path = f'introduce/{page}.html'
    return render(request, template_path)

