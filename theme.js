// Colour themes. Admin > Settings > Appearance se theme badal sakte ho.
export const THEMES = {
  diwali: { name: "Diwali (plum + orange)", p: "#8e1b5e", p2: "#b5174f", a: "#f57c00", bg: "#fff3e8", ink: "#2a1020", soft: "#fde6d3" },
  classic: { name: "Classic (black + grey)", p: "#111111", p2: "#3a3a3a", a: "#6b6b6b", bg: "#f6f6f6", ink: "#111111", soft: "#e9e9e9" },
  fresh: { name: "Fresh (green + gold)", p: "#1b6b4a", p2: "#2e8b62", a: "#f2a33a", bg: "#f1f8f3", ink: "#12261c", soft: "#dcefe3" },
  ocean: { name: "Ocean (blue + teal)", p: "#12408a", p2: "#1f63c4", a: "#00a6c8", bg: "#eef4fc", ink: "#0e1d33", soft: "#d9e6f8" }
};

export function applyTheme(key) {
  const t = THEMES[key] || THEMES.diwali, r = document.documentElement.style;
  r.setProperty("--p", t.p); r.setProperty("--p2", t.p2); r.setProperty("--a", t.a);
  r.setProperty("--bg2", t.bg); r.setProperty("--ink", t.ink); r.setProperty("--soft", t.soft); r.setProperty("--pc", "#fff");
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.setAttribute("content", t.p);
}
