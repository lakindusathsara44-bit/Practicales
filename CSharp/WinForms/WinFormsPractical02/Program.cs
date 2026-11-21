using System;
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
}
