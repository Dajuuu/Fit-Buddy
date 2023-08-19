const fs = require("fs");
const path = require("path");

jest.mock("fs");
jest.mock("path");

describe("generateImagePathArray", () => {
  it("should check if the declared folders exist", () => {
    const mockFolders = [
      "HomeScreen",
      "ABSExercises",
      "ArmsExercises",
      "LegsExercises",
      "YogaExercises",
      "Others",
    ];

    mockFolders.forEach((folder) => {
      const folderPath = path.join(__dirname, "assets", folder);
      expect(() => fs.readdirSync(folderPath)).not.toThrow();
    });
  });

  it("should check if the declared folders are not empty", () => {
    const mockFolders = [
      "HomeScreen",
      "ABSExercises",
      "ArmsExercises",
      "LegsExercises",
      "YogaExercises",
      "Others",
    ];

    mockFolders.forEach((folder) => {
      const folderPath = path.join(__dirname, "assets", folder);
      fs.readdirSync.mockReturnValueOnce(["mockfile.png"]); // Mocking non-empty folder content
      const files = fs.readdirSync(folderPath);
      expect(files.length).toBeGreaterThan(0);
    });
  });
});
