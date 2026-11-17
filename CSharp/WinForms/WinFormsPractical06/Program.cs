using System;
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
}
