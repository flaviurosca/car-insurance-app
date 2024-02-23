import { IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type ScrollButtonProps = {
  variant: "left" | "right";
  tableRef: React.RefObject<HTMLDivElement>;
};

const ScrollButton = ({ variant, tableRef }: ScrollButtonProps) => {
  const handleScroll = () => {
    if (tableRef.current) {
      tableRef.current.scrollBy({
        left: variant === "left" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <IconButton
      display={{ base: "none", md: "inline-flex" }}
      aria-label="Scroll Left"
      icon={variant === "left" ? <FaChevronLeft /> : <FaChevronRight />}
      onClick={handleScroll}
      h="auto"
      size="xs"
      borderRadius={variant === "left" ? "5px 0 0 5px" : "0 5px 5px 0"}
      variant="outline"
      colorScheme="customStriped"
      bg="customStriped.100"
    />
  );
};

export default ScrollButton;
