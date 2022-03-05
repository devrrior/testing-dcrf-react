from django.urls import path
from .views import getRoutes, MyTokenObtainPairView, ListMessagesAPIView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    # path('', UserApiView.as_view(), name='userapiview'),
    path('', getRoutes),
    path('messages/', ListMessagesAPIView.as_view(), name='list_messages'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
