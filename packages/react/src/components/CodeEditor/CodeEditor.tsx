import React, { forwardRef, useRef, useEffect } from "react";
import type { CodeEditorProps } from "./CodeEditor.types";
import styles from "./CodeEditor.module.css";

/**
 * CodeEditor
 *
 * A simple textarea-based code editor with synchronized line numbers.
 * Line numbers are displayed in a left column and scroll in sync with the textarea.
 *
 * @example
 * ```tsx
 * const [code, setCode] = useState('# Hello\nWorld');
 * <CodeEditor
 *   value={code}
 *   onChange={setCode}
 *   language="markdown"
 *   placeholder="Enter your code..."
 * />
 * ```
 */
export const CodeEditor = forwardRef<HTMLTextAreaElement, CodeEditorProps>(
  (
    {
      value = "",
      onChange,
      language,
      readOnly = false,
      showLineNumbers = true,
      placeholder,
      minRows = 10,
      className,
      "aria-label": ariaLabel,
      ...rest
    },
    ref,
  ) => {
    const lineNumbersRef = useRef<HTMLDivElement>(null);
    const internalTextareaRef = useRef<HTMLTextAreaElement>(null);

    // Use provided ref or internal ref
    const textareaRef = (ref as React.MutableRefObject<HTMLTextAreaElement | null>) ||
      internalTextareaRef;

    // Calculate number of lines
    const lineCount = Math.max(
      value.split("\n").length,
      minRows,
    );

    // Sync scroll position between textarea and line numbers
    useEffect(() => {
      const handleScroll = (event: Event) => {
        const textarea = event.target as HTMLTextAreaElement;
        if (lineNumbersRef.current) {
          lineNumbersRef.current.scrollTop = textarea.scrollTop;
        }
      };

      const textarea = textareaRef?.current;
      if (textarea) {
        textarea.addEventListener("scroll", handleScroll);
        return () => {
          textarea.removeEventListener("scroll", handleScroll);
        };
      }
    }, [textareaRef]);

    const wrapperClasses = [styles.wrapper, className]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={wrapperClasses}>
        {/* Line numbers column */}
        {showLineNumbers && (
          <div
            ref={lineNumbersRef}
            className={styles.lineNumbers}
            aria-hidden="true"
          >
            {Array.from({ length: lineCount }).map((_, i) => (
              <div key={i} className={styles.lineNumber}>
                {i + 1}
              </div>
            ))}
          </div>
        )}

        {/* Textarea column */}
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          aria-label={ariaLabel || "Code editor"}
          spellCheck="false"
          {...rest}
        />
      </div>
    );
  },
);

CodeEditor.displayName = "CodeEditor";
