from dj_rest_auth.registration.views import RegisterView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from company.serializers import (
    CustomRegistrationSerializer,
    JobPostSerializer,
    CompanySerializer,
)
from company.models import JobPost, Company


# Agent Registration
class CompanyRegistrationView(RegisterView):
    serializer_class = CustomRegistrationSerializer


class ProfileAPI(APIView):
    serializer_class = CompanySerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None, *args, **kwargs):
        instance = Company.objects.get(company=request.user)
        return Response(self.serializer_class(instance).data)

    def put(self, request, format=None, *args, **kwargs):
        serialized_data = self.serializer_class(data=request.data)

        if serialized_data.is_valid(raise_exception=True):
            Company.objects.filter(company=request.user).update(**serialized_data.data)

        return Response({"status": "successful"})


class JobPostAPI(APIView):
    serializer_class = JobPostSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None, *args, **kwargs):
        serialized_data = self.serializer_class(data=request.data)

        if serialized_data.is_valid(raise_exception=True):
            JobPost.objects.create(**serialized_data.data)

        return Response({"status": "successfully created"})

    def get(self, request, format=None, *args, **kwargs):
        instance = JobPost.objects.all()
        serialized_data = self.serializer_class(instance, many=True)
        return Response(serialized_data.data)

    def put(self, request, post_id=None, format=None, *args, **kwargs):
        serialized_data = self.serializer_class(data=request.data)

        if serialized_data.is_valid(raise_exception=True):
            JobPost.objects.filter(id=post_id).update(**serialized_data.data)
        return Response({"status": "successfully updated"})

    def delete(self, request, post_id=None, format=None, *args, **kwargs):
        JobPost.objects.get(id=post_id).delete()
        return Response({"status": "successfully deleted"})
