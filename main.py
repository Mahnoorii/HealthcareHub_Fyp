from ocr_extract import extract_text
from utils import extract_values
from predict import predict_thyroid
import json
import sys

def get_advice(prediction):
    if prediction == "Hypothyroid":
        return "Levothyroxine,Liothyronine "
    elif prediction == "Hyperthyroid":
        return "Methimazole,Carbimazole,Propylthiouracil,Propranolol."
    else:
        return "Normal condition. Maintain a healthy lifestyle."

def process(pdf_path):
    try:
        # 🔹 Step 1: OCR
        text = extract_text(pdf_path)

        # 🔥 DEBUG (run once)
        # print("OCR TEXT:\n", text)

        # 🔹 Step 2: Extract values
        TSH, T3, TT4, FTI = extract_values(text)

        # ❌ Required values check
        if None in [TSH, T3, TT4]:
            print(json.dumps({
                "error": "Could not extract required values",
                "values": {
                    "TSH": TSH,
                    "T3": T3,
                    "TT4": TT4,
                    "FTI": FTI
                }
            }))
            return

        # ✅ Handle missing FTI
        if FTI is None:
            FTI = 0

        # 🔹 Step 3: Prediction
        prediction = predict_thyroid(TSH, T3, TT4, FTI)

        # 🔹 Step 4: Advice
        advice = get_advice(prediction)

        # 🔹 Final Output
        result = {
            "values": {
                "TSH": TSH,
                "T3": T3,
                "TT4": TT4,
                "FTI": FTI
            },
            "prediction": prediction,
            "advice": advice
        }

        print(json.dumps(result))

    except Exception as e:
        print(json.dumps({"error": str(e)}))


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "Provide PDF path"}))
    else:
        process(sys.argv[1])