import fitz, os
doc = fitz.open(r'C:\Users\PRERNA NIMJE\Downloads\Indian_Market_Events_Company_Profile.pdf')
out_dir = r'f:\IMEM\Indian Market\public\events\logos'
os.makedirs(out_dir, exist_ok=True)

for pno in [7, 8]:
    page = doc[pno]
    print(f"=== Page {pno+1} ===")
    for img in page.get_images():
        xref = img[0]
        b = doc.extract_image(xref)
        w, h = b['width'], b['height']
        ext = b['ext']
        if w > 50 and h > 30:
            fn = f"p{pno+1}_logo_{xref}.{ext}"
            with open(os.path.join(out_dir, fn), 'wb') as f:
                f.write(b['image'])
            print(f"  {fn} ({w}x{h})")
