import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Code2, Copy, Eye, Globe, Info, MonitorPlay } from "lucide-react";

const lessons = [
  {
    id: "html", tag: "<html>", title: "The <html> element", level: "FOUNDATION",
    purpose: "The root element of an HTML document. All other HTML elements (except the doctype declaration) are placed inside it.",
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, HTML!</h1>
  </body>
</html>`,
    attributes: [
      ["lang", 'Specifies the language of the document, for example lang="en" or lang="si". Helps browsers and assistive technologies.'],
      ["dir", 'Sets text direction: dir="ltr" (left to right) or dir="rtl" (right to left).'],
      ["class", "A global attribute used to connect the element to CSS styles or JavaScript."],
      ["id", "A global attribute that gives the element a unique identifier."]
    ],
    note: "The <!DOCTYPE html> declaration is written before the <html> element. It tells the browser to use modern HTML standards mode."
  },
  {
    id: "head", tag: "<head>", title: "The <head> element", level: "FOUNDATION",
    purpose: "Contains document information (metadata), links to stylesheets, scripts and other resources. Its contents are generally not displayed as page content.",
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Profile</title>
  </head>
  <body>
    <p>Welcome to my page.</p>
  </body>
</html>`,
    attributes: [
      ["Global attributes", "The <head> element supports global attributes such as id, class, and title, but it has no commonly used head-specific presentation attributes."]
    ],
    note: "Common elements inside <head> include <title>, <meta>, <link> and <script>. The <head> element itself is not a visible page section."
  },
  {
    id: "title", tag: "<title>", title: "The <title> element", level: "FOUNDATION",
    purpose: "Sets the document title shown in the browser tab, bookmarks and search result titles. It is placed inside <head>.",
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Student Website</title>
  </head>
  <body>
    <h1>Welcome</h1>
  </body>
</html>`,
    attributes: [
      ["Global attributes", "The <title> element supports global attributes, but it has no special content or formatting attributes of its own."]
    ],
    note: "The text inside <title> does not appear as a heading in the webpage. Use <h1> to display the main page heading."
  },
  {
    id: "body", tag: "<body>", title: "The <body> element", level: "FOUNDATION",
    purpose: "Contains the visible page content, such as headings, paragraphs, images, links, tables and forms. A document has one <body> element.",
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Body Example</title>
  </head>
  <body>
    <h1>My Website</h1>
    <p>This content is displayed in the browser.</p>
  </body>
</html>`,
    attributes: [
      ["Global attributes", "Use id, class, style, title, lang and other global attributes when needed."],
      ["onload (event handler)", "Older examples may show onload. Modern projects should normally register events in JavaScript rather than placing event-handler attributes in HTML."]
    ],
    note: "Put the content users should see inside <body>. CSS controls its appearance; JavaScript controls interactive behaviour."
  },
  {
    id: "p", tag: "<p>", title: "The <p> element", level: "BEGINNER",
    purpose: "Defines a paragraph of text. Browsers normally display paragraphs as block elements with space before and after them.",
    code: `<!DOCTYPE html>
<html lang="en">
  <head><title>Paragraph Example</title></head>
  <body>
    <p>This is my first paragraph.</p>
    <p>This is another paragraph.</p>
    <p class="highlight" title="A short description">This paragraph has attributes.</p>
  </body>
</html>`,
    attributes: [
      ["class", 'A global attribute. Example: class="highlight" lets CSS style matching paragraphs.'],
      ["id", 'A global attribute. Example: id="intro" identifies one particular paragraph.'],
      ["title", 'A global attribute that provides advisory information, often shown as a tooltip.'],
      ["style", 'A global attribute for inline CSS, for example style="color: blue;". Prefer a stylesheet for larger projects.']
    ],
    note: "The <p> element does not have special presentational attributes in modern HTML. Use global attributes and CSS. Do not use <p> only to create blank space."
  },
  {
    id: "headings", tag: "<h1>–<h6>", title: "Heading elements", level: "BEGINNER",
    purpose: "HTML provides six heading levels. <h1> is the highest-level and usually most important heading; <h6> is the lowest-level.",
    code: `<!DOCTYPE html>
<html lang="en">
  <head><title>Heading Example</title></head>
  <body>
    <h1>Main Page Heading</h1>
    <h2>Section Heading</h2>
    <h3>Subsection Heading</h3>
    <h4>Level Four Heading</h4>
    <h5>Level Five Heading</h5>
    <h6>Level Six Heading</h6>
  </body>
</html>`,
    attributes: [
      ["id", 'A global attribute useful for linking to a section, for example <h2 id="about">About</h2>.'],
      ["class", 'A global attribute used to apply CSS styles to one or more headings.'],
      ["title", "A global attribute that provides additional advisory information."],
      ["style", 'A global attribute for inline CSS, for example style="color: navy;".']
    ],
    note: "Choose heading levels according to document structure, not just their default font size. Usually use one clear <h1> for the main page title and nest sections logically."
  }
];

function makeDocument(code) {
  return code.replace(/<!DOCTYPE html>/i, "").trim();
}

export default function WebDesignPage() {
  const [active, setActive] = useState("html");
  const [copied, setCopied] = useState(false);
  const lesson = lessons.find((item) => item.id === active) || lessons[0];
  const preview = useMemo(() => makeDocument(lesson.code), [lesson]);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(lesson.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="page-shell lesson-shell webdesign-page">
      <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Web Design Practicals</span></div>
      <section className="lesson-hero cyan">
        <div className="lesson-icon"><Globe size={26} /></div>
        <div><div className="eyebrow">HTML · WEB DESIGN FUNDAMENTALS</div><h1>HTML Basic Tags</h1><p>Learn the structure of an HTML document, common elements and the attributes used with them.</p></div>
      </section>
      <div className="csharp-progress"><div><strong>Part 01</strong><span>HTML document structure and basic text elements</span></div><span className="lesson-count">{lessons.length} TOPICS</span></div>
      <div className="lesson-layout">
        <aside className="lesson-sidebar csharp-sidebar">
          <span className="sidebar-label">HTML TAGS</span>
          {lessons.map((item, index) => <button key={item.id} className={active === item.id ? "sidebar-item selected" : "sidebar-item"} onClick={() => setActive(item.id)}><span className="lesson-number">{String(index + 1).padStart(2, "0")}</span><span>{item.tag}</span></button>)}
          <div className="sidebar-tip"><BookOpen size={16} /><span>Select a tag to study its purpose, code, attributes and browser output.</span></div>
        </aside>
        <div className="lesson-main">
          <section className="content-panel csharp-topic" id="topic">
            <div className="panel-heading"><span className="step-index">01</span><div><h2>{lesson.title}</h2><p>{lesson.level} · HTML</p></div></div>
            <p className="practical-goal">{lesson.purpose}</p>
            <div className="concept-note"><Info size={17} /><span>{lesson.note}</span></div>
          </section>
          <section className="content-panel" id="code">
            <div className="panel-heading"><span className="step-index">02</span><div><h2>HTML source code</h2><p>A complete HTML5 example. Copy it and save it as index.html.</p></div></div>
            <div className="code-placeholder csharp-code"><div className="code-toolbar"><span><i /><i /><i /></span><span>index.html · HTML5</span><button onClick={copyCode} className="copy-code"><Copy size={13} /> {copied ? "Copied" : "Copy code"}</button></div><pre><code>{lesson.code}</code></pre></div>
          </section>
          <section className="content-panel" id="explanation">
            <div className="panel-heading"><span className="step-index">03</span><div><h2>Attributes</h2><p>Attributes provide extra information or settings for an HTML element.</p></div></div>
            <div className="html-attribute-intro"><code>&lt;element attribute="value"&gt;Content&lt;/element&gt;</code><p>Write attributes inside the opening tag. Most attribute values should be placed inside quotation marks.</p></div>
            <div className="code-explanations">{lesson.attributes.map(([term, description], index) => <article className="code-explanation" key={term}><span>{String(index + 1).padStart(2, "0")}</span><div><code>{term}</code><p>{description}</p></div></article>)}</div>
            <div className="html-global-note"><strong>Remember — common global attributes</strong><p>These can be used on most HTML elements: <code>id</code>, <code>class</code>, <code>style</code>, <code>title</code>, <code>lang</code>, <code>dir</code>, <code>hidden</code>, <code>tabindex</code> and <code>data-*</code>. Not every element accepts every attribute; use valid attributes for the element.</p></div>
          </section>
          <section className="content-panel" id="output">
            <div className="panel-heading"><span className="step-index">04</span><div><h2>Live output preview</h2><p>This preview renders the HTML example in a browser-like frame.</p></div></div>
            <div className="win-output-label"><span><MonitorPlay size={14} /> BROWSER OUTPUT</span><span><Eye size={13} /> Live HTML preview</span></div>
            <div className="html-preview-frame"><div className="html-preview-bar"><span>●</span><span>Local preview · {lesson.id}.html</span></div><iframe title={lesson.title + " output preview"} srcDoc={preview} sandbox="" /></div>
          </section>
          <section className="content-panel setup-panel">
            <div className="panel-heading"><span className="step-index">05</span><div><h2>How to run this HTML file</h2><p>Try the practical on your Windows 11 laptop.</p></div></div>
            <ol className="setup-steps"><li>Open Notepad or Visual Studio Code.</li><li>Copy the HTML source code above and paste it into a new file.</li><li>Save the file with the name <code>index.html</code>. Make sure it is not saved as <code>index.html.txt</code>.</li><li>Double-click <code>index.html</code> or open it with Chrome, Edge or Firefox.</li><li>Change the text or attributes, save the file and refresh the browser to see your changes.</li></ol>
          </section>
        </div>
      </div>
    </main>
  );
}
