using System;
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
}
