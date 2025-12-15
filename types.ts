
export interface StylePromptData {
  aiPrompt: string;
  technicalKeywords: string;
  checklist: string;
  variables: string;
}

export interface UIStyleData {
  STT: number;
  "Style Category": string;
  Type: string;
  Keywords: string;
  "Primary Colors": string;
  "Secondary Colors": string;
  "Effects & Animation": string;
  "Best For": string;
  "Do Not Use For": string;
  "Light Mode ✓": string;
  "Dark Mode ✓": string;
  Performance: string;
  Accessibility: string;
  "Mobile-Friendly": string;
  "Conversion-Focused": string;
  "Framework Compatibility": string;
  "Era/Origin": string;
  Complexity: string;
  sampleCode?: string; // Added for the application logic
}

export interface ProductData {
  "No": number;
  "Product Type": string;
  "Keywords": string;
  "Primary Style Recommendation": string;
  "Secondary Styles": string;
  "Landing Page Pattern": string;
  "Dashboard Style (if applicable)": string;
  "Color Palette Focus": string;
  "Key Considerations": string;
}

export interface LandingPageData {
  "No": number;
  "Pattern Name": string;
  "Keywords": string;
  "Section Order": string;
  "Primary CTA Placement": string;
  "Color Strategy": string;
  "Recommended Effects": string;
  "Conversion Optimization": string;
}

export interface TypographyData {
  "STT": number;
  "Font Pairing Name": string;
  "Category": string;
  "Heading Font": string;
  "Body Font": string;
  "Mood/Style Keywords": string;
  "Best For": string;
  "Google Fonts URL": string;
  "CSS Import": string;
  "Tailwind Config": string;
  "Notes": string;
}

export type ViewState = 'LIST' | 'DETAIL';