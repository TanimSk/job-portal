from applicant.serilaizers import CustomRegistrationSerializer, ApplicantSerializer
from applicant.models import Applicant
from dj_rest_auth.registration.views import RegisterView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# Agent Registration
class ApplicantRegistrationView(RegisterView):
    serializer_class = CustomRegistrationSerializer


class ApplicationAPI(APIView):
    serializer_class = ...
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None, *args, **kwargs): ...


class ProfileAPI(APIView):
    serializer_class = ApplicantSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None, *args, **kwargs):
        instance = Applicant.objects.get(applicant=request.user)
        return Response(self.serializer_class(instance).data)

    def put(self, request, format=None, *args, **kwargs):
        serialized_data = self.serializer_class(data=request.data)

        if serialized_data.is_valid(raise_exception=True):
            Applicant.objects.filter(applicant=request.user).update(**serialized_data.data)

        return Response({"status": "successful"})
