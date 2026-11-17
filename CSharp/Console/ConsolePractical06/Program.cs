using System;

namespace ConsolePractical06
{
    internal class Program
    {
        static int CalculateTotal(int[] values)
        {
            int total = 0;
            foreach (int value in values)
                total += value;
            return total;
        }

        static void Main(string[] args)
        {
            int[] marks = { 75, 80, 90, 65 };
            int total = CalculateTotal(marks);
            Console.WriteLine("Total marks: " + total);
            Console.WriteLine("Average: " + ((double)total / marks.Length));
        }
    }
}
