using System;

namespace ConsolePractical03
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("First number: ");
            double first = Convert.ToDouble(Console.ReadLine());
            Console.Write("Second number: ");
            double second = Convert.ToDouble(Console.ReadLine());

            double total = first + second;
            Console.WriteLine("Total = " + total);
        }
    }
}
