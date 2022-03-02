from rest_framework.response import Response
from rest_framework.views import APIView

class UserApiView(APIView):
    def get(self, request):
        person = {
            'name': 'Fernando',
            'age': 18,
        }
        return Response(person)