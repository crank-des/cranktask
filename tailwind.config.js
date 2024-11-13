module.exports = {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                gideon: ['"Gideon Roman"', "serif"], // Add your custom font here
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        // ...
    ],
};