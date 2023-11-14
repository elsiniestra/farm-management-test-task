from typing import List

from django.urls import URLPattern, include, path

urlpatterns: List[URLPattern] = [
    path("farm/", include("src.apps.farm.urls")),
]
