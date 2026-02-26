import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";
import useGameQueryStore from "../store/gameQueryStore";

function SearchInput() {
  const setSearchText = useGameQueryStore((r) => r.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup startElement={<LuSearch />}>
        <Input
          ref={ref}
          placeholder="Search games..."
          variant={"subtle"}
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
