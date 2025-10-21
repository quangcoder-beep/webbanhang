from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.bodyhome, name='home'),
    path('<int:page>/', views.bodyhome, name='home'),
    path('phimdangchieu/', views.phimdangchieu, name='phimdangchieu'),
    path('phimle/', views.phimle, name='phimle'),
    path('login/', views.login, name='login'),
    path('logup/', views.logup, name='logup'),
]