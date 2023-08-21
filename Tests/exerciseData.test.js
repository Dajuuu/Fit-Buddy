import exerciseData from "../exerciseData"; // Adjust the path to your exerciseData file

describe("Exercise Data Structure", () => {
  it("should have defined exercise types", () => {
    const exerciseTypes = Object.keys(exerciseData);

    expect(exerciseTypes).toContain("Arms");
    expect(exerciseTypes).toContain("Legs");
    expect(exerciseTypes).toContain("Yoga");
    expect(exerciseTypes).toContain("ABS");
    // Add more exercise types as needed
  });

  it("should have defined sub-categories for each exercise type", () => {
    Object.keys(exerciseData).forEach((exerciseType) => {
      const subCategories = Object.keys(exerciseData[exerciseType]);
      expect(subCategories).toContain("Easy 1");
      expect(subCategories).toContain("Easy 2");
      expect(subCategories).toContain("Medium 1");
      expect(subCategories).toContain("Medium 2");
      expect(subCategories).toContain("Hard 1");
      expect(subCategories).toContain("Hard 2");
      // Add more sub-category checks as needed
    });
  });

  it("should have at least one exercise in each sub-category", () => {
    Object.keys(exerciseData).forEach((exerciseType) => {
      Object.keys(exerciseData[exerciseType]).forEach((subCategory) => {
        const exercises = exerciseData[exerciseType][subCategory];
        expect(exercises).toBeTruthy();
      });
    });
  });
});
