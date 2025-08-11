from django.db import models

class Patient(models.Model):
    SEX_CHOICES = [
        (0, "Male"),
        (1, "Female"),
    ]

    CP_CHOICES = [
        (0, "Typical Angina"),
        (1, "Atypical Angina"),
        (2, "Non-anginal Pain"),
        (3, "Asymptomatic"),
    ]

    FBS_CHOICES = [
        (1, "Above 120 mg/dl (High)"),
        (0, "120 mg/dl or lower (Normal)"),
    ]

    RESTECG_CHOICES = [
        (0, "Normal"),
        (1, "ST-T wave abnormality"),
        (2, "Left ventricular hypertrophy"),
    ]

    EXANG_CHOICES = [
        (1, "Yes"),
        (0, "No"),
    ]

    SLOPE_CHOICES = [
        (0, "Upsloping"),
        (1, "Flat"),
        (2, "Downsloping"),
    ]

    THAL_CHOICES = [
        (0, "Normal"),
        (1, "Fixed defect"),
        (2, "Reversible defect"),
    ]

    RESULT_CHOICES = [
        (1, "Positive for Heart Disease"),
        (0, "Negative for Heart Disease"),
    ]

    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    mobile = models.CharField(max_length=15)
    address = models.TextField()
    sex = models.IntegerField(choices=SEX_CHOICES)
    cp = models.IntegerField(choices=CP_CHOICES)
    trestbps = models.PositiveIntegerField(help_text="Resting blood pressure (mm Hg)")
    chol = models.PositiveIntegerField(help_text="Cholesterol in mg/dl")
    fbs = models.IntegerField(choices=FBS_CHOICES)
    restecg = models.IntegerField(choices=RESTECG_CHOICES)
    thalach = models.PositiveIntegerField(help_text="Max heart rate achieved")
    exang = models.IntegerField(choices=EXANG_CHOICES)
    oldpeak = models.DecimalField(max_digits=4, decimal_places=1, help_text="ST depression")
    slope = models.IntegerField(choices=SLOPE_CHOICES)
    ca = models.IntegerField(help_text="Number of major vessels (0-3)")
    thal = models.IntegerField(choices=THAL_CHOICES)
    result = models.CharField(max_length=20, choices=RESULT_CHOICES, blank=True, null=True) 

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.age} yrs) {self.result}"
