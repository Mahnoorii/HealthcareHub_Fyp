import re

def extract_values(text):

    # 🔹 Clean OCR text
    text = text.replace("\n", " ").replace(",", " ")

    # 🔹 Fix broken numbers like "0 . 9" → "0.9"
    text = re.sub(r'(\d)\s*\.\s*(\d)', r'\1.\2', text)

    # 🔹 Debug (optional)
    # print("CLEANED TEXT:", text)

    def get_val(patterns):
        for pattern in patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return float(match.group(1))
        return None

    # ✅ TSH
    TSH = get_val([
        r'TSH\s*[:=-]?\s*(\d+\.?\d*)',
        r'(\d+\.?\d*)\s*TSH'
    ])

    # ✅ T3
    T3 = get_val([
        r'\bT3\b\s*[:=-]?\s*(\d+\.?\d*)',
        r'(\d+\.?\d*)\s*T3',
        r'(\d+\.?\d*)T3'
    ])

    # ✅ TT4 / T4
    TT4 = get_val([
        r'\bTT4\b\s*[:=-]?\s*(\d+\.?\d*)',
        r'\bT4\b\s*[:=-]?\s*(\d+\.?\d*)',
        r'(\d+\.?\d*)\s*T4',
        r'(\d+\.?\d*)T4'
    ])

    # ✅ FTI (optional)
    FTI = get_val([
        r'\bFTI\b\s*[:=-]?\s*(\d+\.?\d*)',
        r'(\d+\.?\d*)\s*FTI'
    ])

    return TSH, T3, TT4, FTI