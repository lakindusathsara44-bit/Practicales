using System;
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
}
