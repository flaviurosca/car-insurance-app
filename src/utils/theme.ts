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
    Table: {
      variants: {
        striped: {
          th: {
            color: "gray.300",
            py: 4,
          },
        },
      },
    },
  },

  colors: {
    customBlue: "#51ACEC",
    customStriped: {
      50: "#51ACEC",
      100: "#0d4672",
    },
  },
});

export default theme;
