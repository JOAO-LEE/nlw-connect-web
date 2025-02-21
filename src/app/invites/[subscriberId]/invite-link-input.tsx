"use client";

import IconButton from "@/components/icon-button";
import InputField, { InputRoot, InputIcon } from "@/components/input";
import { Copy, Link } from "lucide-react";

export default function InviteLinkInput({
  inviteLink,
}: { inviteLink: string }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
  };

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={handleCopyLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}