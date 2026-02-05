import { BackgroundTheme } from "./types";

export const BACKGROUND_THEMES: BackgroundTheme[] = [
  {
    id: "studio_luxury",
    label: "Studio Sang Trọng",
    icon: "✨",
    description:
      "Background is a professional high-end studio setting. Abstract red and gold bokeh, soft festive lighting, minimalist but luxurious, focusing entirely on the elegance of the jewelry and the person.",
  },
  {
    id: "royal_palace",
    label: "Cung Đình Huế",
    icon: "👑",
    description:
      "Background is the Imperial City of Hue (Dai Noi). Majestic red wooden pillars with gold dragon engravings, traditional royal architecture, regal and sophisticated atmosphere, soft natural light.",
  },

  {
    id: "dalat_cherry",
    label: "Đà Lạt Hoa Anh Đào",
    icon: "🌸",
    description:
      "Background is Da Lat city with blooming cherry blossoms (hoa anh đào). Pink cherry blossom trees in full bloom, romantic European-style villas in the distance, cool highland atmosphere, soft natural lighting, spring flowers everywhere.",
  },
  {
    id: "fireworks_night",
    label: "Đêm Giao Thừa",
    icon: "🎆",
    description:
      "Background is a rooftop view at night during Lunar New Year Eve. Colorful fireworks exploding in the dark sky, city lights blurring in the background, celebratory and magical atmosphere.",
  },
  {
    id: "traditional_room",
    label: "Phòng Khách Tết",
    icon: "🏮",
    description:
      "Background is a traditional Vietnamese living room during Tet. Antique wooden furniture, a large vase of apricot blossoms (hoa mai) or peach blossoms (hoa đào), a tea set on the table, warm and cozy indoor lighting, red lucky money envelopes visible.",
  },
  {
    id: "opera_house",
    label: "Nhà Hát Lớn",
    icon: "🎭",
    description:
      "Background is the Hanoi Opera House or Saigon Opera House steps during Tet. French colonial architecture, elegant white stone textures, luxury fashion vibe, soft daylight.",
  },
  {
    id: "flower_garden",
    label: "Vườn Hoa Xuân",
    icon: "🌸",
    description:
      "Background is a vibrant outdoor spring flower garden. Bright natural sunlight, blooming yellow chrysanthemums, marigolds, and pink peach blossoms. Fresh, airy, and colorful atmosphere characteristic of a Tet flower market.",
  },
  {
    id: "old_street",
    label: "Phố Cổ Hội An",
    icon: "🧧",
    description:
      "Background is a festive street in Hoi An. Yellow colonial architecture, hanging red lanterns glowing warmly, blurred festive crowd in the distance, bustling atmosphere, soft twilight.",
  },
  {
    id: "calligraphy_street",
    label: "Phố Ông Đồ",
    icon: "🖌️",
    description:
      "Background is a calligraphy street (Van Mieu) with red paper decorations, hanging calligraphy scrolls (câu đối), ink stones, and brushes. Scholarly, cultural, and nostalgic Vietnamese Tet vibe.",
  },
  {
    id: "countryside",
    label: "Đồng Quê Việt Nam",
    icon: "🌾",
    description:
      "Background is a peaceful Vietnamese countryside landscape. Green rice fields stretching to the horizon, water buffalo grazing, traditional thatched houses in the distance, natural warm sunlight, fresh air atmosphere with morning mist.",
  },
  {
    id: "mekong_delta",
    label: "Sông Nước Miền Tây",
    icon: "🚤",
    description:
      "Background is a scenic Mekong Delta river view. Traditional wooden boats on calm water, lush green riverbanks, coconut trees swaying, floating market glimpse in the distance, soft golden hour lighting reflecting on water.",
  },
  {
    id: "mountain_blossom",
    label: "Núi Non Hoa Mai",
    icon: "🏔️",
    description:
      "Background is Northern Vietnam mountain scenery during Tet. Majestic limestone mountains in the background, blooming yellow apricot blossoms in foreground, natural outdoor lighting, fresh mountain air atmosphere.",
  },
  {
    id: "beach_tet",
    label: "Biển Xuân",
    icon: "🌊",
    description:
      "Background is a beautiful Vietnamese coastal scene during Tet holiday. Sandy beach with gentle waves, blue sky, subtle red and gold Tet decorations on beach huts, warm natural sunlight, peaceful seaside atmosphere.",
  },
  {
    id: "spring_park",
    label: "Công Viên Xuân",
    icon: "🌳",
    description:
      "Background is a vibrant city park in spring. Tree-lined pathways with colorful flowers blooming, families celebrating Tet in the distance, natural daylight filtering through trees, fresh outdoor atmosphere.",
  },
  {
    id: "pagoda_outdoor",
    label: "Chùa Ngoài Trời",
    icon: "⛩️",
    description:
      "Background is the exterior courtyard of a traditional Vietnamese pagoda. Ancient architecture with curved roofs, incense smoke drifting, stone pathways, bonsai trees, natural lighting, serene spiritual atmosphere.",
  },
];

export const TET_PROMPT_TEMPLATE = `
Task: Virtual Jewelry Try-On with Identity Preservation.
Output: A photorealistic image of the person from Image 1 wearing the jewelry from Image 2.

🚨🚨🚨 CRITICAL: DO NOT CHANGE THE FACE IN ANY WAY 🚨🚨🚨

🔐 ABSOLUTE PRIORITY #1: FACE PRESERVATION (THIS IS MANDATORY)
⛔ THE FACE FROM IMAGE 1 IS YOUR REFERENCE - USE IT EXACTLY AS-IS ⛔

FACE COPYING INSTRUCTIONS (READ CAREFULLY):
1. COPY THE EXACT FACE: Transfer the face from Image 1 pixel-by-pixel. Do NOT regenerate or redraw it.
2. REFERENCE IMAGE = FINAL IMAGE: The face in Image 1 IS the face in the output. No modifications allowed.
3. THINK "PHOTOSHOP LAYER": You are placing Image 1's face as a locked layer. You cannot edit this layer.
4. IDENTITY MUST MATCH 100%: Anyone who knows this person must recognize them instantly.

⚠️ FACE FEATURES - DO NOT CHANGE ANYTHING:
- Eyes: EXACT same shape, size, spacing, color, eyelids, eye corners
- Nose: EXACT same bridge height, nostril shape, nose tip, nose width
- Mouth: EXACT same lip shape, lip thickness, mouth width, lip color
- Eyebrows: EXACT same shape, thickness, arch, spacing
- Face shape: EXACT same jawline, chin shape, cheekbones, forehead
- Ears: EXACT same size, shape, position (if visible)
- Face proportions: EXACT same distance between features

⚠️ HEAD & POSE - DO NOT CHANGE:
- Head angle: EXACT same tilt, rotation, viewing angle
- Face direction: EXACT same where the person is looking
- Facial expression: EXACT same (smile, neutral, etc.)
- Camera angle: EXACT same perspective and viewpoint

⚠️ SKIN - MINIMAL CHANGES ONLY:
- Skin texture: PRESERVE all pores, moles, freckles, wrinkles, blemishes
- Skin color: KEEP original tone (allow MAXIMUM 3% brightening only)
- Skin quality: DO NOT smooth, blur, or "beautify" skin
- Natural details: KEEP all natural skin characteristics

⚠️ HAIR - DO NOT CHANGE:
- Hair length: EXACT same
- Hair color: EXACT same
- Hair style: EXACT same
- Hair arrangement: EXACT same

⚠️ AGE - DO NOT CHANGE:
- KEEP the person's exact age
- DO NOT make younger or older

🔒 VERIFICATION REQUIREMENT:
Before finalizing the image, verify:
✓ Does the face look EXACTLY like Image 1?
✓ Would someone who knows this person recognize them?
✓ Are ALL facial features identical?
If ANY answer is NO, you FAILED the task.

JEWELRY PLACEMENT:
- The jewelry from Image 2 must be worn naturally by the person.
- Necklaces: Drape naturally around the neck, respecting gravity and collarbones.
- Earrings: Hang naturally from the earlobes.
- Bracelets/Rings: Fit naturally on the wrist/fingers.
- Materials (Gold, Jade, Diamond) must look realistic with proper reflections.

BACKGROUND & ATMOSPHERE:
Background is a Vietnamese Lunar New Year (Tet holiday) theme:
red and gold decorations, apricot blossoms (hoa mai) or peach blossoms (hoa đào),
traditional lanterns, festive warm lighting, elegant and joyful atmosphere.

STYLE:
Professional studio photography, ultra realistic,
sharp focus, soft shadows, cinematic lighting,
4K resolution, commercial jewelry advertising style.
Traditional Vietnamese Tet atmosphere,
ao dai style elegance (if clothes are visible, prefer traditional or elegant formal wear),
warm red and gold tones,
natural and authentic look with gentle radiance.

🚫 ABSOLUTELY FORBIDDEN (WILL FAIL THE TASK):
❌ Changing ANY facial features
❌ Altering face shape or proportions
❌ Modifying eyes, nose, mouth, eyebrows in ANY way
❌ Changing the person's identity
❌ Redrawing or regenerating the face
❌ Rotating or tilting the head differently
❌ Changing facial expression
❌ Smoothing or beautifying skin
❌ Altering skin tone (max 3% brightening)
❌ Changing hairstyle, hair color, or hair length
❌ Making the person look younger or older
❌ Any distortion of facial features
❌ Western features on Asian faces (or vice versa)
❌ Plastic/fake looking skin
❌ Different face angle or camera viewpoint
❌ Low quality, blurry, cartoon, anime style
❌ Text, watermark, logo, frame
❌ Extra fingers, extra hands
❌ Asymmetrical or distorted face

REMEMBER: The face in Image 1 is SACRED. Do not touch it. Copy it exactly.
`;

export const BACKGROUND_CHANGE_PROMPT_TEMPLATE = `
Task: Change Background ONLY with Complete Identity Preservation.
Output: A photorealistic image with the EXACT SAME person from Image 1 in a new background.

🚨🚨🚨 CRITICAL: ONLY CHANGE THE BACKGROUND - NOTHING ELSE 🚨🚨🚨

🔐 ABSOLUTE PRIORITY #1: PRESERVE THE ENTIRE PERSON (MANDATORY)
⛔ IMAGE 1 IS YOUR REFERENCE - THE PERSON MUST BE IDENTICAL ⛔

PERSON COPYING INSTRUCTIONS (READ CAREFULLY):
1. COPY THE ENTIRE PERSON: Transfer the person from Image 1 exactly. Only change the background.
2. REFERENCE IMAGE = FINAL IMAGE: The person in Image 1 IS the person in the output. Zero modifications.
3. THINK "CUT AND PASTE": You are cutting out the person and pasting them on a new background.
4. IDENTITY MUST MATCH 100%: Anyone who knows this person must recognize them instantly.

⚠️ FACE FEATURES - ABSOLUTELY NO CHANGES:
- Eyes: EXACT same shape, size, spacing, color, eyelids, eye corners
- Nose: EXACT same bridge height, nostril shape, nose tip, nose width
- Mouth: EXACT same lip shape, lip thickness, mouth width, lip color
- Eyebrows: EXACT same shape, thickness, arch, spacing
- Face shape: EXACT same jawline, chin shape, cheekbones, forehead
- Ears: EXACT same size, shape, position (if visible)
- Face proportions: EXACT same distance between features

⚠️ HEAD & POSE - NO CHANGES:
- Head angle: EXACT same tilt, rotation, viewing angle
- Face direction: EXACT same where the person is looking
- Facial expression: EXACT same (smile, neutral, etc.)
- Body pose: EXACT same position and posture
- Camera angle: EXACT same perspective and viewpoint

⚠️ SKIN - MINIMAL CHANGES ONLY:
- Skin texture: PRESERVE all pores, moles, freckles, wrinkles, blemishes
- Skin color: KEEP original tone (allow MAXIMUM 3% brightening only)
- Skin quality: DO NOT smooth, blur, or "beautify" skin
- Natural details: KEEP all natural skin characteristics

⚠️ HAIR - NO CHANGES:
- Hair length: EXACT same
- Hair color: EXACT same
- Hair style: EXACT same
- Hair arrangement: EXACT same

⚠️ CLOTHING - NO CHANGES:
- Keep EXACT same clothing from Image 1
- Same colors, patterns, style

⚠️ BODY - NO CHANGES:
- Keep EXACT same body pose from Image 1
- Same position, same posture

⚠️ AGE - NO CHANGES:
- KEEP the person's exact age
- DO NOT make younger or older

🔒 VERIFICATION REQUIREMENT:
Before finalizing the image, verify:
✓ Does the person look EXACTLY like in Image 1?
✓ Is ONLY the background different?
✓ Are ALL facial features identical?
✓ Is the body pose identical?
✓ Is the clothing identical?
If ANY answer is NO, you FAILED the task.

WHAT YOU CAN CHANGE:
✅ ONLY the background behind the person
✅ Lighting adjustment to blend naturally (but preserve skin tone)
✅ Depth of field to match new background

BACKGROUND CHANGE:
- Replace ONLY the background while keeping the person completely unchanged.
- The background should blend naturally with the person's lighting.
- Maintain realistic depth of field and natural perspective.
- Background should complement but not overpower the person.

BACKGROUND & ATMOSPHERE:
Vietnamese Lunar New Year (Tet holiday) theme:
red and gold decorations, apricot blossoms (hoa mai) or peach blossoms (hoa đào),
traditional lanterns, festive warm lighting, elegant and joyful atmosphere,
natural outdoor or indoor Vietnamese scenery.

STYLE:
Professional photography, ultra realistic,
sharp focus, soft shadows, cinematic lighting,
4K resolution, natural and authentic look.
Traditional Vietnamese Tet atmosphere,
warm festive tones,
natural and authentic look with gentle radiance.

🚫 ABSOLUTELY FORBIDDEN (WILL FAIL THE TASK):
❌ Changing the person in ANY way
❌ Changing ANY facial features
❌ Altering face shape or proportions
❌ Modifying eyes, nose, mouth, eyebrows in ANY way
❌ Changing the person's identity
❌ Redrawing or regenerating the face
❌ Rotating or tilting the head differently
❌ Changing facial expression
❌ Smoothing or beautifying skin
❌ Altering skin tone (max 3% brightening)
❌ Changing hairstyle, hair color, or hair length
❌ Changing clothing
❌ Changing body pose or position
❌ Making the person look younger or older
❌ Any distortion of facial features
❌ Western features on Asian faces (or vice versa)
❌ Plastic/fake looking skin
❌ Different face angle or camera viewpoint
❌ Low quality, blurry, cartoon, anime style
❌ Text, watermark, logo, frame
❌ Extra fingers, extra hands
❌ Asymmetrical or distorted face

REMEMBER: You are ONLY changing the background. The person is UNTOUCHABLE. Copy them exactly.
`;

export const MODEL_NAME = "gemini-3-pro-image-preview";
