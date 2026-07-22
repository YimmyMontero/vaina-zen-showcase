import { siteConfig } from "@/config/site";

export function getWhatsAppUrl(message?: string): string {
  const text = message?.trim() || siteConfig.whatsappMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getProductWhatsAppUrl(productName: string, model?: string): string {
  const modelPart = model ? ` para ${model}` : "";
  const message = `Hola, estoy interesado en el producto: ${productName}${modelPart}. Me gustaría recibir más información.`;
  return getWhatsAppUrl(message);
}
