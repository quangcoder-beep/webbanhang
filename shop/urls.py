from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', views.bodyhome, name='home'),
    path('<int:page>/', views.bodyhome, name='home'),
    path('<str:s>/', views.bodyhome, name='home'),
    path('phimdangchieu/', views.phimdangchieu, name='phimdangchieu'),
    path('phimdangchieu/<str:s>/', views.phimdangchieu, name='phimdangchieu'),
    path('phimle/', views.phimle, name='phimle'),
    path('phimle/<str:s>/', views.phimle, name='phimle'),
    path('gioithieu/', views.gioithieu, name='gioithieu'),
    path('gioithieu/<str:s>/', views.gioithieu, name='gioithieu'),
]