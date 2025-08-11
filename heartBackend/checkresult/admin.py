from django.contrib import admin
from .models import Patient

@admin.register(Patient)
class PatientsAdmin(admin.ModelAdmin):
    list_display = (
        "name", 
        "age", 
        "mobile", 
        "sex", 
        "cp", 
        "trestbps", 
        "chol", 
        "fbs", 
        "restecg",
        "thalach", 
        "exang", 
        "oldpeak", 
        "slope", 
        "ca", 
        "thal", 
        "result"
    )
    list_filter = ("sex", "cp", "fbs", "restecg", "exang", "slope", "ca", "thal", "result")
    search_fields = ("name", "mobile", "address")
