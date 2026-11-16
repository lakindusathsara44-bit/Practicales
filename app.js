/* Practicales — plain HTML, CSS and JavaScript. No React, no framework, no build step. */
const csharpLessons = [
  {
    id: "form",
    title: "Create a Windows Form",
    level: "BEGINNER",
    goal: "Create a basic Windows Forms window and set its title, size and start position.",
    code: `using System;
using System.Drawing;
using System.Windows.Forms;

namespace WinFormsPractical01
{
    public class Form1 : Form
    {
        public Form1()
        {
            Text = "My First Windows Form";
            Size = new Size(500, 300);
            StartPosition = FormStartPosition.CenterScreen;
        }

        [STAThread]
        public static void Main()
        {
            Application.EnableVisualStyles();
            Application.Run(new Form1());
        }
    }
}`,
    explanation: [
      ["using System.Windows.Forms;", "Imports Windows Forms classes such as Form and Application."],
      ["public class Form1 : Form", "Creates a class named Form1 that inherits from Form. This makes Form1 a window."],
      ['Text = "My First Windows Form";', "Sets the text shown in the window title bar."],
      ["Size = new Size(500, 300);", "Sets the window width to 500 pixels and height to 300 pixels."],
      ["StartPosition = FormStartPosition.CenterScreen;", "Opens the window in the centre of the screen."],
      ["Application.Run(new Form1());", "Creates and starts the form, then runs the Windows Forms message loop."]
    ],
    output: "A 500 × 300 window opens in the centre of the screen with the title “My First Windows Form”."
  },
  {
    id: "button",
    title: "Button Click and MessageBox",
    level: "BEGINNER",
    goal: "Add a button and display a message when the user clicks it.",
    code: `using System;
using System.Drawing;
using System.Windows.Forms;

namespace WinFormsPractical02
{
    public class Form1 : Form
    {
        public Form1()
        {
            Text = "Button Click Example";
            Size = new Size(400, 250);

            Button btn = new Button();
            btn.Text = "Click Me";
            btn.Size = new Size(120, 40);
            btn.Location = new Point(130, 75);

            btn.Click += (sender, e) =>
            {
                MessageBox.Show("Hello! Button clicked.");
            };

            Controls.Add(btn);
        }

        [STAThread]
        public static void Main()
        {
            Application.EnableVisualStyles();
            Application.Run(new Form1());
        }
    }
}`,
    explanation: [
      ["Button btn = new Button();", "Creates a new button control."],
      ['btn.Text = "Click Me";', "Sets the text displayed on the button."],
      ["btn.Location = new Point(130, 75);", "Places the button at x = 130 and y = 75 inside the form."],
      ["btn.Click += (sender, e) => { ... };", "Connects the button's Click event to the instructions that should run."],
      ['MessageBox.Show("Hello! Button clicked.");', "Displays a small message dialog."],
      ["Controls.Add(btn);", "Adds the button to the form so it becomes visible."]
    ],
    output: "The form displays a “Click Me” button. Clicking it opens a message box saying “Hello! Button clicked.”"
  },
  {
    id: "textbox",
    title: "TextBox and Label",
    level: "BEGINNER",
    goal: "Read text entered by the user and display a greeting in a label.",
    code: `using System;
using System.Drawing;
using System.Windows.Forms;

namespace WinFormsPractical03
{
    public class Form1 : Form
    {
        public Form1()
        {
            Text = "Greeting Application";
            Size = new Size(420, 260);

            Label prompt = new Label();
            prompt.Text = "Enter your name:";
            prompt.Location = new Point(30, 35);
            prompt.AutoSize = true;

            TextBox nameBox = new TextBox();
            nameBox.Location = new Point(30, 65);
            nameBox.Width = 220;

            Button greetButton = new Button();
            greetButton.Text = "Greet";
            greetButton.Location = new Point(30, 105);

            Label result = new Label();
            result.Location = new Point(30, 150);
            result.AutoSize = true;

            greetButton.Click += (sender, e) =>
            {
                result.Text = "Hello, " + nameBox.Text + "!";
            };

            Controls.Add(prompt);
            Controls.Add(nameBox);
            Controls.Add(greetButton);
            Controls.Add(result);
        }

        [STAThread]
        public static void Main()
        {
            Application.EnableVisualStyles();
            Application.Run(new Form1());
        }
    }
}`,
    explanation: [
      ["Label prompt = new Label();", "Creates a label to show instructions."],
      ["TextBox nameBox = new TextBox();", "Creates a text field where the user can type a name."],
      ["Button greetButton = new Button();", "Creates the button that triggers the greeting."],
      ["nameBox.Text", "Reads the text currently entered in the TextBox."],
      ['result.Text = "Hello, " + nameBox.Text + "!";', "Combines the entered name with greeting text and displays it in the result label."]
    ],
    output: "If the user enters “Kamal” and clicks Greet, the form displays “Hello, Kamal!”."
  },
  {
    id: "calculator",
    title: "Simple Addition Calculator",
    level: "BEGINNER",
    goal: "Accept two numbers, validate the input and display their sum.",
    code: `using System;
using System.Drawing;
using System.Windows.Forms;

namespace WinFormsPractical04
{
    public class Form1 : Form
    {
        public Form1()
        {
            Text = "Addition Calculator";
            Size = new Size(420, 300);

            TextBox first = new TextBox { Location = new Point(30, 35), Width = 140 };
            TextBox second = new TextBox { Location = new Point(30, 75), Width = 140 };
            Button add = new Button { Text = "Add", Location = new Point(30, 115) };
            Label result = new Label { Location = new Point(30, 165), AutoSize = true };

            add.Click += (sender, e) =>
            {
                if (double.TryParse(first.Text, out double a) &&
                    double.TryParse(second.Text, out double b))
                {
                    result.Text = "Answer: " + (a + b);
                }
                else
                {
                    MessageBox.Show("Please enter valid numbers.");
                }
            };

            Controls.AddRange(new Control[] { first, second, add, result });
        }

        [STAThread]
        public static void Main()
        {
            Application.EnableVisualStyles();
            Application.Run(new Form1());
        }
    }
}`,
    explanation: [
      ["double.TryParse(first.Text, out double a)", "Tries to convert the first TextBox value into a number. It avoids a conversion exception if the input is invalid."],
      ["&&", "Means AND. Both values must be valid numbers for the calculation to run."],
      ["a + b", "Adds the two numeric values."],
      ['result.Text = "Answer: " + (a + b);', "Displays the calculated total in the result label."],
      ['MessageBox.Show("Please enter valid numbers.");', "Shows an error message when either input is not a valid number."]
    ],
    output: "Enter 12 in the first box and 8 in the second box, then click Add. The result label displays “Answer: 20”."
  },
  {
    id: "combobox",
    title: "ComboBox Selection",
    level: "INTERMEDIATE",
    goal: "Let the user select a course from a drop-down list and show the selected item.",
    code: `using System;
using System.Drawing;
using System.Windows.Forms;

namespace WinFormsPractical05
{
    public class Form1 : Form
    {
        public Form1()
        {
            Text = "Course Selection";
            Size = new Size(420, 250);

            ComboBox courses = new ComboBox();
            courses.Location = new Point(30, 40);
            courses.Width = 220;
            courses.DropDownStyle = ComboBoxStyle.DropDownList;
            courses.Items.AddRange(new object[]
            {
                "HNDIT", "HNDA", "HNDE"
            });

            Button show = new Button();
            show.Text = "Show Selection";
            show.Location = new Point(30, 90);

            Label result = new Label();
            result.Location = new Point(30, 145);
            result.AutoSize = true;

            show.Click += (sender, e) =>
            {
                if (courses.SelectedIndex >= 0)
                    result.Text = "Selected course: " + courses.SelectedItem;
                else
                    result.Text = "Please select a course.";
            };

            Controls.Add(courses);
            Controls.Add(show);
            Controls.Add(result);
        }

        [STAThread]
        public static void Main()
        {
            Application.EnableVisualStyles();
            Application.Run(new Form1());
        }
    }
}`,
    explanation: [
      ["ComboBox courses = new ComboBox();", "Creates a drop-down selection control."],
      ["courses.Items.AddRange(...)", "Adds the course names to the list."],
      ["ComboBoxStyle.DropDownList", "Prevents typing a custom value; the user must select an item."],
      ["courses.SelectedIndex >= 0", "Checks whether an item has been selected."],
      ["courses.SelectedItem", "Gets the selected course name."]
    ],
    output: "Choose HNDIT from the drop-down list and click Show Selection. The label displays “Selected course: HNDIT”."
  },
  {
    id: "choices",
    title: "RadioButton and CheckBox",
    level: "INTERMEDIATE",
    goal: "Use RadioButtons for one choice and CheckBoxes for optional multiple choices.",
    code: `using System;
using System.Drawing;
using System.Windows.Forms;

namespace WinFormsPractical06
{
    public class Form1 : Form
    {
        public Form1()
        {
            Text = "Options Example";
            Size = new Size(430, 330);

            RadioButton day = new RadioButton
            {
                Text = "Day",
                Location = new Point(30, 35),
                Checked = true,
                AutoSize = true
            };

            RadioButton weekend = new RadioButton
            {
                Text = "Weekend",
                Location = new Point(30, 65),
                AutoSize = true
            };

            CheckBox csharp = new CheckBox
            {
                Text = "C#",
                Location = new Point(190, 35),
                AutoSize = true
            };

            CheckBox web = new CheckBox
            {
                Text = "Web Design",
                Location = new Point(190, 65),
                AutoSize = true
            };

            Button show = new Button
            {
                Text = "Show Choices",
                Location = new Point(30, 120)
            };

            Label result = new Label
            {
                Location = new Point(30, 175),
                AutoSize = true
            };

            show.Click += (sender, e) =>
            {
                string time = day.Checked ? "Day" : "Weekend";
                string subjects = "";

                if (csharp.Checked) subjects += "C# ";
                if (web.Checked) subjects += "Web Design ";

                result.Text = "Time: " + time + " | Subjects: " +
                    (subjects == "" ? "None" : subjects);
            };

            Controls.AddRange(new Control[]
            {
                day, weekend, csharp, web, show, result
            });
        }

        [STAThread]
        public static void Main()
        {
            Application.EnableVisualStyles();
            Application.Run(new Form1());
        }
    }
}`,
    explanation: [
      ["RadioButton", "Used when the user should choose one option from a group. These two radio buttons share the same form parent, so selecting one clears the other."],
      ["CheckBox", "Used for independent options. The user can select both, one or neither."],
      ["day.Checked", "Checks whether the Day radio button is selected."],
      ["csharp.Checked", "Checks whether the C# check box is ticked."],
      ["?: (conditional operator)", "Chooses one value depending on whether the condition is true or false."]
    ],
    output: "Select Weekend, tick C# and Web Design, then click Show Choices. The result shows “Time: Weekend | Subjects: C# Web Design”."
  }
];

const webLessons = [
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

const page = document.getElementById("page");
let selectedCSharp = "form";
let selectedWeb = "html";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}
function currentRoute() {
  return (location.hash.replace(/^#/, "") || "/").split("?")[0];
}
function panelHeading(number, title, subtitle) {
  return `<div class="panel-heading"><span class="step-index">${number}</span><div><h2>${title}</h2><p>${subtitle}</p></div></div>`;
}
function breadcrumbs(label) {
  return `<div class="breadcrumbs"><a href="#/">Home</a><span>/</span><span>${label}</span></div>`;
}
function renderHome() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">✧ YOUR PRACTICAL LEARNING SPACE</div>
        <h1>Turn what you learn<br><span>into what you build.</span></h1>
        <p class="hero-description">A simple place to follow your daily practical lessons, explore the code, understand how it works, and see the final output.</p>
        <div class="hero-actions"><a class="primary-button" href="#today">Explore today's practicals →</a><span class="hero-note">▤ Notes-based lessons</span></div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="code-window"><div class="window-head"><i></i><i></i><i></i><span>learning.cs</span></div>
          <div class="code-lines"><span class="code-muted">01</span><span class="code-purple">using</span> System;<br><span class="code-muted">02</span><span class="code-blue">class</span> Practical<br><span class="code-muted">03</span>{<br><span class="code-muted">04</span>&nbsp;&nbsp;<span class="code-purple">static void</span> Learn()<br><span class="code-muted">05</span>&nbsp;&nbsp;{<br><span class="code-muted">06</span>&nbsp;&nbsp;&nbsp;&nbsp;Build();<br><span class="code-muted">07</span>&nbsp;&nbsp;}<br><span class="code-muted">08</span>}</div>
          <div class="window-footer"><span class="status-dot"></span> Ready to learn</div>
        </div><div class="floating-tag">⌘ Practical learning</div>
      </div>
    </section>
    <section class="today-section" id="today">
      <div class="section-heading"><div><div class="eyebrow">YOUR LEARNING DASHBOARD</div><h2>Today's practicals</h2><p>Choose a subject to open its practical lesson page.</p></div><span class="date-chip">TODAY <span>•</span> PRACTICALS</span></div>
      <div class="practical-grid">
        <article class="practical-card violet"><div class="card-top"><span class="card-number">PRACTICAL 01</span><span class="card-icon">⌘</span></div><div class="card-content"><h3>C# Visual Application</h3><p>Build Windows-style visual applications and understand the code behind each interface.</p></div><div class="card-bottom"><span>Windows Forms / Visual Application</span><a href="#/csharp" class="circle-link" aria-label="Open C# practicals">→</a></div></article>
        <article class="practical-card cyan"><div class="card-top"><span class="card-number">PRACTICAL 02</span><span class="card-icon">▣</span></div><div class="card-content"><h3>Web Design</h3><p>Learn HTML, CSS and JavaScript by creating and previewing practical web pages.</p></div><div class="card-bottom"><span>HTML · CSS · JavaScript</span><a href="#/web-design" class="circle-link" aria-label="Open Web Design practicals">→</a></div></article>
      </div>
    </section>
    <section class="learning-note"><div class="note-icon">⌑</div><div><strong>Made from your practical notes</strong><p>Each lesson includes its topic, complete code, a clear explanation of what the code does, and an output preview where possible.</p></div></section>`;
}
function csharpPreview(lesson) {
  const titles = {form:"My First Windows Form",button:"Button Click Example",textbox:"Greeting Application",calculator:"Addition Calculator",combobox:"Course Selection",choices:"Options Example"};
  let content = "";
  if (lesson.id === "button") content = '<button class="win-button">Click Me</button><div class="win-dialog"><div class="win-dialog-title">Information</div><p>Hello! Button clicked.</p><span class="win-ok">OK</span></div>';
  if (lesson.id === "textbox") content = '<div class="win-fields"><label>Enter your name:</label><div class="win-input">Kamal</div><button class="win-button">Greet</button><strong>Hello, Kamal!</strong></div>';
  if (lesson.id === "calculator") content = '<div class="win-fields"><div class="win-input">12</div><div class="win-input">8</div><button class="win-button">Add</button><strong>Answer: 20</strong></div>';
  if (lesson.id === "combobox") content = '<div class="win-fields"><div class="win-input">HNDIT　⌄</div><button class="win-button">Show Selection</button><strong>Selected course: HNDIT</strong></div>';
  if (lesson.id === "choices") content = '<div class="win-fields win-options"><span>◉ Day　　◯ Weekend</span><span>☑ C#　　☑ Web Design</span><button class="win-button">Show Choices</button><strong>Time: Day | Subjects: C# Web Design</strong></div>';
  return `<div class="win-preview"><div class="win-title">▣ ${titles[lesson.id]} <span>— □ ×</span></div><div class="win-canvas ${content ? "centered" : ""}">${content}</div></div>`;
}
function renderCSharp() {
  const index = Math.max(0, csharpLessons.findIndex((item) => item.id === selectedCSharp));
  const lesson = csharpLessons[index];
  return breadcrumbs("C# Practicals") + `
    <section class="lesson-hero violet"><div class="lesson-icon">⌘</div><div><div class="eyebrow">VISUAL APPLICATION · PRACTICAL NOTES</div><h1>C# Windows Forms</h1><p>Six practical examples with complete code, explanations and expected Windows application outputs.</p></div></section>
    <div class="csharp-progress"><div><strong>Part 01</strong><span>Windows Forms fundamentals</span></div><span class="lesson-count">6 PRACTICALS</span></div>
    <div class="lesson-layout">
      <aside class="lesson-sidebar csharp-sidebar"><span class="sidebar-label">PRACTICAL LIST</span>
        ${csharpLessons.map((item, i) => `<button data-csharp="${item.id}" class="sidebar-item ${item.id === lesson.id ? "selected" : ""}"><span class="lesson-number">${String(i+1).padStart(2,"0")}</span><span>${escapeHTML(item.title)}</span></button>`).join("")}
        <div class="sidebar-tip">▤ Select a practical to view its code and explanation.</div>
      </aside>
      <div class="lesson-main">
        <section class="content-panel csharp-topic" id="topic">${panelHeading("01",escapeHTML(lesson.title),lesson.level+" · Windows Forms")}<p class="practical-goal">${escapeHTML(lesson.goal)}</p><div class="concept-note">▤ <span><strong>Before you run it:</strong> Create a separate Windows Forms project for each example. These examples use programmatic controls, so you do not need to design the form in the Visual Studio designer.</span></div></section>
        <section class="content-panel" id="code">${panelHeading("02","Complete source code","Copy the code into the project's main form file.")}<div class="code-placeholder csharp-code"><div class="code-toolbar"><span><i></i><i></i><i></i></span><span>Form1.cs · C#</span><button class="copy-code" data-copy="csharp">▣ Copy code</button></div><pre><code id="lesson-code">${escapeHTML(lesson.code)}</code></pre></div></section>
        <section class="content-panel" id="explanation">${panelHeading("03","How the code works","Understand the purpose of the important statements.")}<div class="code-explanations">${lesson.explanation.map(([term, description], i) => `<article class="code-explanation"><span>${String(i+1).padStart(2,"0")}</span><div><code>${escapeHTML(term)}</code><p>${escapeHTML(description)}</p></div></article>`).join("")}</div></section>
        <section class="content-panel" id="output">${panelHeading("04","Expected output","A visual representation of the Windows Forms application.")}<div class="win-output-label"><span>▣ WINDOWS FORMS OUTPUT</span><span>Illustrative preview</span></div>${csharpPreview(lesson)}<p class="output-description">${escapeHTML(lesson.output)}</p><div class="output-disclaimer">✓ This is an illustrative UI preview, not a running Windows desktop application.</div></section>
        <section class="content-panel setup-panel">${panelHeading("05","How to run in Visual Studio","Follow these steps for each practical.")}<ol class="setup-steps"><li>Open Visual Studio and select <strong>Create a new project</strong>.</li><li>Choose <strong>Windows Forms App</strong> (C#), preferably the .NET version installed on your computer.</li><li>Name the project, then open the main form code file.</li><li>Replace the generated form code with the selected practical's code. Keep only one <code>Main()</code> entry point in the project.</li><li>Press <strong>F5</strong> or click Start to run the application.</li></ol><div class="concept-note warning-note">⚠ <span><strong>Important:</strong> Each example is a separate complete program and contains its own <code>Main()</code> method. Do not paste all six examples into one project at the same time. If your project already has a <code>Program.cs</code> entry point, remove or adapt the duplicate entry point before building.</span></div></section>
        <div class="next-practical"><button data-prev-csharp ${index===0?"disabled":""}>← Previous practical</button><button data-next-csharp ${index===csharpLessons.length-1?"disabled":""}>Next practical →</button></div>
      </div>
    </div>`;
}
function renderWebDesign() {
  const index = Math.max(0, webLessons.findIndex((item) => item.id === selectedWeb));
  const lesson = webLessons[index];
  const preview = lesson.code.replace(/<!DOCTYPE html>/i, "").trim();
  return breadcrumbs("Web Design Practicals") + `
    <section class="lesson-hero cyan"><div class="lesson-icon">◎</div><div><div class="eyebrow">HTML · WEB DESIGN FUNDAMENTALS</div><h1>HTML Basic Tags</h1><p>Learn the structure of an HTML document, common elements and the attributes used with them.</p></div></section>
    <div class="csharp-progress"><div><strong>Part 01</strong><span>HTML document structure and basic text elements</span></div><span class="lesson-count">6 TOPICS</span></div>
    <div class="lesson-layout">
      <aside class="lesson-sidebar csharp-sidebar"><span class="sidebar-label">HTML TAGS</span>
        ${webLessons.map((item, i) => `<button data-web="${item.id}" class="sidebar-item ${item.id === lesson.id ? "selected" : ""}"><span class="lesson-number">${String(i+1).padStart(2,"0")}</span><span>${escapeHTML(item.tag)}</span></button>`).join("")}
        <div class="sidebar-tip">▤ Select a tag to study its purpose, code, attributes and browser output.</div>
      </aside>
      <div class="lesson-main">
        <section class="content-panel csharp-topic" id="topic">${panelHeading("01",escapeHTML(lesson.title),lesson.level+" · HTML")}<p class="practical-goal">${escapeHTML(lesson.purpose)}</p><div class="concept-note">ⓘ <span>${escapeHTML(lesson.note)}</span></div></section>
        <section class="content-panel" id="code">${panelHeading("02","HTML source code","A complete HTML5 example. Copy it and save it as index.html.")}<div class="code-placeholder csharp-code"><div class="code-toolbar"><span><i></i><i></i><i></i></span><span>index.html · HTML5</span><button class="copy-code" data-copy="web">▣ Copy code</button></div><pre><code id="lesson-code">${escapeHTML(lesson.code)}</code></pre></div></section>
        <section class="content-panel" id="explanation">${panelHeading("03","Attributes","Attributes provide extra information or settings for an HTML element.")}<div class="html-attribute-intro"><code>&lt;element attribute="value"&gt;Content&lt;/element&gt;</code><p>Write attributes inside the opening tag. Most attribute values should be placed inside quotation marks.</p></div><div class="code-explanations">${lesson.attributes.map(([term, description], i) => `<article class="code-explanation"><span>${String(i+1).padStart(2,"0")}</span><div><code>${escapeHTML(term)}</code><p>${escapeHTML(description)}</p></div></article>`).join("")}</div><div class="html-global-note"><strong>Remember — common global attributes</strong><p>These can be used on most HTML elements: <code>id</code>, <code>class</code>, <code>style</code>, <code>title</code>, <code>lang</code>, <code>dir</code>, <code>hidden</code>, <code>tabindex</code> and <code>data-*</code>. Not every element accepts every attribute; use valid attributes for the element.</p></div></section>
        <section class="content-panel" id="output">${panelHeading("04","Live output preview","This preview renders the HTML example in a browser-like frame.")}<div class="win-output-label"><span>▣ BROWSER OUTPUT</span><span>◉ Live HTML preview</span></div><div class="html-preview-frame"><div class="html-preview-bar"><span>●</span><span>Local preview · ${lesson.id}.html</span></div><iframe id="html-live-preview" title="${escapeHTML(lesson.title)} output preview" sandbox=""></iframe></div></section>
        <section class="content-panel setup-panel">${panelHeading("05","How to run this HTML file","Try the practical on your Windows 11 laptop.")}<ol class="setup-steps"><li>Open Notepad or Visual Studio Code.</li><li>Copy the HTML source code above and paste it into a new file.</li><li>Save the file with the name <code>index.html</code>. Make sure it is not saved as <code>index.html.txt</code>.</li><li>Double-click <code>index.html</code> or open it with Chrome, Edge or Firefox.</li><li>Change the text or attributes, save the file and refresh the browser to see your changes.</li></ol></section>
      </div>
    </div>`;
}
function render() {
  const route = currentRoute();
  page.className = "page-shell" + (route === "/csharp" || route === "/web-design" ? " lesson-shell" : "");
  page.innerHTML = route === "/csharp" ? renderCSharp() : route === "/web-design" ? renderWebDesign() : renderHome();
  document.querySelectorAll("[data-route]").forEach((link) => link.classList.toggle("active", link.dataset.route === route));
  const iframe = document.getElementById("html-live-preview");
  if (iframe) iframe.srcdoc = webLessons.find((item) => item.id === selectedWeb).code.replace(/<!DOCTYPE html>/i, "").trim();
}
document.addEventListener("click", async (event) => {
  const csharpButton = event.target.closest("[data-csharp]");
  if (csharpButton) { selectedCSharp = csharpButton.dataset.csharp; render(); return; }
  const webButton = event.target.closest("[data-web]");
  if (webButton) { selectedWeb = webButton.dataset.web; render(); return; }
  if (event.target.closest("[data-prev-csharp]")) {
    const i = csharpLessons.findIndex((item) => item.id === selectedCSharp);
    selectedCSharp = csharpLessons[Math.max(0, i - 1)].id; render(); return;
  }
  if (event.target.closest("[data-next-csharp]")) {
    const i = csharpLessons.findIndex((item) => item.id === selectedCSharp);
    selectedCSharp = csharpLessons[Math.min(csharpLessons.length - 1, i + 1)].id; render(); return;
  }
  const copyButton = event.target.closest("[data-copy]");
  if (copyButton) {
    const source = copyButton.dataset.copy === "csharp"
      ? csharpLessons.find((item) => item.id === selectedCSharp).code
      : webLessons.find((item) => item.id === selectedWeb).code;
    try {
      await navigator.clipboard.writeText(source);
      copyButton.textContent = "✓ Copied";
      setTimeout(() => { if (copyButton.isConnected) copyButton.textContent = "▣ Copy code"; }, 1500);
    } catch { copyButton.textContent = "Select and copy"; }
  }
});
window.addEventListener("hashchange", render);
render();
