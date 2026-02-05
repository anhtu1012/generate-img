export interface ImageUploadState {
  file: File | null;
  previewUrl: string | null;
  base64: string | null;
  mimeType: string;
}

export interface GenerationResult {
  imageUrl: string | null;
  loading: boolean;
  error: string | null;
}

export interface BackgroundTheme {
  id: string;
  label: string;
  icon: string;
  description: string;
}
