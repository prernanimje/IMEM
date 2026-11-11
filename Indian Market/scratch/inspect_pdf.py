import fitz
import os

pdf_path = r'C:\Users\PRERNA NIMJE\Downloads\Indian_Market_Events_Company_Profile.pdf'
doc = fitz.open(pdf_path)

out_dir = r'f:\IMEM\Indian Market\public\events'
os.makedirs(out_dir, exist_ok=True)

for pno in range(9, 28): # Pages 10 to 28
    page = doc[pno]
    print(f"=== Page {pno+1} ===")
    images = page.get_images()
    for img in images:
        xref = img[0]
        rects = page.get_image_rects(xref)
        b = doc.extract_image(xref)
        w, h = b['width'], b['height']
        if w > 100 and h > 100:
            print(f"  xref {xref}: {b['ext']} {w}x{h}, rects={rects}")
