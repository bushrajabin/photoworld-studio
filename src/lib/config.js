// Gallery ki categories. Naya category chahiye to yahan aur supabase/schema.sql
// ke check constraint mein jodein.
export const CATEGORIES = [
  { slug: "album", label: "Album Shoot", type: "image" },
  { slug: "model", label: "Model Shoots", type: "image" },
  { slug: "portrait", label: "Portraits", type: "image" },
  { slug: "reels", label: "Reels", type: "video" },
];

export const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "djxx3xc6p";
export const CLOUDINARY_UPLOAD_PRESET =
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "photoworld-studio";

// Country code ke saath, + ya spaces ke bina.
export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || "918002924050";
export const WHATSAPP_MESSAGE =
  import.meta.env.VITE_WHATSAPP_MESSAGE ||
  "Hi, I visited Photoworld Studio website. I want to know about your photography services.";

// Cloudinary par automatic best format + quality (page tezi se load hota hai).
export function optimizeUrl(url) {
  if (!url || !url.includes("res.cloudinary.com") || url.includes("/upload/f_auto")) {
    return url;
  }
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
}
