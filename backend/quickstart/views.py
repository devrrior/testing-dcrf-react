from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.decorators import api_view, permission_classes
from chat.models import Message

from quickstart.serializer import MessageSerializer

# class UserApiView(APIView):
#     def get(self, request):
#         person = {
#             'name': 'Fernando',
#             'age': 18,
#         }
#         return Response(person)
@api_view(['GET'])
def getRoutes(request):
    routes = ['/api/token', '/api/token/refresh']
    return Response(routes)


class ListMessagesAPIView(ListAPIView):
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated,]

    def get_queryset(self):
        user = self.request.user
        return user.author_messages.all()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
