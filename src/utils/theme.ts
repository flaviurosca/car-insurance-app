import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Input: {
      variants: {
        outline: {
          bg: "gray.900",
          field: {
            "::-webkit-calendar-picker-indicator": {
              backgroundColor: "white",
              borderRadius: 4,
              cursor: "pointer",
            },
          },
        },
      },
    },
  },

  colors: {
    customBlue: "#51ACEC",
  },
});

export default theme;
