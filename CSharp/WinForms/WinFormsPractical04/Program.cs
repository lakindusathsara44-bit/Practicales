using System;
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
                double a;
                double b;
                if (double.TryParse(first.Text, out a) &&
                    double.TryParse(second.Text, out b))
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
}
