import { describe, expect, it } from "vitest";
import { copyEmailToClipboard } from "./contact";

describe("copyEmailToClipboard", () => {
  it("writes the email when a clipboard writer is available", async () => {
    let copied = "";
    const result = await copyEmailToClipboard("caroline.jy.xia@gmail.com", {
      writeText: async (value) => {
        copied = value;
      }
    });

    expect(result).toBe("success");
    expect(copied).toBe("caroline.jy.xia@gmail.com");
  });

  it("reports unsupported when no writer is available", async () => {
    await expect(copyEmailToClipboard("caroline.jy.xia@gmail.com", undefined)).resolves.toBe("unsupported");
  });
});
