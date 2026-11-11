import fitz
import os

pdf_path = r'C:\Users\PRERNA NIMJE\Downloads\Indian_Market_Events_Company_Profile.pdf'
doc = fitz.open(pdf_path)

out_dir = r'f:\IMEM\Indian Market\public\events'

events_meta = [
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

for pno, event_id in events_meta:
    page = doc[pno]
    img_idx = 0
    print(f"=== {event_id} (Page {pno+1}) ===")
    for img in page.get_images():
        xref = img[0]
        rects = page.get_image_rects(xref)
        if not rects:
            continue
        r = rects[0]
        # Photo area is x0 > 450
        if r.x0 > 450:
            b = doc.extract_image(xref)
            w, h = b['width'], b['height']
            if w > 100 and h > 100:
                img_idx += 1
                fname = f"{event_id}-photo{img_idx}.{b['ext']}"
                fpath = os.path.join(out_dir, fname)
                with open(fpath, "wb") as f:
                    f.write(b['image'])
                print(f"  [{img_idx}] {fname} ({w}x{h}, rect={r})")

print("All individual photos extracted!")
