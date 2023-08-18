const fs = require("fs");
const path = require("path");

const imageFolders = [
  "HomeScreen",
  "ABSExercises",
  "ArmsExercises",
  "LegsExercises",
  "YogaExercises",
  "Others",
];

const generateImagePaths = (folder) => {
  const imageFolderPath = path.join(__dirname, "assets", folder);

  const files = fs.readdirSync(imageFolderPath);

  return files
    .filter(
      (file) =>
        file.endsWith(".png") ||
        file.endsWith(".jpg") ||
        file.endsWith(".webp") ||
        file.endsWith(".gif")
    )
    .map((file) => `require('./assets/${folder}/${file}')`);
};

const imagePaths = imageFolders
  .map((folder) => generateImagePaths(folder))
  .flat();

const content = `
  // Auto-generated by generateImageArray.js
  export default [
    ${imagePaths.join(",\n      ")}
  ];
`;

fs.writeFileSync(path.join(__dirname, "generatedImageArray.js"), content);
console.log("Image array generated successfully.");
