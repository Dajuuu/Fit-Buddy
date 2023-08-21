import exerciseData from "../exerciseData";

describe("Exercise Data tests", () => {
  it("Exercise types are defined correctly", () => {
    const exerciseTypes = Object.keys(exerciseData);

    expect(exerciseTypes).toContain("Arms");
    expect(exerciseTypes).toContain("Legs");
    expect(exerciseTypes).toContain("Yoga");
    expect(exerciseTypes).toContain("ABS");
  });

  it("Each exercise type should have defined difficulties", () => {
    Object.keys(exerciseData).forEach((exerciseType) => {
      const difficulties = Object.keys(exerciseData[exerciseType]);
      expect(difficulties).toContain("Easy 1");
      expect(difficulties).toContain("Easy 2");
      expect(difficulties).toContain("Medium 1");
      expect(difficulties).toContain("Medium 2");
      expect(difficulties).toContain("Hard 1");
      expect(difficulties).toContain("Hard 2");
    });
  });

  it("At least one exercise is declared for each difficulty", () => {
    Object.keys(exerciseData).forEach((exerciseType) => {
      Object.keys(exerciseData[exerciseType]).forEach((difficulty) => {
        const exercises = exerciseData[exerciseType][difficulty];
        expect(exercises).toBeTruthy();
      });
    });
  });
});
