using System;
using System.Drawing;
using System.Windows.Forms;

namespace Week1HelloWorld
{
    public class Program
    {
        [STAThread]
        public static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());
        }
    }

    public class Form1 : Form
    {
        private Button btnClickThis;
        private Label lblHelloWorld;

        public Form1()
        {
            Text = "HelloWorld";
            StartPosition = FormStartPosition.CenterScreen;
            ClientSize = new Size(420, 220);

            btnClickThis = new Button();
            btnClickThis.Name = "btnClickThis";
            btnClickThis.Text = "Click this";
            btnClickThis.Location = new Point(145, 55);
            btnClickThis.Size = new Size(120, 32);
            btnClickThis.Click += btnClickThis_Click;

            lblHelloWorld = new Label();
            lblHelloWorld.Name = "lblHelloWorld";
            lblHelloWorld.Text = "label1";
            lblHelloWorld.AutoSize = true;
            lblHelloWorld.Location = new Point(165, 110);

            Controls.Add(btnClickThis);
            Controls.Add(lblHelloWorld);
        }

        private void btnClickThis_Click(object sender, EventArgs e)
        {
            lblHelloWorld.Text = "Hello World!";
        }
    }
}