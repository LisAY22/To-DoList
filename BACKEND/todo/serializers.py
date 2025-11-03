from rest_framework import serializers
from todo.models import TodoItem

# Serializers define the API representation.
# Translator that converts the Django database model into JSON for the API.
class TodoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoItem
        fields = ['id', 'title', 'description', 'completed', 'created_at', 'due_date']