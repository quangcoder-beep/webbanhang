from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),
    
    # Trang chủ
    path('', views.bodyhome, name='home'),
    
    # Các URL cụ thể
    path('phimdangchieu/', views.phimdangchieu, name='phimdangchieu'),
    path('phimdangchieu/<str:s>/', views.phimdangchieu, name='phimdangchieu'),

    path('phimle/', views.phimle, name='phimle'),
    path('phimle/<str:s>/', views.phimle, name='phimle'),
    
    path('gioithieu/', views.gioithieu, name='gioithieu'),
    path('gioithieu/<str:s>/', views.gioithieu, name='gioithieu'),
    
    # Các URL có tham số (để cuối cùng)
    path('<int:page>/', views.bodyhome, name='home'),
    path('<str:s>/', views.bodyhome, name='home'),
]