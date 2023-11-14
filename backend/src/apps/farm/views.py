from rest_framework import mixins, viewsets

from .models import Animal
from .serializers import AnimalSerializer


class AnimalViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer
