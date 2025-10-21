from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.bodyhome, name='home'),
    path('<int:page>/', views.bodyhome, name='home'),
    path('login/', views.login, name='login'),
    path('logup/', views.logup, name='logup'),
]