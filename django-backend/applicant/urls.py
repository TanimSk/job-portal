from django.urls import path, include
from applicant.views import (
    ApplicantRegistrationView,
    ProfileAPI
)

urlpatterns = [
    path(
        "registration/",
        ApplicantRegistrationView.as_view(),
        name="applicant_registration",
    ),
    path("profile/", ProfileAPI.as_view(), name="applicant_profile"),
]
