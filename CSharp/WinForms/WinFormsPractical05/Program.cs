using System;
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
}
