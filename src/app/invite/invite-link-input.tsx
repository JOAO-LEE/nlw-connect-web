import IconButton from "@/components/icon-button";
import InputField, { InputRoot, InputIcon } from "@/components/input";
import { Copy, Link } from "lucide-react";

export default function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        defaultValue={"devstage.com/codecraft-summit-2025/1289"}
      />
      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
