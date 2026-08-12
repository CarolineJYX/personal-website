export type ClipboardWriter = {
  writeText: (value: string) => Promise<void>;
};

export async function copyEmailToClipboard(email: string, writer?: ClipboardWriter): Promise<"success" | "unsupported"> {
  const targetWriter = writer ?? globalThis.navigator?.clipboard;

  if (!targetWriter) {
    return "unsupported";
  }

  await targetWriter.writeText(email);
  return "success";
}
