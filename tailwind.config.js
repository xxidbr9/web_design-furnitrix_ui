module.exports = {
    purge: ["./src/**/*.js", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                brown: {
                    50: "#fff9e8",
                    100: "#ffefde",
                    200: "#fae5d4",
                    300: "#f0dbca",
                    400: "#e6d1c0",
                    500: "#dcc7b6",
                    600: "#d2bdac",
                    700: "#c8b3a2",
                    800: "#bea998",
                    900: "#b49f8e"
                },
                lbrown: {
                    50: "#fffdf4",
                    100: "#fcf3ea",
                    200: "#f2e9e0",
                    300: "#e8dfd6",
                    400: "#ded5cc",
                    500: "#d4cbc2",
                    600: "#cac1b8",
                    700: "#c0b7ae",
                    800: "#b6ada4",
                    900: "#aca39a"
                },
                mainbrown: {
                    50: "#c1986f",
                    100: "#b78e65",
                    200: "#ad845b",
                    300: "#a37a51",
                    400: "#997047",
                    500: "#8f663d",
                    600: "#855c33",
                    700: "#7b5229",
                    800: "#71481f",
                    900: "#673e15"
                },

                newblue: {
                    50: "#81a6bb",
                    100: "#779cb1",
                    200: "#6d92a7",
                    300: "#63889d",
                    400: "#597e93",
                    500: "#4f7489",
                    600: "#456a7f",
                    700: "#3b6075",
                    800: "#31566b",
                    900: "#274c61"
                }
            }
        }
    },
    variants: {},
    plugins: []
};
