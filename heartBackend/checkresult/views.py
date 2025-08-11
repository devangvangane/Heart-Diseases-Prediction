from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from .models import Patient

import os
from django.conf import settings

csv_path = os.path.join(settings.BASE_DIR, 'heartBackend', 'data', 'heart.csv')
heart_data = pd.read_csv(csv_path)
# print(heart_data.head())

# # print(heart_data.info())

# print(heart_data.isna.sum())
# count_null_or_empty_rows = ((heart_data.isnull()) | (heart_data.eq(''))).any(axis=1).sum()
# print(count_null_or_empty_rows)

x = heart_data.drop(columns='condition',axis=1)
y = heart_data['condition']



x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, stratify=y,random_state=2)

model = LogisticRegression()
model.fit(x_train, y_train)



# Create your views here.
@csrf_exempt
def checkresult(request):
    if (request.method == 'POST'):
        try:
            data = json.loads(request.body)
            name = data.get('name')
            age=int(data.get('age'))
            mobile=data.get('mobile')
            address=data.get('address')
            sex = int(data.get('sex'))
            cp = int(data.get('cp'))
            trestbps = int(data.get('trestbps'))
            chol = int(data.get('chol'))
            fbs = int(data.get('fbs'))
            restecg = int(data.get('restecg'))
            thalach = int(data.get('thalach'))
            exang = int(data.get('exang'))
            oldpeak = float(data.get('oldpeak'))
            slope = int(data.get('slope'))
            ca = int(data.get('ca'))
            thal = int(data.get('thal'))

            # result = model.predict([[age, sex, cp, trestbps, chol, fbs, restecg,thalach, exang, oldpeak, slope, ca, thal]], columns=x.columns)

            input_data = pd.DataFrame(
                [[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]],
                columns=x.columns
            )
            result = model.predict(input_data)
            print(result[0])
            patient = Patient.objects.create(
                name=name,
                age=age,
                mobile=mobile,
                address=address,
                sex=sex,
                cp=cp,
                trestbps=trestbps,
                chol=chol,
                fbs=fbs,
                restecg=restecg,
                thalach=thalach,
                exang=exang,
                oldpeak=oldpeak,
                slope=slope,
                ca=ca,
                thal=thal,
                result=result[0]
            )
            print(patient)
            return JsonResponse({'result':int(result[0])})
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

