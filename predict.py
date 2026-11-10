import os

import joblib
model_path = os.path.join(os.path.dirname(__file__), "thyroid_model.pkl")
model = joblib.load(model_path)
def predict_thyroid(TSH, T3, TT4, FTI):
    result = model.predict([[TSH, T3, TT4, FTI]])

    if result[0] == 0:
        return "Normal"
    elif result[0] == 1:
        return "Hypothyroid"
    else:
        return "Hyperthyroid"