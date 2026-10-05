import { describe, it, expect } from "vitest";
import { SECTIONS } from "../routes/index";

describe("Links configuration", () => {
  it("should preserve all 10 links in the correct order", () => {
    const allLinks = SECTIONS.flatMap(s => s.links);
    expect(allLinks).toHaveLength(10);
    
    const expectedOrder = [
      "GitHub", "Steam", "Chess.com", "Letterboxd", "Spotify", 
      "Instagram", "TikTok", "Snapchat", "Facebook", "Discord"
    ];
    
    expect(allLinks.map(l => l.name)).toEqual(expectedOrder);
  });

  it("should have valid URLs for all links", () => {
    const allLinks = SECTIONS.flatMap(s => s.links);
    allLinks.forEach(link => {
      expect(link.url).toMatch(/^https?:\/\//);
    });
  });
});
