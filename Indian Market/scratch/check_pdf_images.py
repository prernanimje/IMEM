import fitz
import os

pdf_path = r'C:\Users\PRERNA NIMJE\Downloads\Indian_Market_Events_Company_Profile.pdf'
doc = fitz.open(pdf_path)

print(f"Total pages: {len(doc)}")
for pno in range(9, 28):
    page = doc[pno]
    rect = page.rect
    imgs = page.get_images()
    print(f"\n--- Page {pno+1}: page rect={rect} ---")
    for img in imgs:
        xref = img[0]
        rects = page.get_image_rects(xref)
        b = doc.extract_image(xref)
        print(f"  xref {xref}: {b['ext']} size={b['width']}x{b['height']}, rects={rects}")
