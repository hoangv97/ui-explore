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

export type ViewState = 'LIST' | 'DETAIL';
