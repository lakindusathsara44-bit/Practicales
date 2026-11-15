import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BookOpen, CheckCircle2, Code2, Copy, GraduationCap, Monitor, Play, Terminal } from "lucide-react";

const lessons = [
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

function WindowPreview({ lesson }) {
  if (lesson.id === "form") return <div className="win-preview"><div className="win-title">▣ My First Windows Form <span>— □ ×</span></div><div className="win-canvas" /></div>;
  if (lesson.id === "button") return <div className="win-preview"><div className="win-title">▣ Button Click Example <span>— □ ×</span></div><div className="win-canvas centered"><button className="win-button">Click Me</button><div className="win-dialog"><div className="win-dialog-title">Information</div><p>Hello! Button clicked.</p><span className="win-ok">OK</span></div></div></div>;
  if (lesson.id === "textbox") return <div className="win-preview"><div className="win-title">▣ Greeting Application <span>— □ ×</span></div><div className="win-canvas win-fields"><label>Enter your name:</label><div className="win-input">Kamal</div><button className="win-button">Greet</button><strong>Hello, Kamal!</strong></div></div>;
  if (lesson.id === "calculator") return <div className="win-preview"><div className="win-title">▣ Addition Calculator <span>— □ ×</span></div><div className="win-canvas win-fields"><div className="win-input">12</div><div className="win-input">8</div><button className="win-button">Add</button><strong>Answer: 20</strong></div></div>;
  if (lesson.id === "combobox") return <div className="win-preview"><div className="win-title">▣ Course Selection <span>— □ ×</span></div><div className="win-canvas win-fields"><div className="win-input">HNDIT　　⌄</div><button className="win-button">Show Selection</button><strong>Selected course: HNDIT</strong></div></div>;
  return <div className="win-preview"><div className="win-title">▣ Options Example <span>— □ ×</span></div><div className="win-canvas win-fields win-options"><span>◉ Day　　◯ Weekend</span><span>☑ C#　　☑ Web Design</span><button className="win-button">Show Choices</button><strong>Time: Day | Subjects: C# Web Design</strong></div></div>;
}

export default function CSharpPage() {
  const [active, setActive] = useState(lessons[0].id);
  const [copied, setCopied] = useState(false);
  const lesson = lessons.find((item) => item.id === active) || lessons[0];

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(lesson.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="page-shell lesson-shell csharp-page">
      <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>C# Practicals</span></div>
      <section className="lesson-hero violet">
        <div className="lesson-icon"><Code2 size={26} /></div>
        <div><div className="eyebrow">VISUAL APPLICATION · PRACTICAL NOTES</div><h1>C# Windows Forms</h1><p>Six practical examples with complete code, explanations and expected Windows application outputs.</p></div>
      </section>
      <div className="csharp-progress"><div><strong>Part 01</strong><span>Windows Forms fundamentals</span></div><span className="lesson-count">{lessons.length} PRACTICALS</span></div>
      <div className="lesson-layout">
        <aside className="lesson-sidebar csharp-sidebar">
          <span className="sidebar-label">PRACTICAL LIST</span>
          {lessons.map((item, index) => <button key={item.id} className={active === item.id ? "sidebar-item selected" : "sidebar-item"} onClick={() => setActive(item.id)}><span className="lesson-number">{String(index + 1).padStart(2, "0")}</span><span>{item.title}</span></button>)}
          <div className="sidebar-tip"><BookOpen size={16} /><span>Select a practical to view its code and explanation.</span></div>
        </aside>
        <div className="lesson-main">
          <section className="content-panel csharp-topic" id="topic">
            <div className="panel-heading"><span className="step-index">01</span><div><h2>{lesson.title}</h2><p>{lesson.level} · Windows Forms</p></div></div>
            <p className="practical-goal">{lesson.goal}</p>
            <div className="concept-note"><BookOpen size={17} /><span><strong>Before you run it:</strong> Create a separate Windows Forms project for each example. These examples use programmatic controls, so you do not need to design the form in the Visual Studio designer.</span></div>
          </section>
          <section className="content-panel" id="code">
            <div className="panel-heading"><span className="step-index">02</span><div><h2>Complete source code</h2><p>Copy the code into the project's main form file.</p></div></div>
            <div className="code-placeholder csharp-code"><div className="code-toolbar"><span><i /><i /><i /></span><span>Form1.cs · C#</span><button onClick={copyCode} className="copy-code"><Copy size={13} /> {copied ? "Copied" : "Copy code"}</button></div><pre><code>{lesson.code}</code></pre></div>
          </section>
          <section className="content-panel" id="explanation">
            <div className="panel-heading"><span className="step-index">03</span><div><h2>How the code works</h2><p>Understand the purpose of the important statements.</p></div></div>
            <div className="code-explanations">{lesson.explanation.map(([term, description], index) => <article className="code-explanation" key={term}><span>{String(index + 1).padStart(2, "0")}</span><div><code>{term}</code><p>{description}</p></div></article>)}</div>
          </section>
          <section className="content-panel" id="output">
            <div className="panel-heading"><span className="step-index">04</span><div><h2>Expected output</h2><p>A visual representation of the Windows Forms application.</p></div></div>
            <div className="win-output-label"><span><Monitor size={14} /> WINDOWS FORMS OUTPUT</span><span>Illustrative preview</span></div>
            <WindowPreview lesson={lesson} />
            <p className="output-description">{lesson.output}</p>
            <div className="output-disclaimer"><CheckCircle2 size={15} /> This is an illustrative UI preview, not a running Windows desktop application.</div>
          </section>
          <section className="content-panel setup-panel">
            <div className="panel-heading"><span className="step-index">05</span><div><h2>How to run in Visual Studio</h2><p>Follow these steps for each practical.</p></div></div>
            <ol className="setup-steps"><li>Open Visual Studio and select <strong>Create a new project</strong>.</li><li>Choose <strong>Windows Forms App</strong> (C#), preferably the .NET version installed on your computer.</li><li>Name the project, then open the main form code file.</li><li>Replace the generated form code with the selected practical's code. Keep only one <code>Main()</code> entry point in the project.</li><li>Press <strong>F5</strong> or click Start to run the application.</li></ol>
            <div className="concept-note warning-note"><Terminal size={17} /><span><strong>Important:</strong> Each example is a separate complete program and contains its own <code>Main()</code> method. Do not paste all six examples into one project at the same time. If your project already has a <code>Program.cs</code> entry point, remove or adapt the duplicate entry point before building.</span></div>
          </section>
          <div className="next-practical"><button disabled={active === lessons[0].id} onClick={() => setActive(lessons[Math.max(0, lessons.findIndex((item) => item.id === active) - 1)].id)}>Previous practical</button><button disabled={active === lessons[lessons.length - 1].id} onClick={() => setActive(lessons[Math.min(lessons.length - 1, lessons.findIndex((item) => item.id === active) + 1)].id)}>Next practical <ArrowUpRight size={15} /></button></div>
        </div>
      </div>
    </main>
  );
}
