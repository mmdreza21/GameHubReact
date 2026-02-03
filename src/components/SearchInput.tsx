import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
  onsearch: (searchText: string) => void;
}

function SearchInput({ onsearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onsearch(ref.current.value);
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
