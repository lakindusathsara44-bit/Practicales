using System;
using System.Drawing;
using System.Windows.Forms;

namespace Week2Calculator
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
        private TextBox txtNum1;
        private TextBox txtNum2;
        private TextBox txtResult;
        private Button btnPlus;
        private Button btnMinus;
        private Button btnMul;
        private Button btnDiv;

        public Form1()
        {
            Text = "Simple Calculator";
            StartPosition = FormStartPosition.CenterScreen;
            ClientSize = new Size(430, 270);

            Label lblNum1 = new Label();
            lblNum1.Text = "Number 1";
            lblNum1.Location = new Point(25, 28);
            lblNum1.AutoSize = true;

            Label lblNum2 = new Label();
            lblNum2.Text = "Number 2";
            lblNum2.Location = new Point(25, 68);
            lblNum2.AutoSize = true;

            Label lblResult = new Label();
            lblResult.Text = "Result";
            lblResult.Location = new Point(25, 108);
            lblResult.AutoSize = true;

            txtNum1 = new TextBox();
            txtNum1.Name = "txtNum1";
            txtNum1.Location = new Point(115, 24);
            txtNum1.Width = 250;

            txtNum2 = new TextBox();
            txtNum2.Name = "txtNum2";
            txtNum2.Location = new Point(115, 64);
            txtNum2.Width = 250;

            txtResult = new TextBox();
            txtResult.Name = "txtResult";
            txtResult.Location = new Point(115, 104);
            txtResult.Width = 250;
            txtResult.ReadOnly = true;

            btnPlus = CreateButton("btnPlus", "+", 25);
            btnMinus = CreateButton("btnMinus", "-", 115);
            btnMul = CreateButton("btnMul", "X", 205);
            btnDiv = CreateButton("btnDiv", "/", 295);

            btnPlus.Click += btnPlus_Click;
            btnMinus.Click += btnMinus_Click;
            btnMul.Click += btnMul_Click;
            btnDiv.Click += btnDiv_Click;

            Controls.AddRange(new Control[] {
                lblNum1, lblNum2, lblResult,
                txtNum1, txtNum2, txtResult,
                btnPlus, btnMinus, btnMul, btnDiv
            });
        }

        private Button CreateButton(string name, string text, int x)
        {
            Button button = new Button();
            button.Name = name;
            button.Text = text;
            button.Location = new Point(x, 165);
            button.Size = new Size(75, 36);
            return button;
        }

        private void btnPlus_Click(object sender, EventArgs e)
        {
            int num1 = Int32.Parse(txtNum1.Text);
            int num2 = Int32.Parse(txtNum2.Text);
            int result = num1 + num2;
            txtResult.Text = result.ToString();
        }

        private void btnMinus_Click(object sender, EventArgs e)
        {
            int num1 = Int32.Parse(txtNum1.Text);
            int num2 = Int32.Parse(txtNum2.Text);
            int result = num1 - num2;
            txtResult.Text = result.ToString();
        }

        private void btnMul_Click(object sender, EventArgs e)
        {
            int num1 = Int32.Parse(txtNum1.Text);
            int num2 = Int32.Parse(txtNum2.Text);
            int result = num1 * num2;
            txtResult.Text = result.ToString();
        }

        private void btnDiv_Click(object sender, EventArgs e)
        {
            int num1 = Int32.Parse(txtNum1.Text);
            int num2 = Int32.Parse(txtNum2.Text);
            int result = num1 / num2;
            txtResult.Text = result.ToString();
        }
    }
}