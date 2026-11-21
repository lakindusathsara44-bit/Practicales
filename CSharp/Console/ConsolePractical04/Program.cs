using System;

namespace ConsolePractical04
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter a number: ");
            int number;
            if (int.TryParse(Console.ReadLine(), out number))
            {
                if (number > 0)
                    Console.WriteLine("Positive number");
                else if (number < 0)
                    Console.WriteLine("Negative number");
                else
                    Console.WriteLine("Zero");
            }
            else
            {
                Console.WriteLine("Please enter a valid integer.");
            }
        }
    }
}
