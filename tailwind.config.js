module.exports = {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                gideon: ['"Gideon Roman"', "serif"],
                helvetica: ['"Helvetica LT Thai W31 Regular"', "sans-serif"], // Add your custom font here
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        // ...
    ],
};