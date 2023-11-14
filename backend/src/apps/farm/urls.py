from typing import List

from django.urls import URLPattern, include, path
from rest_framework import routers

from .views import AnimalViewSet

router = routers.DefaultRouter()
router.register(r"animals", AnimalViewSet)


urlpatterns: List[URLPattern] = [
    path("", include(router.urls)),
]
