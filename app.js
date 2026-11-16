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
  },
  {
    "id": "frames",
    "tag": "Frames",
    "title": "Frames and Inline Frames",
    "level": "INTERMEDIATE",
    "purpose": "Frames divide or embed browsing areas. Modern HTML uses the <iframe> element to embed another page or document. The old <frameset>, <frame> and <noframes> elements belong to obsolete HTML frameset documents and must not be used in new HTML5 pages.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Inline Frame Example</title>\n</head>\n<body>\n  <h1>My Website</h1>\n  <p>The content below is displayed inside an inline frame.</p>\n  <iframe\n    title=\"Sample embedded content\"\n    name=\"sampleFrame\"\n    width=\"600\"\n    height=\"260\"\n    loading=\"lazy\"\n    srcdoc=\"&lt;h2&gt;Welcome to the frame&lt;/h2&gt;&lt;p&gt;This content belongs to a separate embedded document.&lt;/p&gt;\"\n    sandbox=\"allow-forms\"\n    referrerpolicy=\"strict-origin-when-cross-origin\"\n    allow=\"fullscreen\"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>",
    "attributes": [],
    "attributeGroups": [
      {
        "title": "Modern <iframe> attributes",
        "items": [
          [
            "src",
            "The URL of the page to embed. Use a trusted URL and remember that some websites prevent being displayed inside frames."
          ],
          [
            "srcdoc",
            "Supplies HTML markup directly for the embedded document. When both src and srcdoc are present, srcdoc normally takes priority."
          ],
          [
            "name",
            "Gives the browsing context a name. Links and forms can target this frame by using the same name."
          ],
          [
            "width",
            "Sets the frame's width in CSS pixels. Use CSS for responsive sizing."
          ],
          [
            "height",
            "Sets the frame's height in CSS pixels. Use CSS when the layout needs to adapt to screen size."
          ],
          [
            "loading",
            "Controls loading behaviour: \"eager\" loads immediately; \"lazy\" may defer loading until the frame is near the viewport."
          ],
          [
            "allow",
            "Applies a Permissions Policy to features available inside the frame, for example allow=\"fullscreen\"."
          ],
          [
            "allowfullscreen",
            "Boolean attribute that allows the embedded page to request fullscreen display, subject to browser policy."
          ],
          [
            "sandbox",
            "Applies security restrictions. An empty sandbox is most restrictive; add only the tokens the embedded content genuinely needs, such as allow-forms."
          ],
          [
            "referrerpolicy",
            "Controls which referrer information is sent when fetching the framed resource, for example strict-origin-when-cross-origin."
          ],
          [
            "align (deprecated)",
            "Old presentational attribute for aligning a frame. Use CSS such as vertical-align or display rules instead."
          ],
          [
            "credentialless",
            "Experimental/limited-support boolean attribute that loads the iframe in a credentialless context. Check browser support before using it."
          ],
          [
            "browsingtopics",
            "Experimental privacy-related boolean attribute; support and behaviour can change, so check current browser compatibility before using it."
          ],
          [
            "csp",
            "Experimental attribute that applies a Content Security Policy to the embedded document where supported."
          ],
          [
            "privateToken",
            "Experimental/limited-support attribute for a Private State Token request. Check browser support and current specifications before using it."
          ],
          [
            "allowpaymentrequest",
            "Deprecated legacy boolean attribute that allowed the Payment Request API in an iframe. Do not use it in new pages."
          ],
          [
            "Global attributes",
            "An iframe also supports applicable global attributes such as id, class, style, title, lang, dir, hidden, tabindex and data-*."
          ]
        ]
      },
      {
        "title": "Legacy <frameset> attributes — obsolete",
        "items": [
          [
            "rows",
            "Splits the browser window into horizontal rows, for example rows=\"25%,75%\"."
          ],
          [
            "cols",
            "Splits the browser window into vertical columns, for example cols=\"30%,70%\"."
          ],
          [
            "border",
            "Sets the border thickness between frames in old implementations."
          ],
          [
            "frameborder",
            "Historically shows or hides frame borders, commonly \"0\" or \"1\"."
          ],
          [
            "framespacing",
            "Legacy Internet Explorer attribute that controls the spacing between frames."
          ],
          [
            "bordercolor",
            "Non-standard legacy attribute used by some browsers to colour frame borders."
          ]
        ]
      },
      {
        "title": "Legacy <frame> attributes — obsolete",
        "items": [
          [
            "src",
            "The document URL loaded into that old frame."
          ],
          [
            "name",
            "Names the frame so links can target it."
          ],
          [
            "scrolling",
            "Controls scrollbars in older implementations: \"yes\", \"no\" or \"auto\"."
          ],
          [
            "noresize",
            "Boolean legacy attribute that prevents users from resizing a frame."
          ],
          [
            "marginwidth",
            "Sets the left and right internal margins in pixels in legacy frames."
          ],
          [
            "marginheight",
            "Sets the top and bottom internal margins in pixels in legacy frames."
          ],
          [
            "longdesc",
            "Legacy URL to a longer description of the frame content; not supported as a modern frame feature."
          ],
          [
            "frameborder",
            "Legacy border visibility setting, commonly \"0\" or \"1\"."
          ]
        ]
      }
    ],
    "components": [
      [
        "<iframe>",
        "Modern inline frame. Embeds another HTML page or a self-contained HTML document within the current page.",
        "CURRENT"
      ],
      [
        "<frameset>",
        "Legacy container that divided the browser window into rows or columns. Replaced the normal body in frameset documents.",
        "OBSOLETE"
      ],
      [
        "<frame>",
        "Legacy child frame placed inside a frameset. It is not a valid element in modern HTML.",
        "OBSOLETE"
      ],
      [
        "<noframes>",
        "Legacy fallback content for browsers that could not display framesets. It is not needed for modern iframe use.",
        "OBSOLETE"
      ]
    ],
    "legacyCode": "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Frameset//EN\"\n  \"http://www.w3.org/TR/html4/frameset.dtd\">\n<html>\n<head><title>Old Frameset Example</title></head>\n<frameset cols=\"30%,70%\">\n  <frame src=\"menu.html\" name=\"menuFrame\">\n  <frame src=\"content.html\" name=\"contentFrame\">\n  <noframes>\n    <body>Your browser cannot display this old frameset.</body>\n  </noframes>\n</frameset>\n</html>",
    "legacyNote": "This frameset example is included for historical study only. The frameset, frame and noframes elements are obsolete and are not supported in HTML5. Use iframe for an embedded document, or use modern CSS layout (Flexbox/Grid) to divide a page into sections.",
    "globalNote": "Use global attributes such as id, class, style, title, lang, dir, hidden, tabindex and data-* where appropriate. For iframe, always provide a meaningful title and apply sandbox restrictions carefully."
  },
  {
    "id": "forms",
    "tag": "Form",
    "title": "HTML Forms and Form Controls",
    "level": "INTERMEDIATE",
    "purpose": "An HTML form collects information from users and submits it for processing. Forms are built from controls such as input, textarea, select, button, labels and field groups. Browser validation can check common input rules before submission.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Student Registration Form</title>\n</head>\n<body>\n  <h1>Student Registration</h1>\n  <form id=\"studentForm\" action=\"#\" method=\"get\" autocomplete=\"on\">\n    <fieldset>\n      <legend>Personal details</legend>\n      <label for=\"studentName\">Full name:</label>\n      <input type=\"text\" id=\"studentName\" name=\"studentName\" autocomplete=\"name\" placeholder=\"Enter your name\" minlength=\"2\" maxlength=\"60\" required>\n      <label for=\"studentEmail\">Email:</label>\n      <input type=\"email\" id=\"studentEmail\" name=\"email\" autocomplete=\"email\" placeholder=\"name@example.com\" required>\n      <label for=\"studentAge\">Age:</label>\n      <input type=\"number\" id=\"studentAge\" name=\"age\" min=\"16\" max=\"100\" step=\"1\">\n      <label for=\"studentPhone\">Phone number:</label>\n      <input type=\"tel\" id=\"studentPhone\" name=\"phone\" inputmode=\"numeric\" pattern=\"[0-9]{10}\" placeholder=\"10 digits\">\n    </fieldset>\n    <fieldset>\n      <legend>Course preferences</legend>\n      <label for=\"course\">Course:</label>\n      <select id=\"course\" name=\"course\" required>\n        <option value=\"\">Choose a course</option>\n        <optgroup label=\"Higher National Diplomas\">\n          <option value=\"HNDIT\">HNDIT</option>\n          <option value=\"HNDA\">HNDA</option>\n        </optgroup>\n        <option value=\"HNDE\">HNDE</option>\n      </select>\n      <p>Study mode:</p>\n      <label><input type=\"radio\" name=\"studyMode\" value=\"full-time\" checked> Full time</label>\n      <label><input type=\"radio\" name=\"studyMode\" value=\"part-time\"> Part time</label>\n      <label><input type=\"checkbox\" name=\"newsletter\" value=\"yes\"> Receive updates</label>\n      <label for=\"startDate\">Preferred start date:</label>\n      <input type=\"date\" id=\"startDate\" name=\"startDate\">\n      <label for=\"document\">Supporting document:</label>\n      <input type=\"file\" id=\"document\" name=\"document\" accept=\".pdf,.png,.jpg\" multiple>\n    </fieldset>\n    <label for=\"message\">Additional message:</label>\n    <textarea id=\"message\" name=\"message\" rows=\"4\" cols=\"35\" maxlength=\"300\" placeholder=\"Write a short message\"></textarea>\n    <label for=\"city\">City (suggestions):</label>\n    <input id=\"city\" name=\"city\" list=\"cities\">\n    <datalist id=\"cities\"><option value=\"Colombo\"><option value=\"Kandy\"><option value=\"Kurunegala\"></datalist>\n    <input type=\"hidden\" name=\"formVersion\" value=\"1\">\n    <p>Profile completion: <progress max=\"100\" value=\"75\">75%</progress></p>\n    <p>Readiness: <meter min=\"0\" max=\"100\" low=\"30\" high=\"80\" optimum=\"90\" value=\"85\">85%</meter></p>\n    <output name=\"formStatus\" for=\"studentName\">Ready to submit</output>\n    <button type=\"submit\">Submit form</button>\n    <button type=\"reset\">Clear form</button>\n  </form>\n</body>\n</html>",
    "attributes": [],
    "attributeGroups": [
      {
        "title": "The <form> element attributes",
        "items": [
          [
            "accept-charset",
            "Character encoding accepted by the form. Modern HTML requires UTF-8: accept-charset=\"UTF-8\"."
          ],
          [
            "accept (obsolete)",
            "Deprecated legacy attribute that attempted to specify accepted content types. Do not use it on form; configure accept on file inputs instead."
          ],
          [
            "action",
            "URL that receives the submitted form data. Use a real server endpoint in a production website."
          ],
          [
            "autocomplete",
            "Turns autofill hints on or off for the form: \"on\" or \"off\". Individual controls can also specify their own autocomplete token."
          ],
          [
            "enctype",
            "Encoding for POST data: application/x-www-form-urlencoded (default), multipart/form-data (file uploads), or text/plain (rarely used)."
          ],
          [
            "method",
            "Submission method: \"get\" appends data to the URL, \"post\" sends it in the request body, and \"dialog\" closes a dialog form."
          ],
          [
            "name",
            "Names the form so it can be referenced by scripts or the document."
          ],
          [
            "novalidate",
            "Boolean attribute that disables the browser's built-in constraint validation when the form is submitted."
          ],
          [
            "rel",
            "Defines relationship tokens for the destination, such as noopener or noreferrer when applicable."
          ],
          [
            "target",
            "Browsing context for the response: \"_self\", \"_blank\", \"_parent\", \"_top\", or the name of a frame."
          ]
        ]
      },
      {
        "title": "The <input> element attributes",
        "items": [
          [
            "type",
            "Chooses the input control and its behaviour. See the complete input type list below."
          ],
          [
            "name",
            "Name used as the key when the control's value is submitted. A disabled or unnamed control is not submitted."
          ],
          [
            "value",
            "Initial or current value. For submit, reset, button and hidden inputs it defines the submitted or displayed value."
          ],
          [
            "id",
            "Unique identifier, commonly used by a label's for attribute and by CSS or JavaScript."
          ],
          [
            "autocomplete",
            "Autofill hint, such as name, email, username, current-password, postal-code or one-time-code."
          ],
          [
            "autofocus",
            "Boolean attribute requesting focus when the page is loaded. Use sparingly; it can disrupt keyboard and screen-reader users."
          ],
          [
            "disabled",
            "Boolean attribute that makes the control unavailable and excludes it from form submission."
          ],
          [
            "form",
            "Associates the input with a form by that form's id, even when the input is outside the form element."
          ],
          [
            "required",
            "Requires a value before the form can pass browser constraint validation."
          ],
          [
            "readonly",
            "Prevents the user from editing the value while still allowing it to be submitted. Not supported by every input type."
          ],
          [
            "placeholder",
            "Short hint shown when the control is empty. Do not use it instead of a visible label."
          ],
          [
            "min",
            "Minimum permitted numeric or date/time value, for applicable input types."
          ],
          [
            "max",
            "Maximum permitted numeric or date/time value, for applicable input types."
          ],
          [
            "step",
            "Allowed increment for number, range and applicable date/time controls; use any for unrestricted decimal steps."
          ],
          [
            "minlength",
            "Minimum number of characters for supported text-like input types."
          ],
          [
            "maxlength",
            "Maximum number of characters for supported text-like input types."
          ],
          [
            "pattern",
            "Regular expression that a supported text-like value must match. Do not include slash delimiters."
          ],
          [
            "size",
            "Visible character width for supported text-like controls; it does not limit the number of characters."
          ],
          [
            "multiple",
            "Allows multiple values for supported types, such as email and file."
          ],
          [
            "accept",
            "File-type hint for file inputs, such as accept=\".pdf,image/*\". It is not a security check."
          ],
          [
            "capture",
            "Hints whether a file input should use the device camera or microphone where supported."
          ],
          [
            "list",
            "Connects the input to a datalist by id to offer suggestions."
          ],
          [
            "checked",
            "Boolean attribute that initially selects a checkbox or radio button."
          ],
          [
            "dirname",
            "Submits the directionality of the control's text using the named additional form field."
          ],
          [
            "alt",
            "Alternative text for an image-type input."
          ],
          [
            "src",
            "Image URL used by an input of type image."
          ],
          [
            "width and height",
            "Dimensions for an image-type input."
          ],
          [
            "formaction",
            "Overrides the form action for a submit button or image input."
          ],
          [
            "formenctype",
            "Overrides the form enctype for a submit button or image input."
          ],
          [
            "formmethod",
            "Overrides the form method for a submit button or image input."
          ],
          [
            "formnovalidate",
            "Skips constraint validation for that submit button or image input."
          ],
          [
            "formtarget",
            "Overrides the form target for that submit button or image input."
          ]
        ]
      },
      {
        "title": "Other form elements and their attributes",
        "items": [
          [
            "<label for>",
            "The for value must match the id of the control it labels. A label can also wrap its control. Labels improve usability and accessibility."
          ],
          [
            "<textarea>",
            "Common attributes: name, rows, cols, minlength, maxlength, placeholder, required, readonly, disabled, form, dirname, wrap, autocomplete and autofocus."
          ],
          [
            "<button>",
            "Common attributes: type (submit, reset or button), name, value, disabled, autofocus, form, formaction, formenctype, formmethod, formnovalidate, formtarget, popovertarget and popovertargetaction."
          ],
          [
            "<select>",
            "Common attributes: name, required, disabled, multiple, size, form, autocomplete and autofocus."
          ],
          [
            "<option>",
            "Common attributes: value, label, selected and disabled. If value is omitted, option text is used as its value."
          ],
          [
            "<optgroup>",
            "Common attributes: label and disabled. Groups related options inside a select."
          ],
          [
            "<fieldset>",
            "Common attributes: name, form and disabled. Groups related controls; disabled fieldsets disable most descendant controls."
          ],
          [
            "<legend>",
            "Provides a caption for its parent fieldset. It has no commonly used element-specific attributes beyond global attributes."
          ],
          [
            "<datalist>",
            "Provides suggested values for an input whose list attribute references the datalist id. It has no common element-specific attributes."
          ],
          [
            "<output>",
            "Common attributes: for (space-separated ids of related controls), form and name."
          ],
          [
            "<progress>",
            "Attributes: value (current progress) and max (maximum value). Without value, it represents indeterminate progress."
          ],
          [
            "<meter>",
            "Attributes: value, min, max, low, high and optimum. Represents a measurement within a known range, not task progress."
          ],
          [
            "<object>",
            "The object element can be associated with a form using its form attribute, but it is not a normal text-entry control."
          ]
        ]
      },
      {
        "title": "Validation, accessibility and submission notes",
        "items": [
          [
            "required",
            "Makes a supported control mandatory."
          ],
          [
            "type=\"email\" / type=\"url\"",
            "Applies built-in format checks for email addresses and URLs; it does not prove that an address exists."
          ],
          [
            "min / max / step",
            "Set numeric or date/time boundaries and increments."
          ],
          [
            "minlength / maxlength",
            "Set minimum and maximum text lengths."
          ],
          [
            "pattern",
            "Adds a regular-expression constraint to supported text inputs."
          ],
          [
            "disabled vs readonly",
            "Disabled controls cannot be focused and are not submitted. Readonly controls cannot be edited but are generally submitted."
          ],
          [
            "aria-* and visible labels",
            "Use accessible names and descriptions. Prefer a real label, fieldset and legend; ARIA supplements rather than replaces them."
          ],
          [
            "Security",
            "Client-side validation improves usability but can be bypassed. Always validate and safely process submitted data on the server."
          ]
        ]
      }
    ],
    "components": [
      [
        "<form>",
        "Container that defines where and how controls submit data.",
        "CORE"
      ],
      [
        "<input>",
        "Single-line control. Its type attribute creates text boxes, checkboxes, radio buttons, file pickers, date controls and more.",
        "CORE"
      ],
      [
        "<textarea>",
        "Multi-line text entry control.",
        "CORE"
      ],
      [
        "<button>",
        "Clickable submit, reset or general-purpose button.",
        "CORE"
      ],
      [
        "<select>",
        "Drop-down or list selection control.",
        "CORE"
      ],
      [
        "<option>",
        "One selectable choice inside a select or datalist.",
        "CORE"
      ],
      [
        "<optgroup>",
        "Labelled group of options inside a select.",
        "CORE"
      ],
      [
        "<label>",
        "Accessible text label for a form control.",
        "CORE"
      ],
      [
        "<fieldset>",
        "Groups related controls together.",
        "CORE"
      ],
      [
        "<legend>",
        "Caption for a fieldset.",
        "CORE"
      ],
      [
        "<datalist>",
        "Suggestions associated with an input through its list attribute.",
        "CORE"
      ],
      [
        "<output>",
        "Displays the result of a calculation or user action.",
        "OUTPUT"
      ],
      [
        "<progress>",
        "Shows the completion progress of a task.",
        "OUTPUT"
      ],
      [
        "<meter>",
        "Shows a scalar measurement within a known range.",
        "OUTPUT"
      ],
      [
        "<object>",
        "Embeds an external resource and can be associated with a form using its form attribute.",
        "ADVANCED"
      ],
      [
        "<selectedcontent>",
        "Special element used by customizable select controls to display selected option content in a button-based select interface. Browser support and usage are evolving.",
        "ADVANCED"
      ]
    ],
    "inputTypes": [
      [
        "text",
        "One-line plain text."
      ],
      [
        "password",
        "Masked password entry."
      ],
      [
        "email",
        "Email address; supports email-format validation."
      ],
      [
        "number",
        "Numeric value with optional min, max and step."
      ],
      [
        "tel",
        "Telephone number; use pattern or server validation for rules."
      ],
      [
        "url",
        "Web address with basic URL validation."
      ],
      [
        "search",
        "Search text field."
      ],
      [
        "date",
        "Calendar date (year, month and day)."
      ],
      [
        "time",
        "Time of day."
      ],
      [
        "datetime-local",
        "Local date and time without a time-zone offset."
      ],
      [
        "month",
        "Year and month."
      ],
      [
        "week",
        "Year and week number."
      ],
      [
        "color",
        "Colour picker."
      ],
      [
        "range",
        "Slider for a numeric range."
      ],
      [
        "checkbox",
        "Independent on/off option; multiple checkboxes may be selected."
      ],
      [
        "radio",
        "One choice from a group sharing the same name."
      ],
      [
        "file",
        "File picker; combine with accept and multiple where appropriate."
      ],
      [
        "hidden",
        "Hidden value submitted with the form; never use it for secrets."
      ],
      [
        "submit",
        "Submits the form."
      ],
      [
        "image",
        "Image-based submit control; uses src, alt, width and height."
      ],
      [
        "reset",
        "Restores controls to their initial values."
      ],
      [
        "button",
        "General-purpose input button; script behaviour must be added separately."
      ]
    ],
    "globalNote": "Form controls also use common global attributes such as accesskey, autocapitalize, class, contenteditable, data-*, dir, draggable, enterkeyhint, hidden, id, inert, inputmode, lang, nonce, popover, role, spellcheck, style, tabindex, title and translate where applicable. For accessibility, connect every control to a visible label, group related controls with fieldset and legend, and provide clear validation messages."
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
  const outputNumber = String(4 + Number(Boolean(lesson.components)) + Number(Boolean(lesson.inputTypes)) + Number(Boolean(lesson.legacyCode))).padStart(2, "0");
  const setupNumber = String(Number(outputNumber) + 1).padStart(2, "0");
  return breadcrumbs("Web Design Practicals") + `
    <section class="lesson-hero cyan"><div class="lesson-icon">◎</div><div><div class="eyebrow">HTML · WEB DESIGN FUNDAMENTALS</div><h1>HTML Fundamentals</h1><p>Learn HTML structure, elements, frames, forms and the attributes that make them work.</p></div></section>
    <div class="csharp-progress"><div><strong>Part 01</strong><span>HTML structure, text, frames and forms</span></div><span class="lesson-count">${webLessons.length} TOPICS</span></div>
    <div class="lesson-layout">
      <aside class="lesson-sidebar csharp-sidebar"><span class="sidebar-label">HTML TOPICS</span>
        ${webLessons.map((item, i) => `<button data-web="${item.id}" class="sidebar-item ${item.id === lesson.id ? "selected" : ""}"><span class="lesson-number">${String(i+1).padStart(2,"0")}</span><span>${escapeHTML(item.tag)}</span></button>`).join("")}
        <div class="sidebar-tip">▤ Select a topic to study its purpose, components, attributes and browser output.</div>
      </aside>
      <div class="lesson-main">
        <section class="content-panel csharp-topic" id="topic">${panelHeading("01",escapeHTML(lesson.title),lesson.level+" · HTML")}<p class="practical-goal">${escapeHTML(lesson.purpose)}</p><div class="concept-note">ⓘ <span>${escapeHTML(lesson.note || lesson.globalNote || "")}</span></div></section>
        <section class="content-panel" id="code">${panelHeading("02","HTML source code","A complete HTML5 example. Copy it and save it as index.html.")}<div class="code-placeholder csharp-code"><div class="code-toolbar"><span><i></i><i></i><i></i></span><span>index.html · HTML5</span><button class="copy-code" data-copy="web">▣ Copy code</button></div><pre><code id="lesson-code">${escapeHTML(lesson.code)}</code></pre></div></section>
        <section class="content-panel" id="explanation">${panelHeading("03","Attributes","Attributes provide extra information or settings for an HTML element.")}<div class="html-attribute-intro"><code>&lt;element attribute="value"&gt;Content&lt;/element&gt;</code><p>Write attributes inside the opening tag. Most attribute values should be placed inside quotation marks.</p></div>${lesson.attributeGroups ? lesson.attributeGroups.map((group) => `<div class="html-attribute-group"><h3>${escapeHTML(group.title)}</h3><div class="code-explanations">${group.items.map(([term, description], i) => `<article class="code-explanation"><span>${String(i+1).padStart(2,"0")}</span><div><code>${escapeHTML(term)}</code><p>${escapeHTML(description)}</p></div></article>`).join("")}</div></div>`).join("") : `<div class="code-explanations">${lesson.attributes.map(([term, description], i) => `<article class="code-explanation"><span>${String(i+1).padStart(2,"0")}</span><div><code>${escapeHTML(term)}</code><p>${escapeHTML(description)}</p></div></article>`).join("")}</div>`}<div class="html-global-note"><strong>Remember — common global attributes</strong><p>${escapeHTML(lesson.globalNote || "Common global attributes include id, class, style, title, lang, dir, hidden, tabindex and data-*. Not every attribute applies meaningfully to every element.")}</p></div></section>
        ${lesson.components ? `<section class="content-panel" id="components">${panelHeading("04","HTML components and elements","The elements included in this topic and what each one does.")}<div class="html-component-grid">${lesson.components.map(([tag, description, status]) => `<article class="html-component-card"><div><code>${escapeHTML(tag)}</code>${status ? `<span class="html-status">${escapeHTML(status)}</span>` : ""}</div><p>${escapeHTML(description)}</p></article>`).join("")}</div></section>` : ""}
        ${lesson.inputTypes ? `<section class="content-panel" id="input-types">${panelHeading("05","All input types","The complete set of standard input type values for the HTML input element.")}<div class="html-input-grid">${lesson.inputTypes.map(([type, description]) => `<article class="html-input-card"><code>type="${escapeHTML(type)}"</code><p>${escapeHTML(description)}</p></article>`).join("")}</div></section>` : ""}
        ${lesson.legacyCode ? `<section class="content-panel" id="legacy-frames">${panelHeading("05","Old frameset syntax","Historical HTML 4 example — study only, do not use in modern projects.")}<div class="code-placeholder csharp-code"><div class="code-toolbar"><span><i></i><i></i><i></i></span><span>legacy-frames.html · HTML 4</span></div><pre><code>${escapeHTML(lesson.legacyCode)}</code></pre></div><div class="concept-note warning-note">⚠ <span>${escapeHTML(lesson.legacyNote)}</span></div></section>` : ""}
        <section class="content-panel" id="output">${panelHeading(outputNumber,"Live output preview","This preview renders the HTML example in a browser-like frame.")}<div class="win-output-label"><span>▣ BROWSER OUTPUT</span><span>◉ Live HTML preview</span></div><div class="html-preview-frame"><div class="html-preview-bar"><span>●</span><span>Local preview · ${lesson.id}.html</span></div><iframe id="html-live-preview" title="${escapeHTML(lesson.title)} output preview" sandbox="${lesson.id === "forms" ? "allow-forms" : ""}"></iframe></div></section>
        <section class="content-panel setup-panel">${panelHeading(setupNumber,"How to run this HTML file","Try the practical on your Windows 11 laptop.")}<ol class="setup-steps"><li>Open Notepad or Visual Studio Code.</li><li>Copy the HTML source code above and paste it into a new file.</li><li>Save the file with the name <code>index.html</code>. Make sure it is not saved as <code>index.html.txt</code>.</li><li>Double-click <code>index.html</code> or open it with Chrome, Edge or Firefox.</li><li>Change the text or attributes, save the file and refresh the browser to see your changes.</li></ol></section>
      </div>
    </div>`;
}
function render() {
  const route = currentRoute();
  page.className = "page-shell" + (route === "/csharp" || route === "/web-design" ? " lesson-shell" : "") + (route === "/web-design" ? " webdesign-page" : "");
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
