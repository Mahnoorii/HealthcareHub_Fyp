import pytesseract
from pdf2image import convert_from_path

# ADD THIS LINE 👇
pytesseract.pytesseract.tesseract_cmd = r"H:\program files\Tesseract-OCR\tesseract.exe"

def extract_text(pdf_path):
    images = convert_from_path(
        pdf_path,
        poppler_path=r"C:\Users\Usama\Downloads\poppler-25.12.0\Library\bin"
    )
    
    text = ""
    for img in images:
        text += pytesseract.image_to_string(img)

    return text