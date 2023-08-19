describe("App Tests", () => {
  it("should have non-empty imageAssets", () => {
    // Import the actual generatedImagePathArray (not mocked)
    const imageAssets = require("../generatedImagePathArray").default;

    // Ensure that imageAssets is not empty
    expect(imageAssets.length).toBeGreaterThan(0);
  });

  it("should have existing font files", () => {
    const regularFontPath = "../assets/fonts/JosefinSans-Regular.ttf";
    const boldFontPath = "../assets/fonts/JosefinSans-Bold.ttf";

    // Check if the font files can be resolved
    expect(() => require.resolve(regularFontPath)).not.toThrow();
    expect(() => require.resolve(boldFontPath)).not.toThrow();
  });
});
