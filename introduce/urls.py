from django.urls import path
from . import views

urlpatterns = [
    # introduce/<page>.html -> render introduce/<page>.html template
    path('<str:page>', views.read_page, name='introduce_read_page'),
]               