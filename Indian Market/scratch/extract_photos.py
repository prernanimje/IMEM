import fitz
import os

pdf_path = r'C:\Users\PRERNA NIMJE\Downloads\Indian_Market_Events_Company_Profile.pdf'
doc = fitz.open(pdf_path)

out_dir = r'f:\IMEM\Indian Market\public\events'
os.makedirs(out_dir, exist_ok=True)

# Event mappings for pages 10 to 28 (0-indexed 9 to 27)
events = [
    (9, "mt-helpline"),
    (10, "meg-scholars"),
    (11, "sony-yay-break-time"),
    (12, "toi-icons-education"),
    (13, "toi-icons-healthcare"),
    (14, "mt-plant-campus"),
    (15, "pentel-write-and-shine"),
    (16, "smart-bazaar-cooking"),
    (17, "times-power-women"),
    (18, "sony-liv-qoty"),
    (19, "classmate-learning"),
    (20, "mt-community-outreach"),
    (21, "spell-bee-spellionaire"),
    (22, "dell-aarambh"),
    (23, "power-brands-nashik"),
    (24, "nbt-help-a-star"),
    (25, "times-of-yoga"),
    (26, "akshdeep-vision"),
    (27, "kya-zamana-tha")
]

for pno, event_id in events:
    page = doc[pno]
    
    # 1. Render the photo region (right side of the slide, x from 480 to 960, y from 0 to 540)
    # Using matrix 2.5x for high resolution
    zoom = 2.5
    mat = fitz.Matrix(zoom, zoom)
    
    # Crop to photo showcase area
    rect = fitz.Rect(480, 0, 960, 540)
    pix = page.get_pixmap(matrix=mat, clip=rect)
    showcase_path = os.path.join(out_dir, f"{event_id}-showcase.jpg")
    pix.save(showcase_path)
    print(f"Saved showcase for {event_id}: {pix.width}x{pix.height} -> {showcase_path}")

    # 2. Also extract the largest individual embedded photo from that page (if available)
    largest_img = None
    largest_size = 0
    for img in page.get_images():
        xref = img[0]
        rects = page.get_image_rects(xref)
        if not rects:
            continue
        r = rects[0]
        # Must be on the right half (photo area, x > 450)
        if r.x0 > 450:
            b = doc.extract_image(xref)
            sz = b['width'] * b['height']
            if sz > largest_size:
                largest_size = sz
                largest_img = b
    
    if largest_img:
        photo_path = os.path.join(out_dir, f"{event_id}-main.{largest_img['ext']}")
        with open(photo_path, "wb") as f:
            f.write(largest_img['image'])
        print(f"  Extracted largest photo for {event_id}: {largest_img['width']}x{largest_img['height']} -> {photo_path}")

print("Extraction complete!")
