from todo.models import TodoItem
from rest_framework import viewsets
from todo.serializers import TodoItemSerializer

# ViewSets define the view behavior.
# Shortcut from Django Rest Framework (DRF) that automatically builds all the API endpoints
class TodoItemViewSet(viewsets.ModelViewSet):
    # Tells the viewset what data to work with and how to serialize it
    queryset = TodoItem.objects.all()
    serializer_class = TodoItemSerializer