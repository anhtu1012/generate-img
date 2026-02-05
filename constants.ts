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
];

export const TET_PROMPT_TEMPLATE = `
Task: Virtual Jewelry Try-On with Identity Preservation.
Output: A photorealistic image of the person from Image 1 wearing the jewelry from Image 2.

🔐 CRITICAL IDENTITY INSTRUCTIONS (ABSOLUTE HIGHEST PRIORITY):
- COPY 100% OF THE FACE FROM IMAGE 1. Do NOT redraw or regenerate the face.
- PRESERVE EXACT FACIAL FEATURES: Keep the original eyes, nose, mouth, eyebrows, face shape, chin, and all facial proportions EXACTLY as they appear in Image 1.
- PRESERVE 100% CAMERA ANGLE & HEAD POSE: Keep the exact camera angle, head tilt, head rotation, and face perspective from Image 1. Do NOT change the viewing angle.
- FORBIDDEN: Changing face angle, rotating the head, tilting the perspective, or adjusting the camera viewpoint.
- Do NOT alter, beautify, or modify any facial features whatsoever.
- FORBIDDEN: distorting eyes, altering nose shape, changing mouth/lips shape or size.
- The HAIRSTYLE must remain EXACTLY the same as Image 1. DO NOT change hair length, color, or style.
- SKIN TEXTURE: Preserve original skin texture, pores, moles, freckles, and all natural skin details.
- FORBIDDEN: Over-smoothing skin, creating plastic skin effect, artificial skin blur, or fake porcelain-like skin.
- SKIN COLOR: Keep the ORIGINAL skin tone. Do NOT change the base skin color.
- ALLOWED: Only gentle, subtle skin brightening to create a fresh, radiant Tet look while maintaining the natural skin tone.
- AGE: Preserve the person's age. Do NOT make them look younger or older.
- You are acting as a MIRROR reflecting the exact original person with jewelry added.

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

🚫 NEGATIVE PROMPT / STRICTLY AVOID:
changing the hairstyle, changing hair color, different hair length,
altering the face, changing the person, redrawing facial features,
distorted eyes, altered nose, changed mouth shape, modified eyebrows,
plastic skin, over-smoothed skin, fake porcelain skin, artificial skin blur,
over-beautification, different facial structure, western features (if asian),
changing skin tone, different skin color (only gentle brightening allowed),
low quality, blurry, cartoon, anime, illustration,
wrong jewelry placement, deformed jewelry,
extra fingers, extra hands, distorted face, asymmetrical face,
overexposed, underexposed, harsh shadows,
fake looking, unnatural lighting, artificial appearance,
text, watermark, logo, frame.
`;

export const MODEL_NAME = "gemini-3-pro-image-preview";
