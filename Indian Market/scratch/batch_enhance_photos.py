import os
from PIL import Image, ImageFilter, ImageEnhance

photo_dir = r'f:\IMEM\Indian Market\public\photos'
files = sorted(os.listdir(photo_dir))
print(f"Starting batch enhancement of {len(files)} photos in {photo_dir}...")

processed = 0
for f in files:
    file_path = os.path.join(photo_dir, f)
    if not os.path.isfile(file_path):
        continue
    
    ext = os.path.splitext(f)[1].lower()
    if ext not in ['.jpg', '.jpeg', '.png', '.webp']:
        continue

    try:
        with Image.open(file_path) as im:
            orig_w, orig_h = im.size
            orig_mode = im.mode

            # We want minimum dimension to be at least 850px, or 3.2x original scale
            scale = max(3.0, 850.0 / min(orig_w, orig_h))
            new_w, new_h = int(orig_w * scale), int(orig_h * scale)

            # Cap max dimension to 1800px to maintain fast browser load speeds
            if max(new_w, new_h) > 1800:
                scale = 1800.0 / max(orig_w, orig_h)
                new_w, new_h = int(orig_w * scale), int(orig_h * scale)

            # High quality Lanczos resampling
            upscaled = im.resize((new_w, new_h), Image.Resampling.LANCZOS)

            # Process according to image mode
            if orig_mode in ['RGBA', 'LA']:
                # For images with alpha channel, sharpen RGB without corrupting alpha
                alpha = upscaled.split()[-1]
                rgb = upscaled.convert('RGB')
                sharpened = rgb.filter(ImageFilter.UnsharpMask(radius=1.5, percent=140, threshold=2))
                contrasted = ImageEnhance.Contrast(sharpened).enhance(1.03)
                vibrant = ImageEnhance.Color(contrasted).enhance(1.04)
                sharp = ImageEnhance.Sharpness(vibrant).enhance(1.10)
                sharp.putalpha(alpha)
                final_img = sharp
            else:
                rgb = upscaled.convert('RGB') if orig_mode != 'RGB' else upscaled
                sharpened = rgb.filter(ImageFilter.UnsharpMask(radius=1.5, percent=140, threshold=2))
                contrasted = ImageEnhance.Contrast(sharpened).enhance(1.03)
                vibrant = ImageEnhance.Color(contrasted).enhance(1.04)
                sharp = ImageEnhance.Sharpness(vibrant).enhance(1.10)
                final_img = sharp

            # Save back with maximum quality and no chroma sub-sampling
            if ext in ['.jpg', '.jpeg']:
                final_img.convert('RGB').save(
                    file_path,
                    'JPEG',
                    quality=96,
                    subsampling=0,
                    optimize=True
                )
            elif ext == '.png':
                final_img.save(file_path, 'PNG', optimize=True)
            elif ext == '.webp':
                final_img.save(file_path, 'WEBP', quality=95, method=6)

            processed += 1
            print(f"[{processed}/{len(files)}] {f}: {orig_w}x{orig_h} -> {new_w}x{new_h} (scale {scale:.2f})")

    except Exception as e:
        print(f"Error processing {f}: {e}")

print(f"\nBatch enhancement complete! Successfully enhanced {processed} photos.")
