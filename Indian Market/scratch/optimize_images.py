import os
from PIL import Image

PUBLIC_DIR = r"f:\IMEM\Indian Market\public"

def optimize():
    total_before = 0
    total_after = 0
    optimized_count = 0

    for root, dirs, files in os.walk(PUBLIC_DIR):
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext not in ['.jpg', '.jpeg', '.png']:
                continue

            filepath = os.path.join(root, f)
            sz_before = os.path.getsize(filepath)
            total_before += sz_before

            try:
                with Image.open(filepath) as img:
                    orig_w, orig_h = img.size
                    is_logo = 'logos' in root.lower()

                    if is_logo:
                        # Max dimension 600px for logos
                        max_dim = 600
                    else:
                        # Max dimension 1400px for photos (super crisp for 1080p and retina cards)
                        max_dim = 1400

                    w, h = orig_w, orig_h
                    if max(w, h) > max_dim:
                        scale = max_dim / max(w, h)
                        w = int(w * scale)
                        h = int(h * scale)
                        img = img.resize((w, h), Image.Resampling.LANCZOS)

                    if ext in ['.jpg', '.jpeg']:
                        # Save progressive JPEG
                        img = img.convert('RGB')
                        img.save(filepath, 'JPEG', quality=80, optimize=True, progressive=True)
                    elif ext == '.png':
                        # Check alpha channel
                        has_alpha = False
                        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                            alpha = img.convert('RGBA').split()[-1]
                            # Check if really has non-255 pixels
                            min_a, max_a = alpha.getextrema()
                            if min_a < 255:
                                has_alpha = True

                        if not has_alpha and not is_logo:
                            # Photo saved as PNG with no alpha: save as RGB with PNG optimize
                            # Or quantize to 256 colors
                            img_rgb = img.convert('RGB')
                            # Check if saving as quantized PNG preserves quality
                            q = img_rgb.quantize(colors=256, method=Image.Resampling.LANCZOS)
                            q.save(filepath, 'PNG', optimize=True)
                        else:
                            img.save(filepath, 'PNG', optimize=True)

                sz_after = os.path.getsize(filepath)
                total_after += sz_after
                optimized_count += 1
                if sz_before - sz_after > 100 * 1024:
                    print(f"Compressed {f}: {sz_before/1024:.0f}KB -> {sz_after/1024:.0f}KB")
            except Exception as e:
                print(f"Error on {f}: {e}")
                total_after += sz_before

    print("\n--- SUMMARY ---")
    print(f"Files processed: {optimized_count}")
    print(f"Size before: {total_before / (1024*1024):.2f} MB")
    print(f"Size after:  {total_after / (1024*1024):.2f} MB")
    print(f"Saved:       {(total_before - total_after) / (1024*1024):.2f} MB ({(1 - total_after/total_before)*100:.1f}% reduction)")

if __name__ == '__main__':
    optimize()
