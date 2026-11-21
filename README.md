# Practicales — Education Platform

A lightweight practical-learning website built with **HTML, CSS and vanilla JavaScript**.

## Pages

- Home dashboard
- C# Windows Forms practicals — six original examples plus HNDIT1012 Week 1 and Week 2 lessons with source code and explanations
- Web Design practicals — six HTML topics with attributes, complete examples and live browser previews

## Run locally

No Node.js, npm, React, Vite or build command is required.

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Navigate between lessons using the top navigation.

## Project files

- `index.html` — page structure and navigation shell
- `styles.css` — responsive visual design
- `app.js` — lesson data, page rendering, navigation, copy-code actions and previews

The website uses hash-based navigation so it works directly on GitHub Pages without server-side routing.


## C# Console Application practicals

The C# Console section contains six guided examples: Hello World, variables and keyboard input, a basic calculator, if/else decisions, loops, and arrays with methods. Create a **Console App** project in Visual Studio and replace `Program.cs` with one example at a time, or run `dotnet run` from the project directory.

## HTML Frames and Forms

The Web Design section includes modern `iframe` usage, historical `frameset` syntax (clearly marked obsolete), HTML form controls, form and input attributes, standard input types, validation, accessibility and security notes. The examples are for learning; server-side validation is still required for real submissions.


## HNDIT1012 Week 1 and Week 2 Windows Forms projects

Open `CSharp/WindowsFormsPracticals.sln` in Visual Studio on Windows. It contains the Week 1 Hello World Button/Label project and the Week 2 four-operation calculator. These lessons are also available in the C# Windows Forms section of the website.

## Visual Studio 2010 / C# 4.0 projects

Open `CSharp/Practicals-Visual-Studio-2010.sln` in Visual Studio 2010. It contains 12 independent projects: six Windows Forms practicals and six Console Application practicals. Each project uses the Visual Studio 2010 MSBuild project format, targets **.NET Framework 4.0**, and uses **C# 4.0-compatible syntax** (no string interpolation or inline `out` variable declarations).

To run an example, select its project in Solution Explorer, choose **Set as StartUp Project**, then press **F5**. The .NET Framework 4.0 targeting pack/developer tools must be installed.
