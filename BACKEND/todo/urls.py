from rest_framework import routers
from todo.views import TodoItemViewSet

# Routers provide an easy way of automatically determining the URL conf.
# Creates the API URLs based on the ViewSet
def router_setup():
    router = routers.DefaultRouter()
    router.register(r'tasks', TodoItemViewSet)  # tasks endpoint
    return router