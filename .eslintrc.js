module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        node: true, 
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
            // Add rule to ignore the require statement for assets
            // To omit the missing props validation errors
    "react/prop-types": "off"
    }
}
