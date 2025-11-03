from django.urls import path, include
from todo.urls import router_setup

urlpatterns = [
    path('', include(router_setup().urls)),
]
