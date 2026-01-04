"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

export default function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start writing your blog content...",
      }),
    ],
    content: value || "",
    immediatelyRender: false,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  // 🔴 CRITICAL
  if (!editor) {
    return (
      <div className="h-[250px] rounded-lg border bg-gray-50 animate-pulse" />
    );
  }

  return (
    <div className="bg-white border rounded-lg">
      <EditorContent
        editor={editor}
        className="min-h-[250px] p-4 focus:outline-none"
      />
    </div>
  );
}
