import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

/* ============================================================
   Markdown - renders authored article Markdown into styled,
   reader-friendly typography. Safe by default: react-markdown
   does NOT execute raw HTML (no rehype-raw), so admin content
   can't inject scripts. Every element is hand-styled to match
   the Y&Now design system rather than a generic prose reset.
   ============================================================ */

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function textOf(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(textOf).join("");
  if (children && typeof children === "object" && "props" in children) {
    // @ts-expect-error - narrowing a React element's children
    return textOf(children.props.children);
  }
  return "";
}

export default function Markdown({ content, tint }: { content: string; tint: string }) {
  const components: Components = {
    h2: ({ children }) => {
      const id = slugify(textOf(children));
      return (
        <h2
          id={id}
          className="group mt-14 scroll-mt-28 font-heading text-[1.7rem] font-700 leading-tight tracking-tight text-ink first:mt-0"
        >
          <span
            aria-hidden
            className="mr-3 inline-block h-5 w-1 translate-y-0.5 rounded-full align-middle"
            style={{ backgroundColor: `rgb(${tint})` }}
          />
          {children}
        </h2>
      );
    },
    h3: ({ children }) => (
      <h3 className="mt-10 scroll-mt-28 font-heading text-xl font-700 leading-snug text-ink">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mt-5 text-[17px] leading-[1.8] text-neutral-700">{children}</p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="font-500 text-primary-600 underline decoration-primary-200 decoration-2 underline-offset-2 transition-colors hover:text-primary-700 hover:decoration-primary-400"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-700 text-ink">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    ul: ({ children }) => <ul className="mt-5 space-y-2.5">{children}</ul>,
    ol: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2.5 pl-5 marker:font-600 marker:text-primary-500">
        {children}
      </ol>
    ),
    li: ({ children }) => {
      // Ordered-list items keep native markers via the <ol> above.
      return (
        <li className="flex items-start gap-3 text-[17px] leading-[1.75] text-neutral-700 [ol_&]:list-item [ol_&]:pl-1">
          <span
            aria-hidden
            className="mt-[0.7em] block h-1.5 w-1.5 flex-shrink-0 rounded-full [ol_&]:hidden"
            style={{ backgroundColor: `rgb(${tint})` }}
          />
          <span className="flex-1">{children}</span>
        </li>
      );
    },
    blockquote: ({ children }) => (
      <blockquote
        className="my-9 rounded-r-2xl border-l-[3px] bg-surface px-7 py-6 font-heading text-[1.15rem] font-600 italic leading-snug text-ink"
        style={{ borderColor: `rgb(${tint})` }}
      >
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-12 border-t border-neutral-100" />,
    code: ({ className, children }) => {
      const isBlock = /language-/.test(className ?? "");
      if (isBlock) {
        return (
          <code className="block whitespace-pre overflow-x-auto rounded-2xl bg-navy p-5 font-mono text-[13.5px] leading-relaxed text-neutral-100">
            {children}
          </code>
        );
      }
      return (
        <code className="rounded-md bg-primary-50 px-1.5 py-0.5 font-mono text-[0.85em] text-primary-700">
          {children}
        </code>
      );
    },
    pre: ({ children }) => <div className="mt-6">{children}</div>,
    img: ({ src, alt }) =>
      typeof src === "string" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ""}
          className="mt-8 w-full rounded-2xl border border-neutral-100 object-cover"
        />
      ) : null,
    table: ({ children }) => (
      <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-100">
        <table className="w-full border-collapse text-left text-[15px]">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-surface">{children}</thead>,
    th: ({ children }) => (
      <th className="border-b border-neutral-100 px-4 py-3 font-600 text-ink">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border-b border-neutral-100 px-4 py-3 text-neutral-700">{children}</td>
    ),
  };

  return (
    <div className="blog-prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
