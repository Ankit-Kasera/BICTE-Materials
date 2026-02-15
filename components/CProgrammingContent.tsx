import React from 'react';

const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
  <div className="bg-slate-900 dark:bg-black text-blue-300 dark:text-blue-400 p-4 rounded-xl font-mono text-sm my-4 overflow-x-auto border border-slate-700 dark:border-slate-800 shadow-inner">
    <pre>{code.trim()}</pre>
  </div>
);

const UnitHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="border-b-2 border-blue-600 dark:border-blue-500 pb-2 mb-6 mt-12">
    <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">{title}</h3>
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3 mt-8 flex items-center">
    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
    {children}
  </h4>
);

const SubSectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h5 className="text-md font-bold text-slate-700 dark:text-slate-300 mb-2 mt-4">{children}</h5>
);

const InfoBox: React.FC<{ children: React.ReactNode; type?: 'info' | 'warning' }> = ({ children, type = 'info' }) => (
  <div className={`p-4 rounded-xl border mb-4 text-sm leading-relaxed ${
    type === 'info' 
      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30 text-blue-800 dark:text-blue-300' 
      : 'bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-800/30 text-amber-800 dark:text-amber-300'
  }`}>
    {children}
  </div>
);

const CProgrammingContent: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Programming Concept with C</h2>
        <div className="h-1.5 w-24 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg italic">The Complete Academic Syllabus Guide</p>
      </div>

      {/* Unit 1 */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 mb-10 transition-colors">
        <UnitHeader title="Unit 1: Introduction to Programming Language" />
        
        <SectionTitle>1.1 Introduction</SectionTitle>
        <p className="text-slate-600 dark:text-slate-400 mb-4">Programming languages are tools for human-computer communication. They provide the syntax and semantics required to create software and solve computational problems.</p>
        
        <SectionTitle>1.2 Assembler, Compiler and Interpreter</SectionTitle>
        <p className="text-slate-600 dark:text-slate-400 mb-4">Since computers only understand machine language (binary), translators are needed to convert source code written by humans into machine-readable format.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <h6 className="font-bold text-blue-700 dark:text-blue-400 mb-1">Assembler</h6>
            <p className="text-xs text-slate-600 dark:text-slate-400">Translates low-level Assembly code into machine code (object code).</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <h6 className="font-bold text-blue-700 dark:text-blue-400 mb-1">Compiler</h6>
            <p className="text-xs text-slate-600 dark:text-slate-400">Translates the entire high-level program into machine code at once before execution.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <h6 className="font-bold text-blue-700 dark:text-blue-400 mb-1">Interpreter</h6>
            <p className="text-xs text-slate-600 dark:text-slate-400">Translates and executes high-level code line-by-line during runtime.</p>
          </div>
        </div>

        <SubSectionTitle>Comparison of Language Translators</SubSectionTitle>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 mb-6">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-slate-900 dark:bg-slate-800 text-white font-bold">
              <tr>
                <th className="p-3 border-r border-slate-700 dark:border-slate-700">Feature</th>
                <th className="p-3 border-r border-slate-700 dark:border-slate-700">Assembler</th>
                <th className="p-3 border-r border-slate-700 dark:border-slate-700">Compiler</th>
                <th className="p-3">Interpreter</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 dark:text-slate-400 divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 font-bold">Input</td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800">Assembly Language</td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800">High-Level Language</td>
                <td className="p-3">High-Level Language</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 font-bold">Execution Speed</td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800">Very Fast</td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800">Fast</td>
                <td className="p-3">Slow</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 font-bold">Errors</td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800">Not applicable</td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800">Shows all errors after scanning</td>
                <td className="p-3">Shows error line-by-line</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 font-bold">Examples</td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800">NASM, MASM</td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800">C (GCC), C++, Java</td>
                <td className="p-3">Python, PHP, JavaScript</td>
              </tr>
            </tbody>
          </table>
        </div>

        <SectionTitle>1.3 Syntax and Semantics</SectionTitle>
        <div className="space-y-4">
          <div>
            <SubSectionTitle>Syntax</SubSectionTitle>
            <p className="text-sm text-slate-600 dark:text-slate-400">Syntax refers to the set of <b>rules</b> that define the combinations of symbols that are considered to be a correctly structured program. If syntax rules are violated, the compiler throws a "Syntax Error".</p>
            <CodeBlock code={`
// Correct Syntax in C
int x = 10; 

// Syntax Error (Missing semicolon)
int y = 5
            `} />
          </div>
          <div>
            <SubSectionTitle>Semantics</SubSectionTitle>
            <p className="text-sm text-slate-600 dark:text-slate-400">Semantics refers to the <b>meaning</b> or logic of the program. A program can be syntactically correct but semantically wrong (Logical Error).</p>
            <CodeBlock code={`
// Syntactically correct but semantically doubtful logic:
int age = -5; // age cannot be negative in most contexts
float average = (a + b) / 0; // Semantic error: Division by zero
            `} />
          </div>
        </div>
        
        <SectionTitle>1.4 Programming Design Tools</SectionTitle>
        <div className="space-y-6">
          <div>
            <SubSectionTitle>1.4.1 Algorithm Example</SubSectionTitle>
            <p className="text-sm text-slate-500 dark:text-slate-500 mb-2 italic">Problem: Find the area of a circle.</p>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg font-mono text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              Step 1: Start<br/>
              Step 2: Input radius 'r'<br/>
              Step 3: Area = 3.14 * r * r<br/>
              Step 4: Output Area<br/>
              Step 5: Stop
            </div>
          </div>
          <div>
            <SubSectionTitle>1.4.2 Flow Chart Example</SubSectionTitle>
            <p className="text-sm text-slate-500 dark:text-slate-500 mb-2">Visual representation of logic flow using standard symbols like Ovals (Start/End), Parallelograms (I/O), Rectangles (Process), and Diamonds (Decision).</p>
          </div>
          <div>
            <SubSectionTitle>1.4.3 Pseudo Codes Example</SubSectionTitle>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg font-mono text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              BEGIN<br/>
              &nbsp;&nbsp;INPUT radius<br/>
              &nbsp;&nbsp;area = 3.14159 * radius * radius<br/>
              &nbsp;&nbsp;PRINT area<br/>
              END
            </div>
          </div>
        </div>
      </section>

      {/* Unit 2 */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 mb-10 transition-colors">
        <UnitHeader title="Unit 2: Introduction to C" />
        
        <SectionTitle>2.1 History of C Language</SectionTitle>
        <p className="text-slate-600 dark:text-slate-400 mb-4">Developed by <b>Dennis Ritchie</b> at Bell Labs in 1972. It originated from the B language and was primarily created to develop the UNIX operating system. It is a powerful, flexible, and efficient language that serves as the foundation for many modern languages.</p>

        <SectionTitle>2.2 Basic Structure of C Program</SectionTitle>
        <p className="text-slate-600 dark:text-slate-400 mb-4">A standard C program consists of documentation, link sections, definition sections, global declarations, main() function, and sub-programs.</p>
        <CodeBlock code={`
#include <stdio.h>    // Link Section

#define PI 3.14       // Definition Section

int main() {          // Main Function
    printf("Hello BICTE!");
    return 0;
}
        `} />

        <SectionTitle>2.3 Escape Sequence</SectionTitle>
        <p className="text-slate-600 dark:text-slate-400 mb-2 text-sm">Special character constants starting with a backslash (\) used for formatting output.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs mb-4">
          <div className="p-2 border border-slate-200 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800/50">\n: Newline</div>
          <div className="p-2 border border-slate-200 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800/50">\t: Horizontal Tab</div>
          <div className="p-2 border border-slate-200 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800/50">\b: Backspace</div>
          <div className="p-2 border border-slate-200 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800/50">\r: Carriage Return</div>
        </div>

        <SectionTitle>2.4 Comments</SectionTitle>
        <p className="text-slate-600 dark:text-slate-400 mb-2 text-sm">Non-executable notes used for documentation and code clarity.</p>
        <CodeBlock code={`
// This is a single-line comment

/* This is a 
   multi-line comment */
        `} />

        <SectionTitle>2.5 Variables and Constants Examples</SectionTitle>
        <CodeBlock code={`
int count = 10;          // Variable: value can change
const int MAX = 100;     // Constant: value remains fixed
char grade = 'A';
float price = 19.99;
        `} />

        <SectionTitle>2.6 Storage Classes [All-in-One]</SectionTitle>
        <p className="text-slate-600 dark:text-slate-400 mb-4">Defines the scope, visibility, and lifetime of variables.</p>
        <CodeBlock code={`
void example() {
    auto int a = 1;       // Auto: default local
    static int s = 1;     // Static: persistent across calls
    register int r = 1;   // Register: stored in CPU register
    s++;
}
extern int global_v;      // Extern: defined elsewhere
        `} />

        <SectionTitle>2.7 Data Types</SectionTitle>
        <p className="text-slate-600 dark:text-slate-400 mb-2 text-sm">Data types specify the type of data that a variable can store. This tells the compiler how much memory to allocate and how to interpret the stored bits.</p>
        <CodeBlock code={`
int age = 20;            // Integer data type (e.g., 2 or 4 bytes)
float weight = 65.5;     // Floating point for decimal numbers
double distance = 12.45; // Double precision floating point
char initial = 'B';      // Character data type (1 byte)
void;                    // Represents the absence of type
        `} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <SectionTitle>2.8 typedef</SectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">Used to give a new name to an existing data type.</p>
            <CodeBlock code={`
typedef unsigned long ulong;
ulong bigNumber = 9000;
            `} />
          </div>
          <div>
            <SectionTitle>2.9 Enumeration</SectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">Assigns names to integer constants for better readability.</p>
            <CodeBlock code={`
enum Level { LOW, MEDIUM, HIGH };
enum Level myLevel = MEDIUM; // value = 1
            `} />
          </div>
        </div>

        <SectionTitle>2.10 Format Specifiers in C</SectionTitle>
        <p className="text-slate-600 dark:text-slate-400 mb-2 text-sm">Placeholders used in I/O functions to tell the compiler what type of data is being handled.</p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
          <li className="p-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded">%d : Signed int</li>
          <li className="p-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded">%f : Float</li>
          <li className="p-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded">%c : Char</li>
          <li className="p-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded">%p : Pointer</li>
        </ul>

        <SectionTitle>2.11 Type Conversion</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Converting one data type into another. Implicit (automatic) or Explicit (type casting).</p>
        <CodeBlock code={`
int a = 10;
float b = (float)a / 3; // Explicit cast to preserve decimals
        `} />

        <SectionTitle>2.12 Formatted and Un-formatted I/O Functions</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <h6 className="font-bold mb-2 dark:text-slate-200">Formatted (Controlled input/output)</h6>
            <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
              <li>printf(): prints various data types.</li>
              <li>scanf(): reads various data types.</li>
            </ul>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <h6 className="font-bold mb-2 dark:text-slate-200">Un-formatted (Raw character/string)</h6>
            <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
              <li>getch(), putch(): Single char.</li>
              <li>gets(), puts(): Full string.</li>
            </ul>
          </div>
        </div>

        <SectionTitle>2.13 Operators Introduction</SectionTitle>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Symbols that perform operations on variables/values: Arithmetic (+, -, *), Relational (==, !=, &gt;), Logical (&amp;&amp;, ||, !), Bitwise (&amp;, |), Assignment (=, +=), and Misc (?, sizeof).</p>
      </section>

      {/* Unit 3 */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 mb-10 transition-colors">
        <UnitHeader title="Unit 3: Control Statements in C" />
        
        <SectionTitle>3.1 If Statements</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Conditional statements are used to perform different actions based on different conditions. These control the flow of program execution.</p>
        
        <div className="space-y-8">
          <div>
            <SubSectionTitle>1. Simple If</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2 italic">Syntax: if (condition) {`{ /* code */ }`}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Executes code only if the condition is true.</p>
            <CodeBlock code={`
int x = 10;
if (x > 5) {
    printf("x is greater than 5");
}
            `} />
          </div>

          <div>
            <SubSectionTitle>2. If-Else</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2 italic">Syntax: if (condition) {`{ /* code1 */ }`} else {`{ /* code2 */ }`}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Executes one block if true, and another if false.</p>
            <CodeBlock code={`
if (age >= 18) {
    printf("Eligible to vote");
} else {
    printf("Not eligible to vote");
}
            `} />
          </div>

          <div>
            <SubSectionTitle>3. Else-If Ladder</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2 italic">Syntax: if (c1) {`{...}`} else if (c2) {`{...}`} else {`{...}`}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Used when there are multiple conditions to check sequentially.</p>
            <CodeBlock code={`
if (marks >= 80) {
    printf("Distinction");
} else if (marks >= 60) {
    printf("First Division");
} else if (marks >= 40) {
    printf("Pass");
} else {
    printf("Fail");
}
            `} />
          </div>

          <div>
            <SubSectionTitle>4. Nested If</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2 italic">Syntax: if (c1) {`{ if (c2) { ... } }`}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">An if statement inside another if statement. Used for hierarchical decision making.</p>
            <CodeBlock code={`
if (num > 0) {
    if (num % 2 == 0) {
        printf("Positive and Even");
    } else {
        printf("Positive and Odd");
    }
}
            `} />
          </div>
        </div>

        <SectionTitle>3.2 Switch Statement</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A multi-way branch statement that provides an easy way to dispatch execution to different parts of code based on the value of an expression.</p>
        <SubSectionTitle>Syntax</SubSectionTitle>
        <CodeBlock code={`
switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // default code block
}
        `} />
        <SubSectionTitle>Example</SubSectionTitle>
        <CodeBlock code={`
int day = 3;
switch(day) {
    case 1: printf("Sunday"); break;
    case 2: printf("Monday"); break;
    case 3: printf("Tuesday"); break;
    default: printf("Another day");
}
        `} />

        <SectionTitle>3.3 Jump Statements: break, continue and goto</SectionTitle>
        <div className="space-y-6">
          <div>
            <SubSectionTitle>break Statement</SubSectionTitle>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Terminates the loop or switch statement immediately and transfers execution to the next statement following the loop/switch.</p>
            <CodeBlock code={`
for(int i = 0; i < 10; i++) {
    if(i == 5) break; // Exit loop when i is 5
    printf("%d ", i);
}
            `} />
          </div>
          <div>
            <SubSectionTitle>continue Statement</SubSectionTitle>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Skips the current iteration of the loop and jumps to the next iteration.</p>
            <CodeBlock code={`
for(int i = 0; i < 5; i++) {
    if(i == 2) continue; // Skip printing 2
    printf("%d ", i);
}
            `} />
          </div>
          <div>
            <SubSectionTitle>goto Statement</SubSectionTitle>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Used to alter the normal flow of a program by jumping to a specific labeled part of the code.</p>
            <CodeBlock code={`
int age = 15;
if (age < 18) goto underage;

printf("You can vote");
return;

underage:
    printf("You are too young to vote");
            `} />
          </div>
        </div>

        <SectionTitle>3.4 Loops: for, while, do-while</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Loops are used to execute a block of code repeatedly until a specific condition is met.</p>
        
        <div className="space-y-6">
          <div>
            <SubSectionTitle>For Loop</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-1 italic">Syntax: for(initialization; condition; increment/decrement) {`{ /* code */ }`}</p>
            <CodeBlock code={`
// Prints numbers from 0 to 4
for(int i = 0; i < 5; i++) {
    printf("%d ", i);
}
            `} />
          </div>
          <div>
            <SubSectionTitle>While Loop (Entry Controlled)</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-1 italic">Syntax: while(condition) {`{ /* code */ }`}</p>
            <CodeBlock code={`
int i = 0;
while(i < 5) {
    printf("%d ", i);
    i++;
}
            `} />
          </div>
          <div>
            <SubSectionTitle>Do-While Loop (Exit Controlled)</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-1 italic">Syntax: do {`{ /* code */ }`} while(condition);</p>
            <InfoBox>Guarantees at least one execution because the condition is checked after the body.</InfoBox>
            <CodeBlock code={`
int i = 0;
do {
    printf("%d ", i);
    i++;
} while(i < 5);
            `} />
          </div>
        </div>

        <SectionTitle>3.5 Nested Loop</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A loop inside another loop is called a nested loop. The inner loop executes completely for every single iteration of the outer loop.</p>
        <CodeBlock code={`
for(int i = 1; i <= 3; i++) {
    for(int j = 1; j <= 3; j++) {
        printf("%d ", i * j);
    }
    printf("\\n");
}
        `} />

        <SectionTitle>3.6 Infinite Loop</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A loop that continues indefinitely because its exit condition is never met.</p>
        <CodeBlock code={`
while(1) {
    printf("This will run forever...\\n");
}
// or
for(;;) {
    // some code
}
        `} />
      </section>

      {/* Unit 4 */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 mb-10 transition-colors">
        <UnitHeader title="Unit 4: Array and String" />
        
        <SectionTitle>4.1 Introduction to Array</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">An array is a fixed-size, sequential collection of elements of the same data type. It stores multiple values in a single variable, making data management efficient.</p>
        <SubSectionTitle>Syntax</SubSectionTitle>
        <CodeBlock code={`data_type array_name[array_size];`} />

        <SectionTitle>4.2 Declare, Access and Initialize</SectionTitle>
        <CodeBlock code={`
int arr[5] = {1, 2, 3, 4, 5}; // Declare & Init
int value = arr[0];           // Access (index starts at 0)
        `} />

        <SectionTitle>4.3 Multi-dimensional Array</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Arrays of arrays, often used for matrices.</p>
        <CodeBlock code={`int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};`} />

        <SectionTitle>4.4 Basic Building & Examples</SectionTitle>
        <InfoBox>Important for data sorting and searching. Example: Finding max element in an array.</InfoBox>
        <CodeBlock code={`
int max = arr[0];
for(int i=1; i<5; i++) {
    if(arr[i] > max) max = arr[i];
}
        `} />

        <SectionTitle>4.5 Character Array and String</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Strings are char arrays terminated by a null character (\0).</p>
        <CodeBlock code={`char name[] = "BICTE"; // Same as {'B','I','C','T','E','\\0'}`} />

        <SectionTitle>4.6 String Manipulation Examples</SectionTitle>
        <CodeBlock code={`
strlen(s);  // length
strcpy(d,s); // copy
strcat(d,s); // concatenate
strcmp(s1,s2); // compare
        `} />
      </section>

      {/* Unit 5 */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 mb-10 transition-colors">
        <UnitHeader title="Unit 5: Structure in C" />
        
        <SectionTitle>5.1 Concept of Structure</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A structure is a user-defined data type that allows grouping of different types of data (heterogeneous data) under a single name. It is useful for representing complex entities like a 'Student' or an 'Employee'.</p>
        <SubSectionTitle>Syntax</SubSectionTitle>
        <CodeBlock code={`
struct structure_name {
    data_type member1;
    data_type member2;
    ...
};
        `} />

        <SectionTitle>5.2 Initializing & Accessing Members</SectionTitle>
        <CodeBlock code={`
struct Student { int roll; char name[20]; };
struct Student s1 = {101, "Alice"};
printf("%d", s1.roll); // dot operator
        `} />

        <SectionTitle>5.3 Array of Structure</SectionTitle>
        <CodeBlock code={`struct Student classA[30]; // list of students`} />

        <SectionTitle>5.4 Nested Structure</SectionTitle>
        <CodeBlock code={`struct Profile { struct Student std; char bday[10]; };`} />

        <SectionTitle>5.5 Union: Syntax & Example</SectionTitle>
        <p className="text-sm text-slate-500 dark:text-slate-500 mb-2">Unions save memory by using one shared memory space for all members.</p>
        <CodeBlock code={`
union Info { int i; char c; };
union Info obj; obj.i = 65; // obj.c also becomes 'A'
        `} />
      </section>

      {/* Unit 6 */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 mb-10 transition-colors">
        <UnitHeader title="Unit 6: Pointer" />
        
        <SectionTitle>6.1 Pointer Variable Introduction</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A pointer is a variable that stores the memory address of another variable. They are used for dynamic memory allocation, efficient array handling, and passing arguments by reference.</p>
        <SubSectionTitle>Syntax</SubSectionTitle>
        <CodeBlock code={`data_type *pointer_name;`} />

        <SectionTitle>6.2 Operators (& and *)</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><b>& (Address-of):</b> returns memory location. <b>* (Indirection):</b> retrieves value at the address.</p>
        
        <SectionTitle>6.3 Pointer Arithmetic</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Incrementing a pointer moves it by the size of the data type it points to.</p>

        <SectionTitle>6.4 1D Array and Pointers</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Array names are constant pointers to the first element.</p>
        <CodeBlock code={`int *p = arr; // p points to arr[0]`} />

        <SectionTitle>6.5 Dynamic Memory Allocation (DMA)</SectionTitle>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 mt-4 mb-6">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-slate-900 dark:bg-slate-800 text-white font-bold">
              <tr>
                <th className="p-3 border-r border-slate-700 dark:border-slate-700">Function</th>
                <th className="p-3 border-r border-slate-700 dark:border-slate-700">Arg Type</th>
                <th className="p-3 border-r border-slate-700 dark:border-slate-700">Initialization</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 dark:text-slate-400 divide-y divide-slate-100 dark:divide-slate-800">
              <tr><td className="p-3 border-r border-slate-100 dark:border-slate-800 font-mono font-bold bg-slate-50 dark:bg-slate-800/50">malloc</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">size in bytes</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Garbage values</td><td className="p-3">Allocate single block</td></tr>
              <tr><td className="p-3 border-r border-slate-100 dark:border-slate-800 font-mono font-bold bg-slate-50 dark:bg-slate-800/50">calloc</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">count, size</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Zero initialized</td><td className="p-3">Allocate multiple blocks</td></tr>
              <tr><td className="p-3 border-r border-slate-100 dark:border-slate-800 font-mono font-bold bg-slate-50 dark:bg-slate-800/50">realloc</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">ptr, newSize</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Existing data kept</td><td className="p-3">Resize memory block</td></tr>
              <tr><td className="p-3 border-r border-slate-100 dark:border-slate-800 font-mono font-bold bg-slate-50 dark:bg-slate-800/50">free</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">pointer</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">-</td><td className="p-3">Release memory</td></tr>
            </tbody>
          </table>
        </div>
        
        <SectionTitle>6.6 Pointer and Structure</SectionTitle>
        <CodeBlock code={`
struct Student *ptr = &s1;
printf("%d", ptr->roll); // Arrow (->) operator for pointers
        `} />
      </section>

      {/* Unit 7 */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 mb-10 transition-colors">
        <UnitHeader title="Unit 7: Function" />
        
        <SectionTitle>7.1 Function Introduction</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">A function is a self-contained block of statements that performs a specific task. It allows a large program to be divided into smaller, manageable, and reusable modules.</p>
        <SubSectionTitle>Syntax</SubSectionTitle>
        <CodeBlock code={`
return_type function_name(parameter_list) {
    // function body
    return value; // optional based on return_type
}
        `} />

        <SectionTitle>7.2 Types and Creation of Functions</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Functions are categorized into <b>Library Functions</b> (built-in like <code>printf</code>) and <b>User-Defined Functions</b> (created by programmers).</p>
        
        <div className="space-y-4">
          <SubSectionTitle>User-Defined Function Components</SubSectionTitle>
          <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-2">
            <li><b>Function Prototype:</b> Tells the compiler about the function name, parameters, and return type.</li>
            <li><b>Function Call:</b> Transfers control to the function.</li>
            <li><b>Function Definition:</b> Contains the actual code to be executed.</li>
          </ul>
          <CodeBlock code={`
int add(int, int); // Prototype

int main() {
    int sum = add(5, 10); // Call
    return 0;
}

int add(int a, int b) { // Definition
    return a + b;
}
          `} />
        </div>

        <SectionTitle>7.3 Scope of Variables: Local vs Global</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <h6 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-2">Local Variables</h6>
            <p className="text-xs text-slate-500 dark:text-slate-500">Declared inside a function. Only accessible within that block. Destroyed when function finishes.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
            <h6 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-2">Global Variables</h6>
            <p className="text-xs text-slate-500 dark:text-slate-500">Declared outside all functions. Accessible by any part of the program. Live until the program ends.</p>
          </div>
        </div>

        <SectionTitle>7.4 Parameter Passing Techniques</SectionTitle>
        <div className="space-y-6">
          <div>
            <SubSectionTitle>Call by Value</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">Values are copied. Changes inside the function do not affect the original variables.</p>
            <CodeBlock code={`void swap(int x, int y) { /* swapped copy only */ }`} />
          </div>
          <div>
            <SubSectionTitle>Call by Reference</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">Addresses are passed using pointers. Changes inside the function reflect in the original variables.</p>
            <CodeBlock code={`void swap(int *x, int *y) { /* original swapped */ }`} />
          </div>
        </div>

        <SectionTitle>7.5 Recursion</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">The process in which a function calls itself directly or indirectly. It must have a <b>Base Case</b> to prevent infinite execution.</p>
        <CodeBlock code={`
int factorial(int n) {
    if (n <= 1) return 1; // Base Case
    return n * factorial(n - 1); // Recursive Step
}
        `} />

        <SectionTitle>7.6 Returning Multiple Values</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">In C, a function can return only one value via the <code>return</code> keyword. To "return" multiple values, we use <b>Pointers</b> or <b>Structures</b>.</p>

        <SectionTitle>7.7 Command Line Arguments</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Allow passing values to the <code>main()</code> function directly from the console at the time of execution.</p>
        <CodeBlock code={`
int main(int argc, char *argv[]) {
    // argc: argument count
    // argv: array of strings (the actual arguments)
    printf("Program Name: %s\\n", argv[0]);
    if(argc > 1) printf("First Arg: %s\\n", argv[1]);
}
        `} />
      </section>

      {/* Unit 8 */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 mb-10 transition-colors">
        <UnitHeader title="Unit 8: File Handling" />
        
        <SectionTitle>8.1 Concept of File</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">A file is a collection of bytes stored on a secondary storage device (like a hard disk). C provides a structure named <code>FILE</code> to handle file operations.</p>
        <SubSectionTitle>Syntax for File Pointer</SubSectionTitle>
        <CodeBlock code={`FILE *fp; // Pointer to a FILE structure`} />
        <SubSectionTitle>Opening and Closing a File</SubSectionTitle>
        <CodeBlock code={`
fp = fopen("filename.txt", "mode"); // Opening
if (fp == NULL) printf("Error opening file!");
fclose(fp); // Closing
        `} />

        <SectionTitle>8.2 Access Methods</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          <b>Sequential Access:</b> Data is read or written in a continuous linear order, from the beginning to the end.
          <br />
          <b>Random (Direct) Access:</b> Data can be accessed from any position in the file without reading the preceding data.
        </p>

        <SectionTitle>8.3 File Opening Modes</SectionTitle>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 mb-6">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-blue-600 dark:bg-blue-800 text-white font-bold">
              <tr>
                <th className="p-3 border-r border-blue-500 dark:border-blue-700">Mode</th>
                <th className="p-3 border-r border-blue-500 dark:border-blue-700">Action</th>
                <th className="p-3 border-r border-blue-500 dark:border-blue-700">If Exists?</th>
                <th className="p-3">If Not?</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 dark:text-slate-400 divide-y divide-slate-100 dark:divide-slate-800">
              <tr><td className="p-3 border-r border-slate-100 dark:border-slate-800 font-bold font-mono bg-slate-50 dark:bg-slate-800/50">r / rb</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Open for Reading</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Opens</td><td className="p-3">NULL</td></tr>
              <tr><td className="p-3 border-r border-slate-100 dark:border-slate-800 font-bold font-mono bg-slate-50 dark:bg-slate-800/50">w / wb</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Open for Writing</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Overwrites</td><td className="p-3">Create</td></tr>
              <tr><td className="p-3 border-r border-slate-100 dark:border-slate-800 font-bold font-mono bg-slate-50 dark:bg-slate-800/50">a / ab</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Open for Appending</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Appends to end</td><td className="p-3">Create</td></tr>
              <tr><td className="p-3 border-r border-slate-100 dark:border-slate-800 font-bold font-mono bg-slate-50 dark:bg-slate-800/50">r+ / rb+</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Read + Write</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Opens</td><td className="p-3">NULL</td></tr>
              <tr><td className="p-3 border-r border-slate-100 dark:border-slate-800 font-bold font-mono bg-slate-50 dark:bg-slate-800/50">w+ / wb+</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Write + Read</td><td className="p-3 border-r border-slate-100 dark:border-slate-800">Overwrites</td><td className="p-3">Create</td></tr>
            </tbody>
          </table>
        </div>
        <InfoBox type="info">Adding 'b' to the mode (e.g., "rb") is used for handling binary files.</InfoBox>

        <SectionTitle>8.5 File I/O Functions</SectionTitle>
        
        <div className="space-y-6">
          <div>
            <SubSectionTitle>1. Character I/O (fgetc and fputc)</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">Used for reading or writing a single character.</p>
            <CodeBlock code={`
fputc('A', fp);          // Writes 'A' to file
char c = fgetc(fp);      // Reads a character from file
            `} />
          </div>

          <div>
            <SubSectionTitle>2. String I/O (fgets and fputs)</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">Used for reading or writing strings (lines of text).</p>
            <CodeBlock code={`
fputs("Hello C", fp);           // Writes string to file
fgets(buffer, 100, fp);        // Reads up to 99 chars into buffer
            `} />
          </div>

          <div>
            <SubSectionTitle>3. Formatted I/O (fprintf and fscanf)</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">Similar to printf and scanf, but for files.</p>
            <CodeBlock code={`
fprintf(fp, "%s %d", "Age", 20); // Writes formatted data
fscanf(fp, "%s %d", str, &val);  // Reads formatted data
            `} />
          </div>

          <div>
            <SubSectionTitle>4. Integer I/O (getw and putw)</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">Used specifically for reading or writing integer values.</p>
            <CodeBlock code={`
putw(100, fp);      // Writes an integer to file
int n = getw(fp);   // Reads an integer from file
            `} />
          </div>
        </div>

        <SectionTitle>8.6 Random Access Functions</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">These functions allow you to move the file pointer to any specific location.</p>
        
        <div className="space-y-4">
          <div>
            <SubSectionTitle>fseek()</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">Moves the pointer to a specific offset.</p>
            <CodeBlock code={`
fseek(fp, offset, position);
// position can be:
// SEEK_SET (Beginning), SEEK_CUR (Current), SEEK_END (End)
            `} />
          </div>
          <div>
            <SubSectionTitle>ftell() and rewind()</SubSectionTitle>
            <p className="text-xs text-slate-500 dark:text-slate-500 mb-2"><b>ftell:</b> returns current position. <b>rewind:</b> sets pointer back to start.</p>
            <CodeBlock code={`
long pos = ftell(fp); // Get current position
rewind(fp);           // Back to 0
            `} />
          </div>
        </div>

        <SectionTitle>8.7 Deleting File</SectionTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">The <code>remove()</code> function is used to delete a file from the disk.</p>
        <CodeBlock code={`
if (remove("old_data.txt") == 0) 
    printf("Deleted successfully");
else 
    printf("Error in deletion");
        `} />
      </section>
      
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/20 px-8 py-4 rounded-full border border-green-100 dark:border-green-800 shadow-sm">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-xl">BICTE C Course Complete</span>
        </div>
      </div>
    </div>
  );
};

export default CProgrammingContent;