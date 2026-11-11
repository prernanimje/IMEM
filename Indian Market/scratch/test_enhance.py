import os
from PIL import Image, ImageFilter, ImageEnhance

img_path = r'f:\IMEM\Indian Market\public\photos\hel1.jpg'
with Image.open(img_path) as im:
    orig_size = im.size
    print(f"Original size: {orig_size}")
    
    # 2.5x Lanczos upscale
    scale = 2.5
    new_size = (int(orig_size[0] * scale), int(orig_size[1] * scale))
    upscaled = im.resize(new_size, Image.Resampling.LANCZOS)
    
    # Unsharp mask for crisp edges
    sharpened = upscaled.filter(ImageFilter.UnsharpMask(radius=1.5, percent=130, threshold=2))
    
    # Slight contrast enhance
    enhancer = ImageEnhance.Contrast(sharpened)
    enhanced = enhancer.enhance(1.05)
    
    test_out = r'f:\IMEM\Indian Market\scratch\test_hel1_enhanced.jpg'
    enhanced.save(test_out, quality=95, optimize=True)
    print(f"Enhanced saved to {test_out}: {new_size}")
