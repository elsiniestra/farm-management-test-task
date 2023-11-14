"""FakeDataWebService URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
"""
from django.urls import include, path

urlpatterns = [
    path("api/v1/", include("src.apps.urls")),
]
