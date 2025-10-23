from django.urls import path
from . import views

urlpatterns = [
    # introduce/<page>.html -> render introduce/<page>.html template
    path('<str:demo>', views.demo, name='demo'),
]               