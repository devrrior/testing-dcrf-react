from rest_framework.response import Response
# from rest_framework.views import APIView
from rest_framework.decorators import api_view

# class UserApiView(APIView):
#     def get(self, request):
#         person = {
#             'name': 'Fernando',
#             'age': 18,
#         }
#         return Response(person)
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]
    return Response(routes)
