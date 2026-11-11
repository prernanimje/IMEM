import re

file_path = r'f:\IMEM\Indian Market\src\data\companyData.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

images_map = {
    'mt-helpline': [
        '/events/mt-helpline-1.jpg',
        '/events/mt-helpline-showcase.jpg',
        '/events/mt-helpline-photo1.jpeg'
    ],
    'meg-scholars': [
        '/events/meg-scholars-main.jpeg',
        '/events/meg-scholars-photo1.jpeg',
        '/events/meg-scholars-photo2.jpeg',
        '/events/meg-scholars-photo3.jpeg',
        '/events/meg-scholars-photo4.jpeg',
        '/events/meg-scholars-photo5.jpeg',
        '/events/meg-scholars-photo6.jpeg',
        '/events/meg-scholars-photo7.jpeg',
        '/events/meg-scholars-showcase.jpg'
    ],
    'sony-yay-break-time': [
        '/events/sony-yay-break-time-main.jpeg',
        '/events/sony-yay-break-time-photo1.jpeg',
        '/events/sony-yay-break-time-photo2.jpeg',
        '/events/sony-yay-break-time-photo3.jpeg',
        '/events/sony-yay-break-time-photo4.jpeg',
        '/events/sony-yay-break-time-photo5.jpeg',
        '/events/sony-yay-break-time-showcase.jpg'
    ],
    'toi-icons-education': [
        '/events/toi-icons-education-main.jpeg',
        '/events/toi-icons-education-photo1.jpeg',
        '/events/toi-icons-education-photo2.jpeg',
        '/events/toi-icons-education-photo3.jpeg',
        '/events/toi-icons-education-photo4.jpeg',
        '/events/toi-icons-education-photo5.jpeg',
        '/events/toi-icons-education-showcase.jpg'
    ],
    'toi-icons-healthcare': [
        '/events/toi-icons-healthcare-main.jpeg',
        '/events/toi-icons-healthcare-photo1.jpeg',
        '/events/toi-icons-healthcare-photo2.jpeg',
        '/events/toi-icons-healthcare-photo3.jpeg',
        '/events/toi-icons-healthcare-photo4.jpeg',
        '/events/toi-icons-healthcare-photo5.jpeg',
        '/events/toi-icons-healthcare-photo6.jpeg',
        '/events/toi-icons-healthcare-showcase.jpg'
    ],
    'mt-plant-campus': [
        '/events/mt-plant-campus-main.jpeg',
        '/events/mt-plant-campus-photo1.jpeg',
        '/events/mt-plant-campus-photo2.jpeg',
        '/events/mt-plant-campus-photo3.jpeg',
        '/events/mt-plant-campus-photo4.jpeg',
        '/events/mt-plant-campus-showcase.jpg'
    ],
    'pentel-write-and-shine': [
        '/events/pentel-write-and-shine-main.jpeg',
        '/events/pentel-write-and-shine-photo1.jpeg',
        '/events/pentel-write-and-shine-photo2.jpeg',
        '/events/pentel-write-and-shine-photo3.jpeg',
        '/events/pentel-write-and-shine-photo4.jpeg',
        '/events/pentel-write-and-shine-photo5.jpeg',
        '/events/pentel-write-and-shine-showcase.jpg'
    ],
    'smart-bazaar-cooking': [
        '/events/smart-bazaar-cooking-main.jpeg',
        '/events/smart-bazaar-cooking-photo1.jpeg',
        '/events/smart-bazaar-cooking-photo2.jpeg',
        '/events/smart-bazaar-cooking-photo3.jpeg',
        '/events/smart-bazaar-cooking-photo4.jpeg',
        '/events/smart-bazaar-cooking-photo5.jpeg',
        '/events/smart-bazaar-cooking-photo6.jpeg',
        '/events/smart-bazaar-cooking-showcase.jpg'
    ],
    'times-power-women': [
        '/events/times-power-women-main.jpeg',
        '/events/times-power-women-photo1.jpeg',
        '/events/times-power-women-photo2.jpeg',
        '/events/times-power-women-photo3.jpeg',
        '/events/times-power-women-showcase.jpg'
    ],
    'sony-liv-qoty': [
        '/events/sony-liv-qoty-main.jpeg',
        '/events/sony-liv-qoty-photo1.jpeg',
        '/events/sony-liv-qoty-photo2.jpeg',
        '/events/sony-liv-qoty-photo3.jpeg',
        '/events/sony-liv-qoty-showcase.jpg'
    ],
    'classmate-learning': [
        '/events/classmate-learning-main.jpeg',
        '/events/classmate-learning-photo1.jpeg',
        '/events/classmate-learning-photo2.jpeg',
        '/events/classmate-learning-photo3.jpeg',
        '/events/classmate-learning-photo4.jpeg',
        '/events/classmate-learning-photo5.jpeg',
        '/events/classmate-learning-showcase.jpg'
    ],
    'mt-community-outreach': [
        '/events/mt-community-outreach-main.jpeg',
        '/events/mt-community-outreach-photo1.jpeg',
        '/events/mt-community-outreach-photo2.jpeg',
        '/events/mt-community-outreach-photo3.jpeg',
        '/events/mt-community-outreach-photo4.jpeg',
        '/events/mt-community-outreach-photo5.jpeg',
        '/events/mt-community-outreach-showcase.jpg'
    ],
    'spell-bee-spellionaire': [
        '/events/spell-bee-spellionaire-main.jpeg',
        '/events/spell-bee-spellionaire-photo1.jpeg',
        '/events/spell-bee-spellionaire-photo2.jpeg',
        '/events/spell-bee-spellionaire-photo3.jpeg',
        '/events/spell-bee-spellionaire-photo4.jpeg',
        '/events/spell-bee-spellionaire-photo5.jpeg',
        '/events/spell-bee-spellionaire-photo6.jpeg',
        '/events/spell-bee-spellionaire-showcase.jpg'
    ],
    'dell-aarambh': [
        '/events/dell-aarambh-main.jpeg',
        '/events/dell-aarambh-photo1.jpeg',
        '/events/dell-aarambh-photo2.jpeg',
        '/events/dell-aarambh-photo3.jpeg',
        '/events/dell-aarambh-photo4.jpeg',
        '/events/dell-aarambh-photo5.jpeg',
        '/events/dell-aarambh-showcase.jpg'
    ],
    'power-brands-nashik': [
        '/events/power-brands-nashik-main.jpeg',
        '/events/power-brands-nashik-photo1.jpeg',
        '/events/power-brands-nashik-photo2.jpeg',
        '/events/power-brands-nashik-photo3.jpeg',
        '/events/power-brands-nashik-photo4.jpeg',
        '/events/power-brands-nashik-showcase.jpg'
    ],
    'nbt-help-a-star': [
        '/events/nbt-help-a-star-main.jpeg',
        '/events/nbt-help-a-star-photo1.jpeg',
        '/events/nbt-help-a-star-photo2.jpeg',
        '/events/nbt-help-a-star-photo3.jpeg',
        '/events/nbt-help-a-star-showcase.jpg'
    ],
    'times-of-yoga': [
        '/events/times-of-yoga-main.jpeg',
        '/events/times-of-yoga-photo1.jpeg',
        '/events/times-of-yoga-photo2.jpeg',
        '/events/times-of-yoga-photo3.jpeg',
        '/events/times-of-yoga-photo4.jpeg',
        '/events/times-of-yoga-photo5.jpeg',
        '/events/times-of-yoga-photo6.jpeg',
        '/events/times-of-yoga-showcase.jpg'
    ],
    'akshdeep-vision': [
        '/events/akshdeep-vision-main.jpeg',
        '/events/akshdeep-vision-photo1.jpeg',
        '/events/akshdeep-vision-photo2.jpeg',
        '/events/akshdeep-vision-photo3.jpeg',
        '/events/akshdeep-vision-photo4.jpeg',
        '/events/akshdeep-vision-photo5.jpeg',
        '/events/akshdeep-vision-photo6.jpeg',
        '/events/akshdeep-vision-showcase.jpg'
    ],
    'kya-zamana-tha': [
        '/events/kya-zamana-tha-main.jpeg',
        '/events/kya-zamana-tha-photo1.jpeg',
        '/events/kya-zamana-tha-photo2.jpeg',
        '/events/kya-zamana-tha-photo3.jpeg',
        '/events/kya-zamana-tha-photo4.jpeg',
        '/events/kya-zamana-tha-photo5.jpeg',
        '/events/kya-zamana-tha-photo6.jpeg',
        '/events/kya-zamana-tha-photo7.jpeg',
        '/events/kya-zamana-tha-photo8.jpeg',
        '/events/kya-zamana-tha-photo9.jpeg',
        '/events/kya-zamana-tha-showcase.jpg'
    ]
}

# Replace mt-helpline-main.jpeg with mt-helpline-1.jpg
content = content.replace('image: "/events/mt-helpline-main.jpeg"', 'image: "/events/mt-helpline-1.jpg"')

for project_id, imgs in images_map.items():
    formatted_imgs = ',\n    images: [\n' + ',\n'.join([f'      "{img}"' for img in imgs]) + '\n    ]'
    pattern = rf'(id:\s*"{project_id}"[\s\S]*?)(image:\s*"[^"]+")'
    def repl(m):
        return m.group(1) + m.group(2) + formatted_imgs
    content = re.sub(pattern, repl, content, count=1)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('companyData.ts updated successfully with images arrays!')
